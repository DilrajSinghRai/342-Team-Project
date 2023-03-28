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
    color: "black"
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

export default function Filter(){

  const [facilityName, setFacilityType] = React.useState('');
  const [sport, setSport] = React.useState('');
  const [day, setDay] = React.useState('');
  const [data, setData] = React.useState([]);

  React.useEffect(( )=> {
    console.log(facilityName)
    console.log(sport)
    console.log(day)
  })

const FacilitySelection = (props) =>{
  return(
    
    <FormControl style={{marginLeft: "20px", marginTop: "15px", width: "90%"}}>
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
        </Select>
        <FormHelperText error>{props.Error ? "Please select a facility" : ""}</FormHelperText>
      </FormControl>
  )
  }

  const DaySelection = (props) =>{
    return(
      <FormControl style={{marginLeft: "10px", marginTop: "15px", width: "90%"}}>
          <InputLabel id="movieValue">Select A Day</InputLabel>
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
  
            onChange={(event) => {
              setDay(event.target.value)
              console.log(event.target.value)
            }
  
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Monday">Monday  </MenuItem>
            <MenuItem value= "Tuesday">Tuesday </MenuItem>
            <MenuItem value="Wednesday">Wednesday  </MenuItem>
            <MenuItem value="Thursday">Thursday  </MenuItem>
            <MenuItem value= "Friday">Friday </MenuItem>
            <MenuItem value="Saturday">Saturday  </MenuItem>
            <MenuItem value="Sunday">Sunday </MenuItem>
          </Select>
          <FormHelperText error>{props.Error ? "Please select a facility" : ""}</FormHelperText>
        </FormControl>
    )
    }

  const SportSelection = (props) => {
    return (
      <FormControl style={{marginTop: "15px", width: "90%" }}>
        <InputLabel id="movieValue">Select A Sport</InputLabel>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={(event) => {
            setSport(event.target.value)
            console.log(event.target.value)
          }
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Basketball">Basketball  </MenuItem>
          <MenuItem value="Badminton">Badminton </MenuItem>
          <MenuItem value="General Swim">General Swim  </MenuItem>
          <MenuItem value="Women's Swim">Women's Swim  </MenuItem>
          <MenuItem value="Soccer">Soccer  </MenuItem>
        </Select>
        <FormHelperText error>{props.Error ? "Please select a facility" : ""}</FormHelperText>
      </FormControl>
    )
  }

  const handleSubmit = () => {
    addFacility()
    loadfilterData()
    console.log(day)
    console.log(facilityName)
    console.log(sport)
  }

  const addFacility = () => {
    callApiAddFacility()
      .then(res => {
        var parsed = JSON.parse(res.express);
      })
  }

  const callApiAddFacility = async () => {

    const url = serverURL + "/api/addFilter"

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({facilityName: facilityName, sport: sport, day: day})

    });
    const body = await response.json();
    if (response.status != 200) throw Error(body.message);
    return body;

  }

  const loadfilterData = () => {
    
    callApiLoadFilterData()
    .then(res => {
        var parsed = JSON.parse(res.express);
        console.log(parsed)
        setData(parsed[3].openTimes)
      }
    ).then(console.log())
  }
  
  const callApiLoadFilterData = async (props) => {
    
    const url = serverURL + "/api/loadFilterData";
    const response = await fetch(url, {method: "POST"
  
    }
    )
    body: JSON.stringify({
      facilityName: facilityName,
      sport: sport,
      day: day,
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body)
    return body;
  }

  const DisplayUpdates = (dataList) => {
    console.log("we here")
    return (
      <div>
        {/* {data.map((item) => { */}
          return (
            <div>
              <br></br>
              <CardContent>
                <Typography variant="h5">
                  Name: {data}
                </Typography>
              </CardContent>
              <br></br>
            </div>
          )
        
      </div>
    )
  }

///////ACTUAL DISPLAY
return (
<MuiThemeProvider theme={theme}>
<NavBar></NavBar>
  <Container component = "main" maxWidth = "lg" disableGutters = "true" style={{ backgroundImage: `url(${background})`, height:"100vh", backgroundPosition: 'center'}}>
    <CssBaseline />

      <Grid container justifyContent="center">

        <Grid item xs>
          <FacilitySelection ></FacilitySelection>
        </Grid>

        <Grid item xs>
          <DaySelection></DaySelection>
        </Grid>

        <Grid item xs>
          <SportSelection></SportSelection>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 , ml: 70, mb: 10}}>
        <Button onClick={handleSubmit}>  Submit</Button>
        
      </Box>

      <Card sx={{ width: 1100, ml: 6 }} raised="true">
        <CardContent>
        <DisplayUpdates></DisplayUpdates>
        </CardContent>
      </Card>

  </Container>
    </MuiThemeProvider>
  )
 }