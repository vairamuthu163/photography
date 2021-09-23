import React from 'react'
import './style.css'
import {motion} from 'framer-motion'
export default function Modal({selectedImg,setSelectedImg}) {
    
    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setSelectedImg(null)
        }
        
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            
        >
            <motion.img className="backdrop__border" src={selectedImg} alt="enlarged pic"
                initial={{ y: "-100vh"}}
                animate={{ y:0 }}
                
            />
            
        </motion.div>
    )
}
