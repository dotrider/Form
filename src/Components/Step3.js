import React from 'react'
import {Button, List, ListItemText} from '@material-ui/core'

const Step3 = ({vals: {firstName, lastName, email, occupation, city, bio}, prevStep, nextStep}) => {

     


    return (
        <>
        <List>
            <ListItemText primary="First Name" secondary={firstName}/>
            <ListItemText primary="Last Name" secondary={lastName}/>
            <ListItemText primary="Email" secondary={email}/>
            <ListItemText primary="Occupation" secondary={occupation}/>
            <ListItemText primary="City" secondary={city}/>
            <ListItemText primary="Bio" secondary={bio}/>    
        </List>
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Confirm</Button>
        </>
    )
}

export default Step3
