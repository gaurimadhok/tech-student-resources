import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirm Resource Data" />
                    <h1>Data has been successfully added to the database</h1>
                    <p>You should probably go check just in case</p>
                </React.Fragment>
            </MuiThemeProvider>
                
        );
    }
}

export default Success
