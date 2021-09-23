import React, { useState } from 'react'
import BackImg from '../../backImg/BackImg'
import CreatePost from '../../containers/create-post/CreatePost'
import Feed from '../../containers/feed/Feed'
import Modal from '../../containers/modal/Modal'
import Navbars from '../../containers/navbar/Navbar'
import SignInBtn from '../../signIn-btn/SignInBtn' 
import "./style.css" 
import Black from '../home/Black'
function Home() {
const [selectedImg,setSelectedImg]=useState(null)

    return (
        <div className="home">
            <Navbars /> 
            <CreatePost /> 
            <Black />
            <Feed setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg}/>}  
        </div>
    )
}

export default Home
