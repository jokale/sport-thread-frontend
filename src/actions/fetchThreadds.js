
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

