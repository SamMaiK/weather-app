import React from 'react';
import {Divider, IconButton, List, ListItem, RaisedButton} from "material-ui";
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import NewCity from "../modals/NewCity";
import uuid from 'uuid/v1';

class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNewCity: false,
            citiesArray: []
        };
        this.openNewCityForm = this.openNewCityForm.bind(this);
        this.closeNewCityForm = this.closeNewCityForm.bind(this);
        this.addCity = this.addCity.bind(this);
    }

    componentDidMount() {
        const citiesArray = localStorage.getItem('citiesArray');
        if (citiesArray) {
            this.setState({citiesArray: JSON.parse(citiesArray)});
        }
    }

    addCity(cityName) {
        this.setState(
            (prevState) => {
                return {citiesArray: [...prevState.citiesArray, {id: uuid(), cityName}]}
            },
            () => localStorage.setItem('citiesArray', JSON.stringify(this.state.citiesArray)));
    }

    openNewCityForm() {
        this.setState({openNewCity: true});
    }

    closeNewCityForm() {
        this.setState({openNewCity: false});
    }

    deleteListElement(id) {
        this.setState((prevState) => {
            return {citiesArray: prevState.citiesArray.filter((item)=>{return item.id !== id})};
        });
    }

    onCityClick(cityName){

    }

    render() {
        const listOfCities = this.state.citiesArray.map((city) =>
            <div key={city.id}
                 className="cities-list-element">
                <IconButton className="clear-icon"
                            onClick={this.deleteListElement.bind(this, city.id)}>
                    <ClearIcon/>
                </IconButton>
                <ListItem primaryText={city.cityName}
                          rightIcon={<ArrowForwardIcon/>}
                          onClick={this.onCityClick.bind(this, city.cityName)}/>
            </div>
        );
        return (
            <div className="cities">
                <div className="cities-header">Cities</div>
                <div className="cities-add-button-container">
                    <RaisedButton label="ADD CITY"
                                  fullWidth={true}
                                  onClick={this.openNewCityForm}/>
                </div>
                <div className="cities-list-container">
                    <List>
                        {listOfCities}
                    </List>
                </div>
                {/*Modal window*/}
                <NewCity
                    open={this.state.openNewCity}
                    closeForm={this.closeNewCityForm}
                    setCity={this.addCity}
                />
            </div>
        );
    }
}

export default Cities;