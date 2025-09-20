package com.example.myjourney.repository;

import com.example.myjourney.entity.Travel;
import com.example.myjourney.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TravelDistanceRepository extends JpaRepository<Travel, Long> {
    List<Travel> findByUser(User user);
}
