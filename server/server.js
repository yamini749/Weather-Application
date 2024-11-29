const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Middleware
app.use(cors());

// Replace this with your actual OpenWeatherMap API key
const API_KEY = "82b3020ac86da95ab6dd47255bbcd7fc";

// Weather API Endpoint
app.get('/api/weather', async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).send('City is required');
  }

  try {
    // Fetch data from OpenWeatherMap API
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    // Send the API response data to the frontend
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching weather data');
  }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
