import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBar, IconButton} from "material-ui";
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import DefaultWeatherInfo from "./DefaultWeatherInfo";
import NewCity from "../modals/NewCity";

injectTapEventPlugin();

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNewCity: false,
            weather: undefined
        };
        this.openNewCityForm = this.openNewCityForm.bind(this);
        this.closeNewCityForm = this.closeNewCityForm.bind(this);
        this.setDefaultCity = this.setDefaultCity.bind(this);
    }

    componentDidMount(){
        const defaultCity = localStorage.getItem('defaultCity');
        if(defaultCity){
            this.getCurrentWeather(defaultCity);
        }
    }

    setDefaultCity(cityName) {
        localStorage.setItem('defaultCity', cityName);
        this.getCurrentWeather(cityName);
    }

    openNewCityForm() {
        this.setState({openNewCity: true});
    }

    closeNewCityForm() {
        this.setState({openNewCity: false});
    }

    getCurrentWeather = (cityName) => {
        let weatherRequestUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
            'q=' + cityName + '&' +
            'APPID=6bfb1a6668dfb2a30f723338b055ec79&' +
            'units=metric';
        const self = this;
        fetch(weatherRequestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if(data.cod === '404'){
                    alert('Cannot find city with name ' + cityName);
                }
                else{
                    self.setState({weather: data});
                }
            })
    };

    render() {

        return (
            <div className="header">
                <AppBar
                    showMenuIconButton={false}
                    title="Weather Forecast"
                    titleStyle={{flex: 'none', fontFamily: 'Playball'}}
                    className="app-bar-container"
                >
                    {this.state.weather &&
                    <DefaultWeatherInfo weather={this.state.weather}/>
                    }
                    <IconButton
                        tooltip="Set current city"
                        onClick={this.openNewCityForm}
                    >
                        <SettingsIcon/>
                    </IconButton>
                </AppBar>
                <NewCity
                    open={this.state.openNewCity}
                    closeForm={this.closeNewCityForm}
                    setCity={this.setDefaultCity}
                />
            </div>
        );
    }
}

export default Header;