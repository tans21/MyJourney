package com.example.myjourney.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.myjourney.dto.TravelHistoryResponseDto;
import com.example.myjourney.entity.TravelDistance;
import com.example.myjourney.entity.User;

public interface TravelDistanceRepository extends JpaRepository<TravelDistance, Long> {

    List<TravelDistance> findByUser(User user);

    @Query("SELECT new com.example.myjourney.dto.TravelHistoryResponseDto(t.fromLocation, t.toLocation) " +
           "FROM TravelDistance t WHERE t.user = :user")
    List<TravelHistoryResponseDto> findHistoryByUser(@Param("user") User user);
}

