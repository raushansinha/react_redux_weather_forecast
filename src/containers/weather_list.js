import React, {Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../containers/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData){
        //console.log("Data: " + JSON.stringify(cityData));
        const name = cityData.data.request[0].query.split(',')[0];
        //const temps = cityData.data.weather.map(weather => weather.maxtempC);
        const temps = cityData.data.weather.map(weather => {
            return weather.hourly.map(hweather => hweather.tempC);
        });
        //console.log("TEMPS: " + cityData.list[0].main.temp)
        console.log("TEMPS: " + JSON.stringify(temps));
        return(
            <tr key={name}>
                {/* <td>{name}</td> */}
                <td><GoogleMap lat="-81.497199" lon="41.087381" /></td>
                <td>
                   <Chart data={temps[0]} color="orange" units="C"/>
                </td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table tableHover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                    
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state){
//     return { weather: state.weather };
// }

//same as above
function mapStateToProps({ weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);