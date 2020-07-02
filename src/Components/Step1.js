import React from 'react'
// import { MuiThemeProvider } from '@material-ui/core/styles'; 
import {MuiThemeProvider, TextField, RaisedButton, AppBar } from '@material-ui/core'

const Step1 = ({nexStep, setVals, vals}) => {

const next = () => {
    nexStep()
}
    return (
            <>
                <AppBar title='Enter User Details'/>
                <TextField
                    hintText='Enter Your First Name'
                    floatingLabelText='First Name'
                />
            </>

    )
}

export default Step1
