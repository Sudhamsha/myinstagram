import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Message from './components/Message';
import PhotoList from './components/PhotosList';
import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <Message />
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="Sud's Instagram"
                    showMenuIconButton={false}
                    className="app-bar"
                />
                <PhotoList />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
