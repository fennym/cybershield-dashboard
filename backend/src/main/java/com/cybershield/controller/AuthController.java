package com.cybershield.controller;

import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        if ("admin@cybershield.io".equals(request.getEmail())
                && "Shield@2024".equals(request.getPassword())) {
            return ResponseEntity.ok(new AuthResponse("demo-jwt-token", "Bearer", 86400L));
        }
        return ResponseEntity.status(401).build();
    }

    @Data
    public static class LoginRequest {
        private String email;
        private String password;
    }

    public record AuthResponse(String token, String type, Long expiresIn) {}
}
