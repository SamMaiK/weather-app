import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Cities from './components/side/Cities';
import Main from './components/main/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Header/>
                    <div className="main-container">
                        <Cities/>
                        <Main/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
