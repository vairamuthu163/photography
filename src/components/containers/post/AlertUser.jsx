import React,{useState} from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button, makeStyles, IconButton } from '@material-ui/core'
import { NotListedLocation } from '@material-ui/icons'
import './style.css'


const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(6),
        position: 'absolute',
        top: theme.spacing(5),
        fontFamily: "Poppins"
    },
    dialogContent: {
        textAlign: 'center',

    },
    dialogTitle: {
        textAlign: 'center',

    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))
export default function AlertUser() {
    const [alertUser, setAlertUser] = useState({ isOpen: false, title: "", subTitle: '' });
    const handleClick = () => {
        setAlertUser({
            isOpen: true,
            title: "You Can't Delete this Post",
            subTitle:"Because This image is Posted by Someone else"
        })
    }
    const classes = useStyles()
    return (
        <Dialog open={alertUser.isOpen} classes={{ paper: classes.dialog }} className="fonts">
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocation></NotListedLocation>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {alertUser.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {alertUser.subTitle}
                </Typography>

            </DialogContent>

            <DialogActions className={classes.dialogAction}>
                <Button style={{ outline: "none" }} variant="contained" color="gray" onClick={handleClick}>
                    Cancel
                </Button>
               
            </DialogActions>
        </Dialog>
    )
}
