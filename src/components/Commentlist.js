import React from 'react'

const Commentlist = (props) => {
    return(
        <div>
            {props.comments && props.comments.map(comment =>
              <div key={comment.id}> 
              <h4>User: <h6>{comment.username}</h6></h4> 
              <h6>Created: {comment.date}</h6> 
              <h4>Comment {comment.id}:</h4><h5>  {comment.comment_description} </h5>


              </div>  
            )}
        </div>
    )
}



export default Commentlist


