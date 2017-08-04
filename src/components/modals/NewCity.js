import React from 'react';
import {FlatButton} from "material-ui";

class NewCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="SET"
                primary={true}
            />,
        ];
        return (
            <Dialog
                title="Enter your city"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                Enter your city:
                <TextField
                    hintText="Example: Moscow"
                />
            </Dialog>
        );
    }
}

export default NewCity;
