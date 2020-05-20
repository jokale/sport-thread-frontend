export const addThreadd =(data ) => {
 
    return(dispatch) => {
    fetch('http://localhost:3000/threadds',{
        
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newThreadd => dispatch({type: 'ADD_THREADD', payload: newThreadd}))
       
    }

    //we return dispatch so we have access to the action we are returnung we can do this because of thunk (we can return arguements due to thunk)

}