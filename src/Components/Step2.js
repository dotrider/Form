import React from 'react'
import {TextField, AppBar, Toolbar, Typography, Button} from '@material-ui/core'


const Step2 = () => {
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
            
        />
        <br/>
         <TextField
            label="Last Name"
    
        />
        <br/>
         <TextField
            label="Email"

            htmlFor="outlined-adornment-email"
        />
        <br/>
        <Button variant="contained" color="primary"
  
        >
            Back
        </Button>

        <Button variant="contained" color="primary"
  
        >
            Continue
        </Button>
    </>
    )
}

export default Step2
