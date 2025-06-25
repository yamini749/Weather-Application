const express = require("express");
const cors = require("cors");
const axios = require("axios");
const serverless = require("serverless-http");

const app = express();

// Middleware
app.use(cors({ origin: "https://beamish-pie-ff4b3e.netlify.app" }));

// OpenWeatherMap API Key
const API_KEY = "ed71fa32fd4cd99e5fb19f7399b3a36c";

// Routes
app.get("/weather", async (req, res) => {
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

app.get("/", (req, res) => {
  res.send("<h1>Weather API</h1><p>Server is running successfully!</p>");
});

// Important: Export *handler* for Vercel serverless
module.exports = {
  handler: serverless(app),
};
