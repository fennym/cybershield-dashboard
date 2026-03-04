package com.cybershield.service;

import com.cybershield.model.RiskScore;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class RiskScoreService {

    private final List<RiskScore> store = new ArrayList<>();

    public List<RiskScore> getAllRiskScores() { return store; }

    public Optional<RiskScore> findById(String id) {
        return store.stream().filter(r -> r.getId().equals(id)).findFirst();
    }

    public RiskScore save(RiskScore riskScore) {
        if (riskScore.getId() == null) riskScore.setId(UUID.randomUUID().toString());
        store.removeIf(r -> r.getId().equals(riskScore.getId()));
        store.add(riskScore);
        return riskScore;
    }

    public void deleteById(String id) {
        store.removeIf(r -> r.getId().equals(id));
    }
}
