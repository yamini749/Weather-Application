const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

// Middleware
app.use(cors({ origin: "https://beamish-pie-ff4b3e.netlify.app" }));

// Replace this with your actual OpenWeatherMap API key
const API_KEY = "ed71fa32fd4cd99e5fb19f7399b3a36c";

// Weather API Endpoint
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).send("City is required");
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching weather data");
  }
});

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Weather API");
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
