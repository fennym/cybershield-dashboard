# CyberShield Security Intelligence Dashboard

> A production-grade cybersecurity risk monitoring platform built with **React + TypeScript** (frontend) and **Spring Boot microservices** (backend), exposing secure REST APIs with JWT authentication, OWASP-compliant security headers, and real-time risk intelligence.

![CI/CD](https://github.com/YOUR_USERNAME/cybershield-dashboard/actions/workflows/ci-cd.yml/badge.svg)

## Tech Stack
**Frontend:** React 18, TypeScript, Vite, Playwright, Vitest
**Backend:** Java 21, Spring Boot 3.3, Spring Security (JWT), OpenAPI/Swagger
**DevOps:** GitHub Actions, Docker, AWS ECS, OWASP Dependency-Check

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Login: `admin@cybershield.io` / `Shield@2024`

### Backend
```bash
cd backend
mvn spring-boot:run
```
Swagger UI â†’ http://localhost:8080/swagger-ui.html

## Features
- Real-time cyber risk ratings (A-F scoring)
- Compromised account tracker with breach source and severity
- Remediation action tracker with priority queuing
- 30-day threat timeline with trend analysis
- JWT authentication with BCrypt password hashing
- OWASP security headers (CSP, X-Frame-Options, Permissions-Policy)
- GitHub Actions CI/CD pipeline â†’ AWS ECS zero-downtime deploy

## API Endpoints
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/v1/auth/login | None | Get JWT token |
| GET | /api/v1/risk-scores | ANALYST | All risk ratings |
| POST | /api/v1/risk-scores | ADMIN | Create risk score |
| DELETE | /api/v1/risk-scores/{id} | ADMIN | Delete risk score |
