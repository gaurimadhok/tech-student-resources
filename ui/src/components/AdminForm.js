// parent component -> determine which sub-component to display 
import React, { Component } from 'react';
import CatSubCatForm from './CatSubCatForm';
import ContentForm from './ContentForm';
import Confirm from './Confirm';
import Success from './Success';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from '@material-ui/core/AppBar';
import AppBar from 'material-ui/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import ResourceForm from './ResourceForm';


const API_URL = 'http://localhost:8080/api/v1/admin';
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
        fetch(`${API_URL}/resourceCat`, {
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

    addResourceSubCat(subCatTitle, resourceType) {
        let newResourceSubCat = { subCatTitle: subCatTitle, resourceType: resourceType };
        //console.log(newResourceSubCat);
        fetch(`${API_URL}/resourceSubCat`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newResourceSubCat)
        })
        .then((response) => {
            console.log(response);
            if(response.ok) return response.json();
            else throw new Error("server response wasn't ok");
        })
    }

    addResourceContent(title, contentDescription, link, image, subCatTitle) {
        let newResourceContent = { title: title, contentDescription: contentDescription, link: link, image: image, subCatTitle: subCatTitle };
        console.log(newResourceContent);
        fetch(`${API_URL}/resourceContent`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newResourceContent)
        })
        .then((response) => {
            console.log(response);
            if(response.ok) return response.json();
            else throw new Error("server response wasn't ok");
        })
    }

    addExtraContentDescription(extraDescription) {
        let newExtraContentDescription = { extraDescription: extraDescription };
        console.log(newExtraContentDescription);
        fetch(`${API_URL}/extraContentDescription`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newExtraContentDescription)
        })
        .then((response) => {
            console.log(response);
            if(response.ok) return response.json();
            else throw new Error("server response wasn't ok");
        })
    }

    submitEvent(resourceType, description, subCatTitle, title, contentDescription, link, image, extraDescription) {
        this.addResourceCat(resourceType, description);
        this.addResourceSubCat(subCatTitle, resourceType);
        this.addResourceContent(title, contentDescription, link, image, subCatTitle);
        //this.addExtraContentDescription(extraDescription);
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
                    <ResourceForm />
                    // <div>
                    //     <MuiThemeProvider>
                    //         <React.Fragment>
                    //             <AppBar title = "Enter Resource Details" />
                    //         </React.Fragment>
                    //     </MuiThemeProvider>
                    //     <CatSubCatForm  
                    //         handleChange = {this.handleChange}
                    //         values={values}
                    //     />
                    //     <ContentForm 
                    //         nextStep = {this.nextStep}
                    //         handleChange = {this.handleChange}
                    //         values = {values}
                    //     />
                    // </div>
                )
            case 2:
                return (
                    <div>
                        <Confirm
                            values = {values}
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep} 
                            categoryCallBacks = {this.submitEvent.bind(this)}
                        />
                    </div>
                
                )
            case 3:
                return <Success/>
        }
    }
}

export default AdminForm



// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignUp() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 multiline
//                 rows={4}
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }