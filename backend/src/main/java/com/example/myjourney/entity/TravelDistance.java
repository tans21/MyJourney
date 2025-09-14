package com.example.myjourney.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "travel_distance")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TravelDistance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long travelId; 

    private String fromLocation;

    private String toLocation;

    private double distanceKm;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}