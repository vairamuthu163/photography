import React from 'react'
import {storage} from '../../../../firebase'
export default function Download() {
    var storageRef = storage.ref("images/J3pWdb02AL.jpg");
    var image_d= storageRef.getDownloadURL()
    //var storageRef = firebase.storage().ref('Images/image1.jpg');
    return (
        <div>
           {console.log(image_d)} 
        </div>
    )
}
