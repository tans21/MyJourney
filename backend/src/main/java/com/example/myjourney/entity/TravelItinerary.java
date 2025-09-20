package com.example.myjourney.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "travel_itinerary")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TravelItinerary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itineraryId;

    @Column(length = 2000) 
    private String planDetails;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "travel_id", nullable = false)
    private Travel travel;
}
