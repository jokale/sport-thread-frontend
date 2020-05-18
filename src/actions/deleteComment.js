export const deleteComment = (threaddId,commentId) => {


    return (dispatch)=>{
        return fetch(`http://localhost:3000/threadds/${threaddId}/comments/${commentId}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
    }

}