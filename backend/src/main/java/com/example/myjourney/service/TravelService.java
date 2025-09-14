package com.example.myjourney.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.myjourney.dto.TravelDistanceRequestDto;
import com.example.myjourney.dto.TravelDistanceResponseDto;
import com.example.myjourney.dto.TravelHistoryResponseDto;
import com.example.myjourney.entity.TravelDistance;
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
    private final ModelMapper modelMapper;

    @Transactional
    public TravelDistanceResponseDto calculateDistance(User user, TravelDistanceRequestDto dto) {
        // Re-fetch managed User from DB
        User managedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        double distance = mapApiUtil.getDistanceInKm(dto.getFrom(), dto.getTo());

        TravelDistance travel = TravelDistance.builder()
                .fromLocation(dto.getFrom())
                .toLocation(dto.getTo())
                .distanceKm(distance)
                .user(managedUser)
                .build();

        travel = travelDistanceRepository.save(travel);

        return modelMapper.map(travel, TravelDistanceResponseDto.class);
    }

    @Transactional(readOnly = true)
    public List<TravelHistoryResponseDto> getHistoryByUser(User user) {
        // Re-fetch managed User from DB
        User managedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        List<TravelHistoryResponseDto> history = travelDistanceRepository.findHistoryByUser(managedUser);
        if (history.isEmpty()) {
            throw new EntityNotFoundException("No travel history found for user");
        }
        return history;
    }
}
