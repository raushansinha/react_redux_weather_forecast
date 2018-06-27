import axios from 'axios';
const API_KEY = 'f009e0190ad34b1988c234333182606'; // '017e7b9b9bd003a5edeb481ea036462d';
const ROOT_URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&format=json&num_of_days=5`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}



//http://api.worldweatheronline.com/premium/v1/weather.ashx?key=f009e0190ad34b1988c234333182606&q=Atlanta&format=json&num_of_days=5

//http://api.worldweatheronline.com/premium/v1/weather.ashx?appid=f009e0190ad34b1988c234333182606&format=json&num_of_days=5&q=Atlanta