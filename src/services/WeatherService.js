import axios from 'axios';
import config from '../config';

const fetchWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${config.WEATHER_API_KEY}&q=${city}&aqi=no`);
        return response.data;
    } catch (error) {
        throw new Error('City not found');
    }
};

export { fetchWeatherByCity };
