import Grid from "@material-ui/core/Grid";
import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {FormControl, MenuItem, Select, InputLabel, CardContent, TextField, RadioGroup, FormLabel, Radio, FormControlLabel, Button, FormHelperText} from "@material-ui/core/"


import NavBar from "../Navigation/Nav";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles"; 
import background from "C:/Users/prana/Documents/GitHub/342-Team-Project/client/src/pacgym2.png";

const fetch = require("node-fetch");

const opacityValue = 0.9;

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
      main: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});
  
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

const serverURL = ''
 export default function Facilities(){

  const [facilityInfo, setfacilityInfo] = useState([])

React.useEffect(() => {
  loadFacilities();

})

React.useEffect(() => {

  console.log(facilityInfo)
})

const loadFacilities = () => {
    
  callApiLoadFacilities()
  .then(res => {
      var parsed = JSON.parse(res.express);
      console.log(parsed)
      setfacilityInfo(parsed)
    }
  ).then(console.log())
}

const callApiLoadFacilities = async (props) => {
  
  const url = serverURL + "/api/loadFacilityInfo";
  const response = await fetch(url, {method: "POST"

  }
  )
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  console.log(body)
  return body;
}

const DisplayUpdates = (facilityList) =>{
  return(
    <div>

{facilityInfo.map((item) => {
            return (
              <div>


                <br></br>


                <CardContent>

          <Typography variant="h5">
            Name: {item.facilityType}
          </Typography>
          <Typography variant="h6">
            Hours: {item.hours}
          </Typography>
          <Typography variant="h6" component="div">
            Gender Status: {item.genderExclusivity}
          </Typography>
          <Typography variant="h6">
            Description: {item.description}
            <br />
          </Typography>
          

        </CardContent>

               


                <br></br>
              </div>
            )
          })}
    </div>
  )
  }


const FacilitySelection = (props) =>{
  return(
    <ormControl style={{marginBottom: "600px", marginLeft: "15px", width: "15%"}}>
        <InputLabel id="movieValue">Select A Facility</InputLabel>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>PAC - Athletics facility at the right side of the campus </MenuItem>
          <MenuItem value={20}>CIF - Athletics facility at southwest side of the campus </MenuItem>
          <MenuItem value={20}>SLC - Student life centre towards the west side of campus </MenuItem>
          <MenuItem value={20}>DC - library at the north west side of the campus </MenuItem>
          <MenuItem value={20}>DP - library located at the centre of the campus </MenuItem>
          <MenuItem value={30}>E7 - Engineering building at the north west side of the campus </MenuItem>
        </Select>
        <FormHelperText error>{props.Error ? "Please select a facility" : ""}</FormHelperText>
      </ormControl>
  )
  }



  const OpenHouseSports = (props) =>{
    return(
    <FormControl style={{marginBottom: "400px", marginLeft:" 50px", width: "15%"}}>
          <InputLabel id="movieValue">Select A Open House Sport</InputLabel>
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Basketball</MenuItem>
            <MenuItem value={20}>Badminton</MenuItem>
            <MenuItem value ={30}>Soccer</MenuItem>
          </Select>
          <FormHelperText error>{props.Error ? "Please select a Open House Sport" : ""}</FormHelperText>
        </FormControl>
    )

    
   
 


  
  }
    const StudyRoomName = (props) =>{
      return(
      <FormControl style={{marginBottom: "200px", marginLeft:" 300px", width: "30%"}}>
            <InputLabel id="movieValue">Select what study room </InputLabel>
            <Select
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Study Room Pac</MenuItem>
              <MenuItem value={20}>Study Room SLC</MenuItem>
            </Select>
            <FormHelperText error>{props.Error ? "Please select the study room" : ""}</FormHelperText>
          </FormControl>
      )
      }



const StudyRoomStatus = (props) =>{
  return(
  <FormControl style={{marginTop: "200px", marginRight:"400px", width: "30%"}}>
        <InputLabel id="movieValue">Select the status of the study room </InputLabel>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Open</MenuItem>
          <MenuItem value={20}>Closed</MenuItem>
        </Select>
        <FormHelperText error>{props.Error ? "Please select if it is closed or open" : ""}</FormHelperText>
      </FormControl>
  )
  }

const FacilityTime = (props) =>{
  return(
  <FormControl style={{marginBottom: "300px", marginLeft:" 50px", width: "30%"}}>
    
        <InputLabel id="movieValue">Select A Time Period</InputLabel>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Morning (8:30 - 12:30)</MenuItem>
          <MenuItem value={20}>Afternoon(12:30 - 5:00)</MenuItem>
          <MenuItem value ={30}>Evening (5:00 - 8:00)</MenuItem>
          <MenuItem value ={40}>Night (8:00 - 11:00)</MenuItem>
        </Select>
        <FormHelperText error>{props.Error ? "Please select a time period" : ""}</FormHelperText>
      </FormControl>
  )
}

///////ACTUAL DISPLAY
return (
<MuiThemeProvider>
<div style={{ backgroundImage: `url(${background})`, height:"100vh", backgroundPosition: 'center'}}><NavBar></NavBar>
<CssBaseline />
           
            

            <Grid></Grid>

    <div><FacilitySelection></FacilitySelection>
    <OpenHouseSports></OpenHouseSports>
    <FacilityTime></FacilityTime>
    <StudyRoomStatus></StudyRoomStatus>
   
   
    <StudyRoomName></StudyRoomName>
    <DisplayUpdates>
      
      </DisplayUpdates></div>
   
    </div>
    </MuiThemeProvider>
  )







 




 }