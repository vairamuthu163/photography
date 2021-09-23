/*import React, { useContext, useState } from 'react'
import SignInBtn from '../../signIn-btn/SignInBtn'
import './style.css'
import { UserContext} from '../../../context/user'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { db, storage } from '../../../firebase';
import {makeid} from '../helper/functions'
import firebase from 'firebase'


function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;

    const [caption, setCaption] = useState("")
    
    const [image, setImage] = useState(null);

    const [progress, setProgress] = useState(0)
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            //to display the image


            var selecedImageSrc = URL.createObjectURL(e.target.files[0])
            var imagePreview = document.getElementById("image-preview")
            
            imagePreview.src = selecedImageSrc;

            imagePreview.style.display = 'block';

        }
     }
    const handleUpload = () => {
        if (image) {
            var imageId = makeid(10);
            const uploadTask = storage.ref(`images/${imageId}.jpg`).put(image)
            uploadTask.on("state_changed", (snapshot) => {
                //progress function..1%,2%...
                const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
                setProgress(progress);

            }, (error) => {
                    console.log(error);
            }, () => {
                   //get download url and upload the post info 
                    storage.ref("images").child(`${imageId}`).getDownloadURL()
                    .then((imageUrl) => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            photoUrl: imageUrl, 
                            username: user.email.replace("@gmail.com",""),
                            profileUrl:user.photoURL, 

                        })    
                    })
            })
        }
    }
    return (
        <div className="createpost">
            {user ?
                <div className="createpost__loggedIn">
                    <h5>Create a Post</h5> 
                    <div className="createpost__loggedInCenter">
                        <textarea
                            className="createpost__textarea"
                            value={caption}
                            cols="30"
                            rows="3"
                            placeholder="Enter a caption about your image.."
                            onChange={(e)=>{setCaption(e.target.value)}}
                        ></textarea> 
                        
                        <div className="createpost__imagePreview">
                            <img id="image-preview" />
                        </div>
                    </div>
                    <div className="createpost__loggedInBottom">
                        <div className="createpost__imageUpload">
                            <label htmlFor="fileInput">
                                <AddAPhotoIcon style={{ cursor: 'pointer', fontSize: '30px', float: 'left' }} />
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                accept="image/="
                                onChange={handleChange} />
                        </div>
                        <button
                            className="createpost__uploadBtn"
                            onClick={handleUpload}
                            style={{ color: caption ? '#000' : 'lightgray' }}
                        >{ `Upload ${progress!=0 ? progress: ""}`}</button>
                    </div>
               </div>  : 
                <div>
                   <SignInBtn />
                   <p style={{marginLeft:'12px'}}>to Post &amp; Comment
                   </p>
                </div>
            }
            
        </div>
    )
} 
export default CreatePost
*/
import React, { useContext, useState } from 'react'
import SignInBtn from '../../signIn-btn/SignInBtn'
import './style.css'
import { UserContext } from '../../../context/user'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { db, storage } from '../../../firebase';
import { makeid } from '../helper/functions'
import firebase from 'firebase'
function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");

    const [image, setImage] = useState(null);

    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);

            var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

            var imagePreview = document.getElementById("image-preview");
            imagePreview.src = selectedImageSrc;
            imagePreview.style.display = "block";
        }
    };

    const handleUpload = () => {
        if (image) {
            var imageName = makeid(10);
            const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // progress function 1%,2%...

                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    // get download url and upload the post info

                    storage
                        .ref("images")
                        .child(`${imageName}.jpg`)
                        .getDownloadURL()
                        .then((imageUrl) => {
                            db.collection("posts").add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                caption: caption,
                                photoUrl: imageUrl,
                                username: user.displayName,
                                profileUrl: user.photoURL,
                            });
                        });

                    setCaption("");
                    setProgress(0);
                    setImage(null);

                    document.getElementById("image-preview").style.display = "none";
                }
            );
        }
    };

    return (
        <div className="createPost" style={{height:'80vh'}}>
            {user ? (
                <div className="createPost__loggedIn">
                    <p>Create Post</p>
                    <div className="createPost__loggedInCenter">
                        <textarea
                            className="createPost__textarea"
                            rows="3"
                            placeholder="Enter the caption here.."
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        ></textarea>

                        <div className="createPost__imagePreview">
                            <img id="image-preview" alt="" />
                        </div>
                    </div>
                    <div className="createPost__loggedInBottom">
                        <div className="createPost__imageUpload">
                            <label htmlFor="fileInput">
                                <AddAPhotoIcon
                                    style={{ cursor: "pointer", fontSize: "20px" }}
                                />
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            className="createPost__uploadBtn"
                            onClick={handleUpload}
                            style={{ color: caption ? "#000" : "lightgrey" }}
                        >
                            {`Upload ${progress!=0 ? progress : ""} %`}
                        </button>
                    </div>
                </div>
            ) : (
                    <div>
                        <SignInBtn />
                        <p style={{ marginLeft: "12px" }}>to Post &amp; Comment</p>
                    </div>
                )}
        </div>
    );
}

export default CreatePost
