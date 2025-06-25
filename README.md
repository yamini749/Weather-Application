# 🌦️ Weather Application (MERN Stack)

A weather application built using the **MERN stack** (MongoDB, Express, React, Node.js). This application allows users to check the weather for their desired location.

---

## 🚀 Features

- Fetches real-time weather data using a weather API (e.g., OpenWeatherMap).
- Displays temperature, humidity, wind speed, and weather description.
- Search by city name or geographic coordinates.
- Responsive design — works on both desktop and mobile devices.
- (Optional) Store user search history or preferences in MongoDB.

---

## 🛠️ Technologies Used

- **Frontend:** React.js, CSS  
- **Backend:** Node.js, Express.js  
- **External API:** OpenWeatherMap API  

---

## 🧑‍💻 Getting Started

## 📦 Install Dependencies

### 1. Clone the Repository

```bash
git clone https://github.com/yamini749/Mern-Application.git
cd Mern-Application
```

---

## 🔧 Backend Setup

### 2. Initialize Node.js Project

```bash
mkdir server
cd server
npm init -y
```

### 3. Install Backend Dependencies

```bash
npm install express
```

### 4. Create Backend Entry File

Create a `server.js` file inside the `server/` folder with your Express app.

---

## 🎨 Frontend Setup

### 5. Create React App

```bash
npx create-react-app client
cd client
```

### 6. Start Frontend

```bash
npm start
```

---

## ▶️ Running the Application

Open **two terminals** or use a process manager like `concurrently`.

### Terminal 1 – Backend:

```bash
cd server
node server.js
```

### Terminal 2 – Frontend:

```bash
cd client
npm start
```

The React app will run at `http://localhost:3000`  
The Node server will run at `http://localhost:5000` *(or any configured port)*

---

## 🌐 Live Demo

Deployment link : [Frontend] (https://weather-app-chi-eight-92.vercel.app)

---

## 🙋‍♀️ Author

**Yamini Settipalli**

- GitHub: [@yamini749](https://github.com/yamini749)  
- Portfolio: [https://settipalliyamini.netlify.app](https://settipalliyamini.netlify.app)

---

⭐ Feel free to fork, improve, or contribute to the project!
