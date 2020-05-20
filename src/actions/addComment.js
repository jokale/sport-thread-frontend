 import CommentForm from '../components/Commentform'
// import {connect} from 'react-redux';


export const addComment =( threaddId, comment ) => {
 console.log('the fetch')
 //   fetch(`http://localhost:3000/threadds/5/comments` ,{ This seems to work but ofc I do not want this for soley one thread 

    return(dispatch) => {
    fetch(`http://localhost:3000/threadds/${threaddId}/comments` ,{
        
        headers: {
            'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(comment)
    })
    .then(res => res.json())
    .then(comment => dispatch({type: 'ADD_COMMENT', payload: comment}))
   
       
    }

    //we return dispatch so we have access to the action we are returnung we can do this because of thunk (we can return arguements due to thunk)

}

// export default connect(null,{addComment}) (CommentForm)
