package com.example.myjourney.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TravelDistanceResponseDto {
    private String fromLocation;
    private String toLocation;
    private double distanceKm;
}