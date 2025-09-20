package com.example.myjourney.utils;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class MapApiUtil {

    private static final String API_KEY = "your_key"; 
    private static final String URL = "https://maps.googleapis.com/maps/api/directions/json?origin=%s&destination=%s&key=%s";

    public double getDistanceInKm(String source, String destination) {
        try {
            String url = String.format(URL, source, destination, API_KEY);
            RestTemplate restTemplate = new RestTemplate();
            String response = restTemplate.getForObject(url, String.class);

            System.out.println("Google Maps API Response: " + response);

            // Parse JSON with Jackson
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response);

            String status = root.get("status").asText();
            if (!"OK".equals(status)) {
                System.err.println("Google Maps API error: " + status);
                return 0.0;
            }

            // distance is in routes[0].legs[0].distance.value (meters)
            JsonNode legs = root.path("routes").get(0).path("legs").get(0);
            double distanceMeters = legs.path("distance").path("value").asDouble();

            return distanceMeters / 1000.0; 

        } catch (Exception e) {
            e.printStackTrace();
            return 0.0;
        }
    }
}
