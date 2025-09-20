package com.example.myjourney.service;

import com.example.myjourney.dto.TravelItineraryResponseDto;
import com.example.myjourney.entity.Travel;
import com.example.myjourney.entity.TravelItinerary;
import com.example.myjourney.repository.TravelItineraryRepository;
import com.example.myjourney.repository.TravelRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Collections;
import java.util.Map;

@Service
public class TravelItineraryService {

    private final TravelRepository travelRepository;
    private final TravelItineraryRepository travelItineraryRepository;
    private final String geminiApiKey;

    private static final String GEMINI_API_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=";


    public TravelItineraryService(TravelRepository travelRepository,
                                  TravelItineraryRepository travelItineraryRepository,
                                  @Value("${gemini.api.key}") String geminiApiKey) {
        this.travelRepository = travelRepository;
        this.travelItineraryRepository = travelItineraryRepository;
        this.geminiApiKey = geminiApiKey;
    }

    /**
     * Generate itinerary for a specific travel record and save it.
     */
    public TravelItineraryResponseDto generateItineraryForTravel(Long travelId) {
        Travel travel = travelRepository.findById(travelId)
                .orElseThrow(() -> new RuntimeException("Travel record not found"));

        String fromLocation = travel.getFromLocation();
        String toLocation = travel.getToLocation();
        int days = travel.getDays();

        String prompt = String.format(
                "Create a detailed %d-day travel itinerary from %s to %s. " +
                        "For each day, provide a morning, afternoon, and evening plan. " +
                        "The response should be a single paragraph describing the trip. " +
                        "Do not include any other text or formatting.",
                days, fromLocation, toLocation
        );

        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, Object> payload = Map.of(
                "contents", Collections.singletonList(
                        Map.of("parts", Collections.singletonList(
                                Map.of("text", prompt)
                        ))
                )
        );

        String jsonPayload;
        try {
            jsonPayload = objectMapper.writeValueAsString(payload);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error creating JSON payload", e);
        }

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(GEMINI_API_URL + geminiApiKey))
                .header("Content-Type", "application/json")
                .timeout(Duration.ofMinutes(5))
                .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
                .build();

        HttpClient client = HttpClient.newHttpClient();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                JsonNode rootNode = objectMapper.readTree(response.body());
                String itineraryText = rootNode.at("/candidates/0/content/parts/0/text").asText();


                TravelItinerary travelItinerary = new TravelItinerary();
                travelItinerary.setPlanDetails(itineraryText);
                travelItinerary.setTravel(travel);
                travelItineraryRepository.save(travelItinerary);

                return new TravelItineraryResponseDto(itineraryText);

            } else {
                throw new RuntimeException("API request failed with status code: " +
                        response.statusCode() + " and body: " + response.body());
            }

        } catch (IOException | InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new RuntimeException("Error calling Gemini API", e);
        }
    }
}
