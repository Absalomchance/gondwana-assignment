// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));

const cors = require('cors');
app.use(cors());

// POST endpoint to handle rate checks
app.post('/api/rates', async (req, res) => {
  try {
    const { unit, arrival, departure, occupants, ages } = req.body;

    // Validate required fields
    if (!unit || !arrival || !departure || !occupants || !ages) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    // Map unit name to Unit Type ID
    const unitTypeMap = {
      'Standard Room': -2147483637,
      'Deluxe Room': -2147483456,
      // Add other mappings as needed
    };

    const unitTypeId = unitTypeMap[unit];
    if (!unitTypeId) {
      return res.status(400).json({ error: 'Invalid unit name.' });
    }

    // Convert dates from dd/mm/yyyy to yyyy-mm-dd
   const formattedArrival = arrival;
const formattedDeparture = departure;

    // Determine age groups
    const guests = ages.map((age) => ({
      'Age Group': age >= 13 ? 'Adult' : 'Child',
    }));

    // Construct payload for remote API
    const payload = {
      'Unit Type ID': unitTypeId,
      Arrival: formattedArrival,
      Departure: formattedDeparture,
      Guests: guests,
    };

    // Send POST request to remote API
    const response = await axios.post(
      'https://dev.gondwana-collection.com/Web-Store/Rates/Rates.php',
      payload
    );
console.log("API Response:", response.data);

    // Relay response back to frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching rates:', error.message);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
