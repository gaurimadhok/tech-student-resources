// parent component -> determine which sub-component to display 
import React, { Component } from 'react';
import CatSubCatForm from './CatSubCatForm';
import ContentForm from './ContentForm';
import Confirm from './Confirm';
import Success from './Success';

const API_URL = 'http://localhost:8080/api/v1/resources';
const API_HEADERS = {
    'Content-Type' : 'application/json',
    Authorization: 'unneccessary for local server'
}

export class AdminForm extends Component {
    state = {
        step: 1,
        resourceCat: '',
        resourceSubCat: '',
        rcTitle: '',
        rcDescription: '',
        rcLink: '',
        rcImage: '',
        rcMoreDescriptions: []
    }

    // Add new resource category
    addResourceCat(resourceType, description) {
        let newResourceCat = { resourceType: resourceType, catDescription: description };
        console.log(newResourceCat);
        fetch(`${API_URL}/admin`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newResourceCat)
        })
        .then((response) => {
            console.log(response);
            if(response.ok) return response.json();
            else throw new Error("server response wasn't ok");
        })
    }

    // Proceed to next step in form
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Proceed to previous step in form
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change - curried function
    handleChange = input => e => {
         this.setState({[input]: e.target.value});

    }

    render() {
        const { step } = this.state;
        const { resourceCat, resourceSubCat, rcTitle, rcDescription, rcLink, rcImage, rcMoreDescriptions } = this.state;
        const values = { resourceCat, resourceSubCat, rcTitle, rcDescription, rcLink, rcImage, rcMoreDescriptions };
        switch(step) {
            case 1: 
                return (
                    <div>
                        <CatSubCatForm
                            handleChange = {this.handleChange}
                            values={values}
                        />
                        <ContentForm 
                            nextStep = {this.nextStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Confirm
                            values = {values}
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep} 
                            categoryCallBacks = {this.addResourceCat.bind(this)}
                        />
                    </div>
                
                )
            case 3:
                return <Success/>
        }
    }
}

export default AdminForm
