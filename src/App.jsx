import { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import './index.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <Search onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
