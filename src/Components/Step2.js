import React from 'react'
import {TextField, AppBar, Toolbar, Typography, Button} from '@material-ui/core'


const Step2 = ({setVals: {setOccupation, setBio, setCity}, nextStep, prevStep}) => {


    const next = () => {
        nextStep()
    }

    const prev = () => {
        prevStep()
    }


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
            onChange={e => setCity(e.target.city)}
        />
        <br/>
         <TextField
            label="Occupation"
            onChange={e => setOccupation(e.target.value)}
        />
        <br/>
         <TextField
            label="Bio"
            onChange={e => setBio(e.target.value)}
        />
        <br/>
        <Button variant="contained" color="primary"
            onClick={prev}
        >
            Back
        </Button>

        <Button variant="contained" color="primary"
            onClick={next}
        >
            Continue
        </Button>
    </>
    )
}

export default Step2
