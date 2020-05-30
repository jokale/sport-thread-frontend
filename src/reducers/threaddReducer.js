
export default function threaddReducer (state = {threadds:[]}, action) {

    switch(action.type) {
    case 'FETCH_THREADDS':
       return {threadds: action.payload}
    case 'ADD_THREADD':
        return {...state, threadds: [...state.threadds, action.payload]}
    case 'ADD_COMMENT':
        let threadds = state.threadds.map(threadd => {
            if (threadd.id === action.payload.id){
                return action.payload
            } else {
                return threadd
            }
        })
        return{...state, threadds:threadds}
            case 'DELETE_COMMENT':
                let threaddsTwo = state.threadds.map(threadd => {
                    if (threadd.id === action.payload.id){
                        return action.payload
                    } else {
                        return threadd
                    }
                })
                return{...state, threadds:threaddsTwo}

     

    default:
        return state 
 }
}