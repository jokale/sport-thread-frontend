export const deleteComment = (commentId,threaddId) => {


    return (dispatch)=>{
        return fetch(`http://localhost:3000/threadds/${threaddId}/comments/${commentId}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(threadd => dispatch({type: 'DELETE_COMMENT', payload: threadd}))
     }
}