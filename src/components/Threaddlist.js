// All of the accounts will live here
// This is a functional component in an arrow function style 
import React from 'react'
import Threaddshow from './Threaddshow'



const Threaddlist = (props) => {

    return(
        <div> 
            {props.threadds.map(threadd => 
            
            <div key={threadd.id}><Threaddshow threadd={threadd}/></div>)}

            {/* //<li key={threadd.id}>Title: <br></br> {threadd.thread_title}<br></br> Thread creator: <br></br>{threadd.username} <br></br>Thread body: <br></br>{threadd.thread_body} <br></br> Date created: <br></br>{threadd.date }<br></br></li>)} */}
        </div>
    )
}


export default Threaddlist

