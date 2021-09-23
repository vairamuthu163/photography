/*import React,{useState,useContext} from 'react'
import './style.css'
import {UserContext} from '../../../context/user'
import Button from '@material-ui/core/Button';
import {db} from '../../../firebase'
export default function CommonInput({ id, comments }) {
    const [comment, setComment] = useState("")
    const [user, setUser] = useContext(UserContext).user
    const [commentArray,setCommentArray]=useState([comments? comments: []])
    const handleComment = (e) => {
        setComment(e.target.value)
    }
    const addComment = () => {
        if (comment != "") {
            // add comment to the post info

            commentArray.push({
                comment: comment,
                username: user.email.replace("@gmail.com", "").toLowerCase(),
            });

            db.collection("posts")
                .doc(id)
                .update({
                    comments: commentArray,
                })
                .then(function () {
                    setComment("");
                    console.log("comment added");
                })
                .catch(function (error) {
                    console.log(`Error ${error}`);
                });
        }
    };
    return (
        <div className="commentInput">
            <textarea
                className="commentInput__textarea"
                rows="1"
                placeholder="Leave a Comment...."
                value={comment}
               onChange={handleComment}
            >

            </textarea>
             <Button
                variant="contained"
                color="primary"
                style={{outline:'none',height:'30px',textAlign:'center'}}
                onClick={addComment}
            >
                Post
          </Button>
        </div>
    )
}*/
import React, { useState, useContext } from 'react'
import './style.css'
import { UserContext } from '../../../context/user'
import Button from '@material-ui/core/Button';
import { db } from '../../../firebase'
export default function CommentInput({ comments, id }) {
    const [user, setUser] = useContext(UserContext).user;
    const [comment, setComment] = useState("");
    const [commentArray, setCommentArray] = useState(comments ? comments : []);

    const addComment = () => {
        if (comment != "") {
            // add comment to the post info

            commentArray.push({
                comment: comment,
                username: user.displayName,
            });

            db.collection("posts")
                .doc(id)
                .update({
                    comments: commentArray,
                })
                .then(function () {
                    setComment("");
                    console.log("comment added");
                })
                .catch(function (error) {
                    console.log(`Error ${error}`);
                });
        }
    };

    return (
        <div className="commentInput">
            <textarea
                className="commentInput__textarea"
                rows="1"
                placeholder="Leave a comment....."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <Button
                color="primary"
                style={{  outline: 'none', height: '30px', textAlign: 'center' }}
                onClick={addComment}
            >
               {comment && "Post"}
          </Button>
        </div>
    );
}
