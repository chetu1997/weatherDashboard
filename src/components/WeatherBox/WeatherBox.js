import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import './WeatherBox.css';
const WeatherBox = () => {
    const cities = [
        { temperature: 32, city: 'Delhi', location: 'India' },
        { temperature: 28, city: 'Gurgaon', location: 'India' },
        { temperature: 30, city: 'Noida', location: 'India' },
        { temperature: 26, city: 'Faridabad', location: 'India' },
        { temperature: 26, city: 'Palwal', location: 'India' },
        { temperature: 26, city: 'Ghaziabad', location: 'India' },
    ];

    return (
        <div className="row">
            {cities.map((cityData, index) => (
                <div className="col-6" key={index}>
                    <div className="innerbox">
                        <div className="w-1">
                            <div className="boxtext">
                                <h4>{cityData.temperature}<span className="baseColor">°C</span></h4>
                                <h6 className="lightColor">{cityData.city}</h6>
                            </div>
                            <div className="boxicon">
                                <FontAwesomeIcon icon={faCloudSun} />
                            </div>
                        </div>
                        <div className="w-2">{cityData.location}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WeatherBox;
