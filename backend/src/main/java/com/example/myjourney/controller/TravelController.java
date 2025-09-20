package com.example.myjourney.controller;

import com.example.myjourney.dto.TravelDistanceRequestDto;
import com.example.myjourney.dto.TravelDistanceResponseDto;
import com.example.myjourney.dto.TravelItineraryResponseDto;
import com.example.myjourney.entity.User;
import com.example.myjourney.repository.UserRepository;
import com.example.myjourney.service.TravelItineraryService;
import com.example.myjourney.service.TravelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/travel")
@RequiredArgsConstructor
public class TravelController {

    private final TravelService travelService;
    private final TravelItineraryService travelItineraryService;
    private final UserRepository userRepository;

    @PostMapping("/distance")
    public ResponseEntity<TravelDistanceResponseDto> calculateDistance(
            Authentication authentication,
            @RequestBody TravelDistanceRequestDto dto) {

        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        TravelDistanceResponseDto response = travelService.calculateDistance(user, dto);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/itinerary/{travelId}")
    public ResponseEntity<TravelItineraryResponseDto> createItinerary(
            @PathVariable Long travelId) throws Exception {

        TravelItineraryResponseDto response = travelItineraryService
                .generateItineraryForTravel(travelId);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}