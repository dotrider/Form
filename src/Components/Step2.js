import React from 'react'
import {TextField, AppBar, Toolbar, Typography, Button} from '@material-ui/core'


const Step2 = ({setVals: {setOccupation, setBio, setCity}, nextStep, prevStep, vals:{city, occupation, bio}, classes}) => {




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
            label="City"
            onChange={e => setCity(e.target.value)}
            value={city}
        />
        <br/>
         <TextField
            label="Occupation"
            onChange={e => setOccupation(e.target.value)}
            value={occupation}
        />
        <br/>
         <TextField
            label="Bio"
            onChange={e => setBio(e.target.value)}
            value={bio}
        />
        <br/>
        <Button variant="contained" color="primary"
            onClick={prevStep}
            className={classes.margin}
        >
            Back
        </Button>

        <Button variant="contained" color="primary"
            onClick={nextStep}
            className={classes.margin}
        >
            Continue
        </Button>
    </>
    )
}

export default Step2
