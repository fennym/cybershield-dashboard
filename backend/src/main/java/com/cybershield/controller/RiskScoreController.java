package com.cybershield.controller;

import com.cybershield.model.RiskScore;
import com.cybershield.service.RiskScoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/risk-scores")
@RequiredArgsConstructor
public class RiskScoreController {

    private final RiskScoreService riskScoreService;

    @GetMapping
    public ResponseEntity<List<RiskScore>> getAllRiskScores() {
        return ResponseEntity.ok(riskScoreService.getAllRiskScores());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RiskScore> getRiskScoreById(@PathVariable String id) {
        return riskScoreService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<RiskScore> createRiskScore(@RequestBody RiskScore riskScore) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(riskScoreService.save(riskScore));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRiskScore(@PathVariable String id) {
        riskScoreService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
