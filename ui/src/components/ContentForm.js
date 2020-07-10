import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class ContentForm extends Component {

    continue = e => {
        e.preventDefault(); 
        this.props.nextStep(); 
    }

    render() {
        const { values, handleChange } = this.props; // this is destructuring
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                        hintText = "Enter the content title"
                        floatingLabelText = "Content Title"
                        onChange = {handleChange('rcTitle')}
                        defaultValue = { values.rcTitle }
                    />
                    <br/>
                    <TextField
                        hintText = "Enter the content description"
                        floatingLabelText = "Content Description"
                        onChange = {handleChange('rcDescription')}
                        defaultValue = { values.rcDescription }
                    />
                    <br/>
                    <TextField
                        hintText = "Enter the content link"
                        floatingLabelText = "Content Link"
                        onChange = {handleChange('rcLink')}
                        defaultValue = { values.rcLink }
                    />
                    <br/>
                    <TextField
                        hintText = "Enter the content image link"
                        floatingLabelText = "Content Image Link"
                        onChange = {handleChange('rcImage')}
                        defaultValue = { values.rcImage }
                    />
                    <br/>
                    <RaisedButton
                        label = "Continue"
                        primary = {true}
                        style = {styles.button} 
                        onClick = {this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default ContentForm
