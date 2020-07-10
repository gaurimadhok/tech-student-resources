import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

export class CatSubCatForm extends Component {

    render() {
        const { values, handleChange } = this.props; // this is destructuring
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Enter Resource Details" />
                    <TextField
                        hintText = "Enter the resource category"
                        floatingLabelText = "Resource Category"
                        onChange = {handleChange('resourceCat')}
                        defaultValue = { values.resourceCat }
                    />
                    <br/>
                    <TextField
                        hintText = "Enter the resource sub-category"
                        floatingLabelText = "Resrouce Sub-Category"
                        onChange = {handleChange('resourceSubCat')}
                        defaultValue = { values.resourceSubCat }
                    />
                    <br/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default CatSubCatForm
