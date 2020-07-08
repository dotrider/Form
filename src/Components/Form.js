import React, { useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Success from './Success';
import { makeStyles } from '@material-ui/core'

//Material UI Btns Style
const useStyles = makeStyles((theme) => ({
  margin: {
      margin: theme.spacing(4),
    }
}));


const Form = () => {
//Material UI
  const classes = useStyles();


    const [ firstName, setFirstName ] = useState(''),
      [ lastName, setLastName ] = useState(''),
      [ email, setEmail ] = useState(''),
      [ occupation, setOccupation ] = useState(''),
      [ city, setCity ] = useState(''),
      [ bio, setBio ] = useState(''),
      [ step, setStep ] = useState(1);



      const nextStep = () => {
        setStep(step + 1)
      }

      const prevStep = () => {
        setStep(step - 1)
      }

      const vals = { firstName, lastName, occupation, email, city, bio}
      const setVals = { setFirstName, setLastName, setOccupation, setEmail, setCity, setBio}
      
//switch statement instead of return
  switch(step){
    case 1 :
      return <Step1 nextStep={nextStep} vals={vals} setVals={setVals} classes={classes}/>
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} vals={vals} setVals={setVals} classes={classes}/>
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} vals={vals} classes={classes}/>
    case 4:
      return <Success />
    default:
      return null
  }
}

export default Form
