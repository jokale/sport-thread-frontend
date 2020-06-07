export const addDownvote =(downvote, commentId, threaddId ) => {
 
    return(dispatch) => {
    fetch(`http://localhost:3000/threadds/${threaddId}/comments/${commentId}`,{
        
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(downvote)
    })
    .then(res => res.json())
    .then(newDownvote => dispatch({type: 'ADD_DOWNVOTE', payload: newDownvote}))
       
    }


}