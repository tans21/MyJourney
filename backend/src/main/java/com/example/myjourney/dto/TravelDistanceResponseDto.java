package com.example.myjourney.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TravelDistanceResponseDto {
    private String from;
    private String to;
    private double distanceKm;
}