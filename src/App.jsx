import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const API_KEY = 'b1781bac0c1af2067ddc881fe6bdb858'; 

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `api.openweathermap.org{city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found. Please try again.");
      }
    } catch (error) {
      alert("Error connecting to weather service.");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>SkyCast</h1>
        <p>Weather Dashboard 2025</p>
      </header>
      
      <SearchForm onSearch={fetchWeather} />
      
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
