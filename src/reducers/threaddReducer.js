
export default function threaddReducer (state = {threadds:[]}, action) {

    // debugger;
    // return action.payload
    switch(action.type) {
    case 'FETCH_THREADDS':
       return {threadds: action.payload}

    default:
        return state 
 }
}