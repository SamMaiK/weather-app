import React from 'react';

class DefaultWeatherInfo extends React.Component {
    render() {
        const weather = this.props.weather;
        const iconId = weather.weather[0].icon;
        const city = weather.name;
        const country = weather.sys.country;
        const temperature = Math.round(weather.main.temp) + '°C' ;
        const weatherIconUrl = 'http://openweathermap.org/img/w/' + iconId + '.png';
        return (
            <div className="default-info">
                <p>{city} {country} {temperature}</p>
                <img src={weatherIconUrl} alt=""/>
            </div>
        );
    }
}

export default DefaultWeatherInfo;