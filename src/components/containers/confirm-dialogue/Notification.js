import { Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
//import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';


//const useStyles = makeStyles(theme => ({
//  root: {
//    top:
//}
//}))
export default function Notification(props) {
    const {notify,setNotify} = props 
    const handleClose = (event, reason) => {
        
                setNotify({
                    ...notify,
                    isOpen: false,
                })
    };
    return (
        <div>
            <Snackbar
                
                open={notify.isOpen}
                autoHideDuration={1000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={notify.type}>
                    {notify.message}
                </Alert>
            </Snackbar>
        </div>
    )
}