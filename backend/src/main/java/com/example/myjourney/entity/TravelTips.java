package com.example.myjourney.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "travel_tips")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TravelTips {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tipId;

    @Column(length = 1000)
    private String tipText;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "travel_id", nullable = false)
    private Travel travel;
}
