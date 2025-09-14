package com.example.myjourney.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.example.myjourney.dto.TravelDistanceRequestDto;
import com.example.myjourney.dto.TravelDistanceResponseDto;
import com.example.myjourney.dto.TravelHistoryResponseDto;
import com.example.myjourney.entity.User;
import com.example.myjourney.repository.UserRepository;
import com.example.myjourney.service.TravelService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/travel")
@RequiredArgsConstructor
public class TravelController {

    private final TravelService travelService;
    private final UserRepository userRepository;

    @PostMapping("/distance")
    public ResponseEntity<TravelDistanceResponseDto> calculateDistance(
            Authentication authentication,
            @RequestBody TravelDistanceRequestDto dto) {

        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(travelService.calculateDistance(user, dto));
    }

    @GetMapping("/history")
    public ResponseEntity<List<TravelHistoryResponseDto>> getHistoryByUser(
            Authentication authentication) {

        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return ResponseEntity.ok(travelService.getHistoryByUser(user));
    }
}
