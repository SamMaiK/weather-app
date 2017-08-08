import React from 'react';
import Cities from "./Cities";
import PeriodMenu from './PeriodMenu';
import WeatherWindow from './WeatherWindow';

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            currentCity: undefined,
            showPeriodMenu: false,
            forecastPeriod: undefined
        }
    }

    onCityClick(cityName){

    }

    render() {
        return (
            <div className="main-container">
                <Cities onCityClick={this.onCityClick}/>
                <div className="content">
                    <PeriodMenu show={this.state.showPeriodMenu}/>
                    <WeatherWindow weather={this.state.weather}/>
                </div>
            </div>
        );
    }
}

export default Main;