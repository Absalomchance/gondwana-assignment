# Job Application Assignment

## Objective
- Build a RESTful API in PHP
- Construct a frontend to interact with the API
- Use GitHub Codespaces for environment
- Integrate SonarCloud for PR QA

## Tech Stack
- PHP (Backend)
- HTML/CSS/JavaScript (Frontend)
- GitHub Actions + SonarCloud (CI)
- GitHub Codespaces (Dev Environment)

## How to Run (GitHub Codespaces)
Open the repository in a GitHub Codespace and use the Docker environment for local development. The backend will run on `localhost:8000`.

## API Endpoint
- `POST /api/index.php`

### Request Payload
```json
{
  "Unit Name": "String",
  "Arrival": "dd/mm/yyyy",
  "Departure": "dd/mm/yyyy",
  "Occupants": 2,
  "Ages": [25, 5]
}
