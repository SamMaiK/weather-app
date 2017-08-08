import React from 'react';
import {Dialog, FlatButton, TextField} from "material-ui";

class NewCity extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            setButtonDisabled: true
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleCityNameChange = this.handleCityNameChange.bind(this);
        this.setCity = this.setCity.bind(this);
    }

    handleClose(){
        this.setState({setButtonDisabled: true});
        this.props.closeForm();
    }

    setCity(){
        this.props.setCity(this.refs.cityName.input.value);
        this.handleClose();
    }

    handleCityNameChange(e){
        if(e.target.value === ''){
            this.setState({setButtonDisabled: true});
        }
        else{
            this.setState({setButtonDisabled: false});
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="SET"
                primary={true}
                onClick={this.setCity}
                disabled={this.state.setButtonDisabled}
            />,
        ];
        return (
            <Dialog
                title="Enter your city"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}
            >
                <TextField
                    hintText="Example: Moscow"
                    onChange={this.handleCityNameChange}
                    ref="cityName"
                />
            </Dialog>
        );
    }
}

export default NewCity;
