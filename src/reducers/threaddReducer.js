
export default function threaddReducer (state = {threadds:[]}, action) {

    
    switch(action.type) {
    case 'FETCH_THREADDS':
       return {threadds: action.payload}
    case 'ADD_THREADD':
        return {...state, threadds: [...state.threadds, action.payload]}
    default:
        return state 
 }
}