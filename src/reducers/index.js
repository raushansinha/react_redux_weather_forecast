import { combineReducers } from 'redux';
import WeatherReaducer from './reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReaducer
});

export default rootReducer;
