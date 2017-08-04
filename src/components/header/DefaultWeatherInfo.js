import React from 'react';

class DefaultWeatherInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            country: undefined,
            temperature: undefined,
            iconId: undefined
        }
    }

    componentDidMount() {
        let weatherRequestUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
            'q=' + this.props.city + '&' +
            'APPID=6bfb1a6668dfb2a30f723338b055ec79&' +
            'units=metric';
        const defaultCity = localStorage.getItem('defaultCity');

        if (defaultCity) {
            this.setState({city: defaultCity});
            this.getCurrentWeather(weatherRequestUrl)
        }
    }


    getCurrentWeather = (url) => {
        const self = this;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                self.setState({
                    city: data.name,
                    country: data.sys.country,
                    temperature: data.main.temp,
                    iconId: data.weather[0].icon
                })
            })
    };

    render() {
        let weatherIconUrl = 'http://openweathermap.org/img/w/' + this.props.iconId + '.png';


        if(this.state.temperature){
            return (
                <div className="default-info">
                    <h1>{this.state.city} {this.state.country} {this.state.temperature}</h1>
                    <img src={weatherIconUrl} alt=""/>

                </div>
            );
        }
        else{
            return null;
        }


    }
}

export default DefaultWeatherInfo;