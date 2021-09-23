/*import React,{useState,useContext} from 'react'
import SignInBtn from '../../signIn-btn/SignInBtn'
import './style.css'
import { UserContext } from '../../../context/user'
import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap'
function Navbars() {
    const [user, setUser] = useContext(UserContext).user;
    return (
        <>
            {/*<div className="navbar">
                <p title="Photograph">ReactPhotograph</p>
                <button style={{ marginRight: '0px' }}>Create Post</button>
                {user ? <img className="navbar__img" src={user.photoURL} /> : <SignInBtn />}
            </div>}
        <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">ReactPhotograph</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                 {user ? <img className="navbar__img" src={user.photoURL} /> : <SignInBtn />}
            </Nav>
        </Navbar>
        </>
    )
}

export default Navbars
*/
import {ReactNavbar} from "react-responsive-animate-navbar";
import React, { useState, useContext } from 'react'
import SignInBtn from '../../signIn-btn/SignInBtn'
import './style.css'
import { UserContext } from '../../../context/user'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily:'Poppins'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textTransform: 'lowercase',
        
    },
}));

export default function Navbars() {
    const classes = useStyles();
    const [user, setUser] = useContext(UserContext).user;
    return (
        <div>
            {//<div className={classes.root}>
            }
            {/*<AppBar position="fixed" style={{ backgroundColor: '#524d4d', fontFamily: 'Poppins'}}>
                <Toolbar>
                    <Typography style={{ flexGrow:2}} variant="h6">
                        Photography
                    </Typography>
                    
                </Toolbar>

            </AppBar> -->*/}
            <ReactNavbar
                style={{padding:"12px 24px"}}
                color="rgb(25, 25, 25)" 
                logo="photo.png"
                menu={[
                    { name: "HOME", to: "/" },
                    { name: "Login", to: "/articles" },
                    { name: "Create Post", to: "/createPost" },
                ]}
                social={[
                    {
                        name: "Linkedin",
                        url: "https://www.linkedin.com/in/vairamuthu-a-102b221b0/",
                        icon: ["fab", "linkedin-in"],
                    },
                    {
                        name: "Facebook",
                        url: "https://www.facebook.com/profile.php?id=100045914822749",
                        icon: ["fab", "facebook-f"],
                    },
                    {
                        name: "Instagram",
                        url: "https://www.instagram.com/nazeh_taha/",
                        icon: ["fab", "instagram"],
                    },
                    {
                        name: "Twitter",
                        url: "http://nazehtaha.herokuapp.com/",
                        icon: ["fab", "twitter"],
                    },
                ]}
            />
        </div>
    );
}



