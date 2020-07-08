import React from 'react'
// import { MuiThemeProvider } from '@material-ui/core/styles'; 
import {TextField, AppBar, Toolbar, Typography, Button} from '@material-ui/core'


const Step1 = ({nextStep, setVals: {setFirstName, setLastName, setEmail }, vals:{firstName, lastName, email}, classes}) => {


    return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            Enter Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    label="First Name"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
                <br/>
                 <TextField
                    label="Last Name"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
                <br/>
                 <TextField
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    htmlFor="outlined-adornment-email"
                    value={email}
                />
                <br/>
        
                <Button variant="contained" color="primary"
                    onClick={nextStep}
                    className={classes.margin}
                >
                    Continue
                </Button>
            </>

    )
}

export default Step1
