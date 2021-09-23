import React from 'react'

export default function Comment({username,caption}) {
    return (
        <div className="comment">
            <p>
                <span><strong>{username}</strong></span>&nbsp;&nbsp;
                {caption}
            </p>
        </div>
    )
}
