// All of the accounts will live here
// This is a functional component in an arrow function style 
import React from 'react'
import {Link} from 'react-router-dom'
// import Threaddshow from './Threaddshow'



const Threaddlist = (props) => {

    return(
        <div> 
            {props.threadds.map(threadd => 
            
            <li key={threadd.id}><Link to={`/threads/${threadd.id}`}>{threadd.thread_title}<br></br></Link>
            </li>
            )}

        </div>
    )
}


export default Threaddlist

