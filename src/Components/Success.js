import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'


const Success = () => {



    return(
         <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                                Success!
                        </Typography>
                </Toolbar>
            </AppBar>    
            <h1>Thank you! Your submission has been successful!</h1>  
        </>
    )
}

export default Success