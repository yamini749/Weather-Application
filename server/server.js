const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

// API Key for OpenWeather
const API_KEY = "82b3020ac86da95ab6dd47255bbcd7fc";

// Weather Data Endpoint
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City name is required." });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (err) {
    if (err.response && err.response.status === 404) {
      res.status(404).json({ error: "City not found." });
    } else if (err.response && err.response.status === 429) {
      res.status(429).json({ error: "API rate limit exceeded. Try later." });
    } else {
      res.status(500).json({ error: "Failed to fetch weather data." });
    }
  }
});
app.get("/", (req, res) => {
  res.send("Weather API is running. Use the /weather endpoint with a city name.");
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
