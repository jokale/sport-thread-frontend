// import CommentForm from '../components/Commentform'
// import {connect} from 'react-redux';


export const addComment =(comment, threaddId ) => {
 
    return(dispatch) => {
    fetch(`http://localhost:3000/threadds/${threaddId}/comments`,{
        
        headers: {
            'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(comment)
    })
    .then(res => res.json)
    .then(threadd => 
      dispatch({type: 'ADD_COMMENT', payload: threadd}))
    //   history.push(`/threads/${threaddId}`)
       
    }

    //we return dispatch so we have access to the action we are returnung we can do this because of thunk (we can return arguements due to thunk)

}

// export default connect(null,{addComment}) (CommentForm)
