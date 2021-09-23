import React, { useContext, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css'
import CommentInput from '../comment-input/CommonInput'
import Comment from '../comments/Comment';
import { db, storage } from '../../../firebase';
import { UserContext } from '../../../context/user';
import Notification from '../confirm-dialogue/Notification'
import Button from '@material-ui/core/Button';
import ConfirmDialog from '../confirm-dialogue/ConfirmDialog'
import AlertUser from './AlertUser'
import Download from './download/Download';
import {motion} from 'framer-motion'
import StarRating from '../star-rating/StarRating';
<link rel="stylesheet" type="text/css" media="only screen and (max-device-width: 480px)" href="small-device.css" />

export default function Post(
    { timestamp,
        profileUrl,
        username,
        id,
        photoUrl,
        caption,
        comments,
        setSelectedImg
    }) {
    /*const deletePost = () => {
        //delete  the image from the firebase storage


        //get ref to the image file we like to delete
        var imageRef = storage.refFromURL(photoUrl)
        
        //delete the file
        imageRef.delete().then(() => {
            console.log('delete successfull')
        }).catch((err) => {
            console.log(err);
        })

        //2. delete the post info from the firebase firestore
        //we have to delete the particular deleted document
        db.collection('posts').doc(id).delete().then(() => {
            console.log('delete post information successfull')
        }).catch((err) => {
            console.log(err);
        })
    }*/

    const [notify, setNotify] = useState({isOpen:false, message:"", type:""});
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });





    const [user, setUser] = useContext(UserContext).user;
    const deletePost = () => {
        // delete the image from firebase storage
        // get ref to the image file we like to delete
        if (username === user.displayName) { 
        //if ( id=== user.uid) {
            // delete the file
            var imageRef = storage.refFromURL(photoUrl);
            imageRef
                .delete()
                .then(function () {
                    console.log("delete successfull");
                })
                .catch(function (error) {
                    console.log(`Error ${error}`);
                });

            //2 delete the post info from firebase firestore
            db.collection("posts")
                .doc(id)
                .delete()
                .then(function () {
                    console.log("delete post info successfull");
                })
                .catch(function (error) {
                    console.log(`Error post info delete ${error}`);
                });
            /*setNotify({
                isOpen: true,
                message: "Your Image Has Been Deleted Successfully!",
                type:"success"
            })*/

            setNotify({
                isOpen: true,
                message: "Deleted Successfully",
                type: "error"
            })
            { < Notification notify={notify} setNotify={setNotify} /> }
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false,
            })
            console.log(user);
        } else {
            alert("You Can't Delete this Post.. Because this image is Posted by Another User");
        }
        < Notification notify={notify} setNotify={setNotify} />
    }
    
        

       
    const onDelete = () => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen:false,
        })
        setNotify({
            isOpen: true,
            message: "Deleted Successfully",
            type:"error"
        })
    }
    return (
        
        <div className="post">
            <div className="post__header" style={{justifyContent:"space-between"}}>
                
                <div className="post__headerLeft">
                    <img className="post__profilePic" src={profileUrl} />
                    <p style={{ marginLeft: '8px', textAlign: 'center' }}>{username}<sub style={{color:'gray'}}>{'34-6-709'}</sub></p>
                    
                </div>
                <button
                    style={{border:"none",outline:"none",backgroundColor:"white"}}
                    variant="contained"
                    onClick={(user) => {
                        let uid=user.id
                    setConfirmDialog({
                            isOpen:true,
                            title: "Are you sure to Delete this Post",
                            subTitle: "You Can't Undo this operation",
                             
                            onConfirm:()=>{deletePost(uid)}

                    })
                    }
                        
                   
                    }
                >
                    {user && user.displayName===username && <DeleteIcon />} </button>
            </div>
                
                <ConfirmDialog
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                />   
            <Notification notify={notify} setNotify={setNotify} />
            <motion.div className="post__center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 2}}
            >
                <div className="img-grid">
                <div className="img-wrap">
                <img
                    src={photoUrl}
                    className="post__photoUrl"
                    onClick={() => { setSelectedImg(photoUrl)}}
                    />
                </div>
                </div>
            </motion.div>
            <div>
                <p>
                <span><strong>{username}</strong></span>&nbsp;&nbsp;
                {caption}
                </p>
            </div>
            
            <div className="star-rating">
                <StarRating username={username} id={id} photoUrl={ photoUrl}/>
            </div>
            {comments ? comments.map((comment)=>(
                <Comment username={comment.username} caption={ comment.comment}/>
            )) : <></>}
            
            {user ? <CommentInput comments={comments} id={id} /> : <></>}
        </div>

    )
}
