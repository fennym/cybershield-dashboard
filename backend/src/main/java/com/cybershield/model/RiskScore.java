package com.cybershield.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "risk_scores")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RiskScore {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String domain;
    private Integer score;
    private String grade;
    private String trend;
    private String category;
    private LocalDateTime lastUpdated;

    @PrePersist @PreUpdate
    protected void onUpdate() { lastUpdated = LocalDateTime.now(); }
}
