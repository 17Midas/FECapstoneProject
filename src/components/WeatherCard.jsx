import React from 'react';
export default function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img 
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
        alt={weather[0].description} 
      />
      <p className="temp">{Math.round(main.temp)}°C</p>
      <p className="desc">{weather[0].description}</p>
      <div className="details">
        <div>
          <p>Humidity</p>
          <span>{main.humidity}%</span>
        </div>
        <div>
          <p>Wind Speed</p>
          <span>{wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}
