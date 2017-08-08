import React from 'react';
import {RaisedButton} from "material-ui";


class PeriodMenu extends React.Component {


    render() {
        return (
            <div className="period-menu-container">
                <RaisedButton label="NOW"/>
                <RaisedButton label="3 HOURS"/>
                <RaisedButton label="5 DAYS"/>
            </div>
        );
    }
}

export default PeriodMenu;