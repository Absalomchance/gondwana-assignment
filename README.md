
Welcome! This repository contains a coding assignment completed as part of a job application process. The goal was to demonstrate proficiency in building a full-stack solution using PHP and JavaScript.

##  Objective
- Develop a RESTful API using **PHP**
- Construct a simple **UI** to interact with the API
- Ensure compatibility with **GitHub Codespaces**
- Implement **quality checks** using **SonarCloud**

##  Project Structure
- **Backend:** PHP-based RESTful API that processes and transforms client payloads to match a remote API format and relays the response.
- **Frontend:** Interactive and minimal user interface that allows submission of form data and displays rate information in a user-friendly way.

##  Features
###  Backend
- Accepts a JSON payload:
  ```json
  {
    "Unit Name": "String",
    "Arrival": "dd/mm/yyyy",
    "Departure": "dd/mm/yyyy",
    "Occupants": 2,
    "Ages": [30, 5]
  }
Transforms and sends the payload to:
https://dev.gondwana-collection.com/Web-Store/Rates/Rates.php using POST.

Payload is mutated to:
json{
  "Unit Type ID": -2147483637,
  "Arrival": "yyyy-mm-dd",
  "Departure": "yyyy-mm-dd",
  "Guests": [
    { "Age Group": "Adult" },
    { "Age Group": "Child" }
  ]
}
Supports Unit Type IDs: -2147483637, -2147483456
Returns processed rate details back to the frontend.
🖥️ Frontend
Provides an input form for:
Unit Name
Arrival Date
Departure Date
Number of Occupants
Ages of each guest

Displays:

Unit Name
Rate
Date Range
Availability Status

Focuses on clarity, usability, and responsiveness
 Quality Assurance
GitHub Actions integrated with SonarCloud
Automatically performs quality checks on every pull request to the main branch
 GitHub Codespaces
The repository is Codespaces-ready
Launch a Codespace from GitHub and start working instantly with pre-configured settings
