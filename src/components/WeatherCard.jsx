import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="weather-box">
      <h2>{data.name}</h2>
      <p style={{color: '#94a3b8'}}>{data.weather[0].description}</p>
      
      <div className="temp">{Math.round(data.main.temp)}°C</div>
      
      <div className="details">
        <div className="stat">
          <p className="stat-label">Humidity</p>
          <p><strong>{data.main.humidity}%</strong></p>
        </div>
        <div className="stat">
          <p className="stat-label">Wind</p>
          <p><strong>{data.wind.speed} m/s</strong></p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

