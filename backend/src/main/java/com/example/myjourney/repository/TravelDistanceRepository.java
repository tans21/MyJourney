package com.example.myjourney.repository;

import com.example.myjourney.entity.TravelDistance;
import com.example.myjourney.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TravelDistanceRepository extends JpaRepository<TravelDistance, Long> {
    List<TravelDistance> findByUser(User user);
}
