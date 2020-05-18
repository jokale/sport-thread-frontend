import React from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../actions/deleteComment'
const Commentlist = (props) => {


    const handleDelete = (comment) => {
      props.deleteComment(comment.id, comment.threadd_id)
      // debugger
      //  return(
      //      <div> 
      //      </div>
       
    
    }
    return(
        <div>
            {props.comments && props.comments.map(comment =>
              <div key={comment.id}> 
              <h5>User: </h5> <h4>{comment.username}</h4>
              <h6>Created: {comment.date}</h6> 
              <h4>Comment:</h4><h5>  {comment.comment_description} </h5>
                <button onClick={()=> handleDelete(comment)}>Delete</button>

              </div>  
            )}
        </div>
    )
}



export default connect(null, {deleteComment})(Commentlist)


