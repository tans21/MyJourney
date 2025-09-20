package com.example.myjourney.repository;

import com.example.myjourney.entity.TravelItinerary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelItineraryRepository extends JpaRepository<TravelItinerary, Long> {
}
