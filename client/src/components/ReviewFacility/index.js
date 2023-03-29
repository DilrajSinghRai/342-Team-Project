import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {FormControl, MenuItem, Select, InputLabel, TextField, RadioGroup, FormLabel, Radio, FormControlLabel, Button, FormHelperText} from "@material-ui/core/"
import React from "react"; 
import NavBar from "../Navigation/Nav";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import background from "C:/Users/prana/Documents/GitHub/342-Team-Project/client/src/pacgym2.png";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const serverURL = '';

const theme = createTheme({
  typography: {
    color: "white"
  },
  palette: {
    type: 'dark',
    background: {
      default: "#FFFFFF"
    },
    primary: {
      main: "#FFFFAA",
    },
    secondary: {
      main: "#E4B429",
    },
  },
});

const opacityValue = 0.9;
  
  const styles = theme => ({
    root: {
      body: {
        backgroundColor: "#000000",
        opacity: opacityValue,
        overflow: "hidden",
      },
    },
    mainMessage: {
      opacity: opacityValue,
    },
  
    mainMessageContainer: {
      marginTop: "20vh",
      marginLeft: theme.spacing(20),
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(4),
      },
    },
    paper: {
      overflow: "hidden",
    },
    message: {
      opacity: opacityValue,
      maxWidth: 250,
      paddingBottom: theme.spacing(2),
    },
  
  });

export default function ReviewFacility(){

  const [facilityType, setFacilityType] = React.useState('');
  const [name, setName] = React.useState('');
  const [review, setReview] = React.useState('');
  const [reviewType, setReviewType] = React.useState('');
  const [randomReview, setRandomReview] = React.useState([]);

  React.useEffect(( )=> {
    console.log(facilityType)
    console.log(review)
    console.log(name)
    console.log(reviewType)
  })

const FacilitySelection = (props) =>{
  return(
    
    <FormControl style={{marginLeft: "50px", marginTop: "30px", width: "100%"}}>
        <InputLabel id="movieValue">Select A Facility</InputLabel>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}

          onChange={(event) => {
            setFacilityType(event.target.value)
            console.log(event.target.value)
          }
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="PAC">PAC  </MenuItem>
          <MenuItem value= "CIF">CIF </MenuItem>
          <MenuItem value="SLC">SLC  </MenuItem>
          <MenuItem value="DC">DC  </MenuItem>
          <MenuItem value="DP">DP  </MenuItem>
          <MenuItem value="E7">E7  </MenuItem>
        </Select>
        <FormHelperText error>{props.Error ? "Please select a facility" : ""}</FormHelperText>
      </FormControl>
  )
  }

  const ReviewTypeSelection = (props) =>{
    return(
      
      <FormControl style={{marginLeft: "70px", marginTop: "30px", width: "100%"}}>
          <InputLabel id="movieValue">What are you submitting?</InputLabel>
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
  
            onChange={(event) => {
              setReviewType(event.target.value)
              console.log(event.target.value)
            }
  
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Maintenance">Maintenance  </MenuItem>
            <MenuItem value= "Review">Review </MenuItem>
            <MenuItem value="Concerns and Questions">Concerns and Questions  </MenuItem>
          </Select>
          <FormHelperText error>{props.Error ? "Please enter your review type" : ""}</FormHelperText>
        </FormControl>
    )
    }
  const handleSubmit = () => {
    addFacility(review)
    console.log(randomReview)
  }

  const addFacility = () => {
    callApiAddFacility()
      .then(res => {
        var parsed = JSON.parse(res.express);
      })
  }

  const callApiAddFacility = async () => {
    const url = serverURL + "/api/addFacility"

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {name: name, facilityType: facilityType, review: review, reviewType: reviewType})

    });
    const body = await response.json();
    if (response.status != 200) throw Error(body.message);
    return body;

  }

///////ACTUAL DISPLAY
return (
<MuiThemeProvider theme={theme}>
<NavBar></NavBar>
<div style={{ backgroundImage: `url(${background})`, height:"100vh", backgroundPosition: 'center'}}>
<Container component = "main" maxWidth = "lg"  style = {{backgroundColor : "#000000"}}>
  <CssBaseline />
    <Grid container justifyContent="center">

      <Grid item xs = "2">
        <FacilitySelection></FacilitySelection>
      </Grid>

      <Grid item xs = "2">
        <ReviewTypeSelection setReviewType  = {setReviewType}></ReviewTypeSelection>
      </Grid>

      <Grid item xs = "2">
        <NameEnter setName  = {setName}></NameEnter>
      </Grid>

      <Grid item xs>
        <FacilityFilter setReview = {setReview}></FacilityFilter>
      </Grid>

      <Box sx={{ mt: 5 , ml: 17, mb : 5, border: 1}}>
        <Button onClick={handleSubmit}>  Submit</Button>
      </Box>

      <Card sx={{ width: 1100, ml: 6 , mt: 5}} raised="true" style = {{backgroundColor : "#E4B429"}}>
        <CardContent>
          <Grid container justifyContent="center">

            <Grid item xs = "12">
              <Typography variant="h4">Maintenance:</Typography>
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <Grid item xs = "12">
              <Grid container justifyContent="center">
              <Grid item xs>
                <Card sx={{mr: 3}} raised="true" style = {{backgroundColor : "#FFFFFF"}}>
                <CardContent>
                <Typography variant="h5" color="common.white">Carlo Lobrutto:</Typography>
                <Typography variant="body1">I was in the PAC spin studio and the pedal on one of the bikes broke clean off.</Typography>
                </CardContent>
                </Card>
              </Grid>

              <Grid item xs>
                <Card sx={{mr: 3}} raised="true" style = {{backgroundColor : "#FFFFFF"}}>
                <CardContent>
                <Typography variant="h5">Sam Rintche:</Typography>
                <Typography variant="body1">In the middle of my usual push day last night and I decide to try come cable pulldowns. The rope looks 30 years old atleast.. get new ropes.</Typography>
                </CardContent>
                </Card>
              </Grid>

              <Grid item xs>
                <Card sx={{mr: 3}} raised="true" style = {{backgroundColor : "#FFFFFF"}}>
                <CardContent>
                <Typography variant="h5">Matthew Gartner:</Typography>
                <Typography variant="body1">How has uw not replaced the leg extension machine on the second floor of PAC?? No handles?? ripped seats???</Typography>
                </CardContent>
                </Card>
              </Grid>

              </Grid>
            </Grid>

          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ width: 1100, ml: 6 , mt: 5, mb: 10}} raised="true" style = {{backgroundColor : "#E4B429"}}>
        <CardContent>
        <Grid item xs = "12">
              <Typography variant="h4">Reviews and Questions:</Typography>
            </Grid>
            <br></br>
        <Grid item xs = "12">
              <Grid container justifyContent="center">
              <Grid item xs>
                <Card sx={{mr: 3}} raised="true" style = {{backgroundColor : "#FFFFFF"}}>
                <CardContent>
                <Typography variant="h5" color="common.white">Jaxson Summers:</Typography>
                <Typography variant="body1">I tried out the spanish dancing class with my boyfriend and it was a blast, I'd recommend it for sure</Typography>
                </CardContent>
                </Card>
              </Grid>

              <Grid item xs>
                <Card sx={{mr: 3}} raised="true" style = {{backgroundColor : "#FFFFFF"}}>
                <CardContent>
                <Typography variant="h5">Rahul Modi:</Typography>
                <Typography variant="body1">I grew up swimming and haven't been able to for the last couple years. I checked out the PAC pool and it's way nicer than I thought! I'll be back</Typography>
                </CardContent>
                </Card>
              </Grid>

              <Grid item xs>
                <Card sx={{mr: 3}} raised="true" style = {{backgroundColor : "#FFFFFF"}}>
                <CardContent>
                <Typography variant="h5">Dev Patel:</Typography>
                <Typography variant="body1">I switched over to a push pull legs split recently and I'm loving it, I'd recommend it if you're looking for a switch up</Typography>
                </CardContent>
                </Card>
              </Grid>

              </Grid>
            </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Container>
  </div>
  <div style={{ backgroundImage: `url(${background})`, height:"100vh", backgroundPosition: 'center'}}>
  </div>
  </MuiThemeProvider>
  )

  

 }

 const NameEnter = (props) => {
  return(
    <TextField
      id="outlined-multiline-static"
      label="Enter Your Name"
      variant="outlined"
      helperText={props.Error ? "Please enter your Name" :""}
      style={{marginLeft: "80px", marginTop: "30px", width: "100%"}}

      onChange={(event) => {
        props.setName(event.target.value)
        console.log(event.target.value)
      }}
    />
  )
}

const FacilityFilter = (props) => {
  return(

    <TextField
      id="outlined-multiline-static"
      label="Enter Your Review"
      variant="outlined"
      error={props.Error ? true : false}
      helperText={props.Error ? "Please enter your review" : "Up to 200 Characters"}
      style={{marginLeft: "100px", marginTop: "30px", width: "100%" }}

      onChange={(event) => {
        props.setReview(event.target.value)
        console.log(event.target.value)
      }}

      
    />
  )
}