export const addUpvote =(upvote, commentId, threaddId ) => {
 
    return(dispatch) => {
    fetch(`http://localhost:3000/threadds/${threaddId}/comments/${commentId}`,{
        
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(upvote)
    })
    .then(res => res.json())
    .then(newUpvote => dispatch({type: 'ADD_UPVOTE', payload: newUpvote}))
       
    }


}