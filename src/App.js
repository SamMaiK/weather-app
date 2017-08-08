import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Header/>
                    <Main/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
