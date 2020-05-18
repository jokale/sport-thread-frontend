import React from 'react'

const Commentlist = (props) => {


    const handleDelete = () => {
       return(
           <div> 
           </div>
       )
    
    }
    return(
        <div>
            {props.comments && props.comments.map(comment =>
              <div key={comment.id}> 
              <h5>User: </h5> <h4>{comment.username}</h4>
              <h6>Created: {comment.date}</h6> 
              <h4>Comment:</h4><h5>  {comment.comment_description} </h5>
                <button onClick={handleDelete}>Delete</button>

              </div>  
            )}
        </div>
    )
}



export default Commentlist


