package com.example.myjourney.service;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.myjourney.dto.TravelDistanceRequestDto;
import com.example.myjourney.dto.TravelDistanceResponseDto;
import com.example.myjourney.entity.Travel;
import com.example.myjourney.entity.User;
import com.example.myjourney.repository.TravelDistanceRepository;
import com.example.myjourney.repository.UserRepository;
import com.example.myjourney.utils.MapApiUtil;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TravelService {

    private final TravelDistanceRepository travelDistanceRepository;
    private final UserRepository userRepository;
    private final MapApiUtil mapApiUtil; 


    @Transactional
    public TravelDistanceResponseDto calculateDistance(User user, TravelDistanceRequestDto dto) {
        // Re-fetch managed User from DB
        User managedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        double distance = mapApiUtil.getDistanceInKm(dto.getFromLocation(), dto.getToLocation());

        Travel travel = Travel.builder()
                .fromLocation(dto.getFromLocation())
                .toLocation(dto.getToLocation())
                .distanceKm(distance)
                .days(dto.getDays())
                .user(managedUser)
                .build();

        travel = travelDistanceRepository.save(travel);

        
        return new TravelDistanceResponseDto(travel.getFromLocation(), travel.getToLocation(), travel.getDistanceKm());
    }

}