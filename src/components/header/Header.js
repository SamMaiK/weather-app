import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBar, Dialog, FlatButton, IconButton} from "material-ui";
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import DefaultWeatherInfo from "./DefaultWeatherInfo";

injectTapEventPlugin();

class Header extends React.Component {

    render() {

        return (
            <div className="header">
                <AppBar
                    showMenuIconButton={false}
                    title="Weather Forecast"
                >
                    <div className="app-bar-container">
                        <DefaultWeatherInfo iconId="01d"/>
                        <IconButton
                            tooltip="Set current city"
                        >
                            <SettingsIcon/>
                        </IconButton>

                    </div>
                </AppBar>
            </div>
        );
    }
}

export default Header;