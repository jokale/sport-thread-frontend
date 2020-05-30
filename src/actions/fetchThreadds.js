
export function fetchThreadds() {
//action){

    // return action 
    return (dispatch) => {
        fetch('http://localhost:3000/threadds')
        .then(res => res.json())
        .then(jsonData => dispatch({
             type: 'FETCH_THREADDS',
             payload: jsonData

        }))
    }
    
}

// action being sent to reducer which will match the type with case statement and its type 

