import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';


export class Confirm extends Component {
    continue = e => {
        e.preventDefault(); 
        // PROCESS YOUR FORM, SEND YOUR DATA TO YOUR API (via Express)
        this.props.nextStep(); 
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {resourceCat, resourceSubCat, rcTitle, 
                         rcDescription, rcLink, rcImage}} = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirm Resource Data" />
                    <List>
                        <ListItem
                            primaryText = "Resource Category"
                            secondaryText = {resourceCat}
                        />
                        <ListItem
                            primaryText = "Resource Sub-Category"
                            secondaryText = {resourceSubCat}
                        />
                        <ListItem
                            primaryText = "Content Title"
                            secondaryText = {rcTitle}
                        />
                        <ListItem
                            primaryText = "Content Description"
                            secondaryText = {rcDescription}
                        />
                        <ListItem
                            primaryText = "Content Link"
                            secondaryText = {rcLink}
                        />
                        <ListItem
                            primaryText = "Content Image"
                            secondaryText = {rcImage}
                        />
                    </List>
                    <RaisedButton
                        label = "Back"
                        primary = {false}
                        style = {styles.button} 
                        onClick = {this.back}
                    />
                    <RaisedButton
                        label = "Submit"
                        primary = {true}
                        style = {styles.button} 
                        onClick = { () => {
                            // this.continue;
                            this.props.categoryCallBacks(resourceCat, null, resourceSubCat, rcTitle, rcDescription, rcLink, rcImage);
                        }}
                    />
                </React.Fragment>
            </MuiThemeProvider>
                
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm
