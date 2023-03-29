import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Grid, Button, MenuItem, FormControl, TextField, } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { Box, AppBar, Toolbar } from '@material-ui/core';
import history from '../Navigation/history';
import landing from '../Landing'
import Link from '@material-ui/core/Link';





export default function NavBar () {



return(


<Box sx={{ flexGrow: 1 }}>
<AppBar position="static" color="secondary">
    <Toolbar>
        <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('../')}>Home</Button>
        <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('../facilities')}>Facilities</Button>
        <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('../ReviewFacility')}>Review Facility</Button>
        <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('../Filter')}>Filter</Button>
        <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('../Usage')}>Usage</Button>
        
    </Toolbar>
</AppBar>


</Box>


)



}


