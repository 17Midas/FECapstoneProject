import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const API_KEY = 'YOUR_API_KEY_HERE'; 

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `api.openweathermap.org{city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) setWeather(data);
      else alert("City not found");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <header className="text-center my-8">
        <h1 className="text-3xl font-bold text-blue-400">SkyCast</h1>
        <p className="text-slate-400 text-sm">Real-time Weather Dashboard</p>
      </header>
      
      <SearchForm onSearch={fetchWeather} />
      
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;

