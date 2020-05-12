// Here we are creating show page for each 

// functional because we arent doing anything with state 

import React from 'react'
// import {Redirect} from 'react-router-dom'
const Threaddshow = (props) => {

     console.log(props)

      let threadd = props.threadds[props.match.params.id -1]

        console.log(threadd)
     return (

  <li>
      {/* {threadd? null : <Redirect to='/threads'/>} */}
      {/* {props.threadd.thread_title} - By: {props.threadd.username} - {props.threadd.thread_body} - {props.threadd.date}  */}
      Title: {threadd ? threadd.thread_title : null}<br></br> By:{threadd ? threadd.username : null} <br></br>  Created: {threadd ? threadd.date : null} <br></br> Thread body: {threadd ? threadd.thread_body : null} 
    
     </li>
)
   



}

// {threadd.thread_title}<br></br> Thread creator: <br></br>{threadd.username} <br></br>Thread body: <br></br>{threadd.thread_body} <br></br> Date created: <br></br>{threadd.date }<br></br></li>)} */}
export default Threaddshow