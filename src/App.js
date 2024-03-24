import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import WeatherCard from './components/WeatherCard/WeatherCard';
import WeatherBox from './components/WeatherBox/WeatherBox';
import { fetchWeatherByCity } from './services/WeatherService';
import './App.css';

const App = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const defaultWeather = {current : {},location:{}};
    const handleSearch = async (city) => {
        try {
            const data = await fetchWeatherByCity(city);
            setWeather(data);
            setError('');
        } catch (error) {
            setError('City not found');
            setWeather(null);
        }
    };

    return (
        <div className="App">
          <div className='container'>
            <div className="row rowbox">
              <div className="col-md-6 col-sm-12 p-0">
                <div className='searchbox'>
                  <header className="header">
                    <h1>Weather<span className='baseColor'> Dashboard</span></h1>
                  </header>
                  <SearchForm onSearch={handleSearch} />
                  {error && <div className="error">{error}</div>}
                 
                  <div className='multibox'>
                    <WeatherBox/>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 p-0">
                <div className='cardbox'>
                <header className="header">
                  <h1>Weather <span className='baseColor'>Forecast</span></h1>
                </header>
                {weather ? <WeatherCard weather={weather} /> : <WeatherCard weather={defaultWeather} />}
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default App;
