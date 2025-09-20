package com.example.myjourney.repository;

import com.example.myjourney.entity.Travel;
import com.example.myjourney.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TravelRepository extends JpaRepository<Travel, Long> {
    List<Travel> findByUser(User user);

    // Corrected method name to match the entity relationship
    Optional<Travel> findTopByUserUserIdOrderByTravelIdDesc(Long userId);
}