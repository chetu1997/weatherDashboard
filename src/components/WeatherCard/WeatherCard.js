import React from 'react';
import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faLocationDot,faWind ,faTemperatureHigh,faSun,faWater} from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ weather }) => {
    return (
        <div className="weather-card">
            <div className="innerbox">
                <div className='topCard w-1'>
                    <h4>Today</h4>
                    <p>{weather.location.localtime ? weather.location.localtime:'2024-03-2024'}</p>
                </div>
                <div className="w-1">
                    <div className="boxtext">
                        <h2>{weather.current.temp_c ? weather.current.temp_c : '30'}<span className="baseColor">°C</span></h2>
                        <h6 className="lightColor">{weather.location.name ? weather.location.name:'Gurgaon'}</h6>
                    </div>
                    <div className="boxicon">
                        <FontAwesomeIcon icon={faCloudSun} />
                    </div>
                </div>
                <div className="w-2"><FontAwesomeIcon icon={faLocationDot} /> {weather.location.region ? weather.location.region +','+ weather.location.country :'Haryana,India'}</div>
            </div>
            <div className=''>
                <header className="header">
                    <h1>Today <span className='baseColor'>Overview</span></h1>
                </header>
                <div className='row'>
                    <div className='col-6'>
                        <div className='subbox'>
                            <div className='baseColor iconSize'><FontAwesomeIcon icon={faWind} /></div>
                            <div className='textbox'>
                                <p className='lightColor paraText'>Wind Speed</p>
                                <h4>{weather.current.wind_mph ? weather.current.wind_mph : 9.1}/mph</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='subbox'>
                            <div className='baseColor iconSize'><FontAwesomeIcon icon={faWater} /></div>
                            <div className='textbox'>
                                <p className='lightColor paraText'>Pressure</p>
                                <h4>{weather.current.wind_mph ? weather.current.pressure_mb : 1011}/mb</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='subbox'>
                            <div className='baseColor iconSize'><FontAwesomeIcon icon={faTemperatureHigh} /></div>
                            <div className='textbox'>
                                <p className='lightColor paraText'>Humidity</p>
                                <h4>{weather.current.humidity ? weather.current.humidity : 37}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='subbox'>
                            <div className='baseColor iconSize'><FontAwesomeIcon icon={faSun} /></div>
                            <div className='textbox'>
                                <p className='lightColor paraText'>UV Index</p>
                                <h4>{weather.current.uv ? weather.current.uv : 9.1}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WeatherCard;
