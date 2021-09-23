import React from 'react'
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
export default function CofirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props

    const classes = useStyles()
    return (
        <Dialog open={confirmDialog.isOpen}  classes={{ paper: classes.dialog }} className="fonts">
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocation></NotListedLocation>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>

            </DialogContent>

            <DialogActions className={classes.dialogAction}>
                <Button style={{ outline: "none" }} variant="contained" color="gray" onClick={() => { setConfirmDialog({ ...confirmDialog, isOpen: false, }) }}>
                    No
                </Button>
                <Button style={{ outline:"none"}} variant="contained" color="secondary" onClick={confirmDialog.onConfirm}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
