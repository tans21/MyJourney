package com.example.myjourney.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TravelHistoryResponseDto {
    private String fromLocation;
    private String toLocation;
}

