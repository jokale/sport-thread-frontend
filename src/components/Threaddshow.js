// Here we are creating show page for each 

// functional because we arent doing anything with state 
// import {Redirect} from 'react-router-dom'

//Presentional component

import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'

const Threaddshow = (props) => {

     console.log(props)

      let threadd = props.threadds[props.match.params.id -1]

        console.log(threadd)
        
     return (

        <div>

  <div>
      {/* {threadd? null : <Redirect to='/threads'/>} */}
      {/* {props.threadd.thread_title} - By: {props.threadd.username} - {props.threadd.thread_body} - {props.threadd.date}  */}
      <h3>{threadd ? threadd.thread_title : null}<br></br> </h3>
      <h4>By:{threadd ? threadd.username : null} <br></br></h4> 
      <h6> Created: {threadd ? threadd.date : null} <br></br> </h6>
        <h5> {threadd ? threadd.thread_body : null} </h5>
    
     </div>
     
     <CommentsContainer threadd={threadd}/> 
     <h5>Want to create a new thread?<a href="http://localhost:3001/thread/new">New Thread</a></h5>
   
     </div>

     
)
   



}

// {threadd.thread_title}<br></br> Thread creator: <br></br>{threadd.username} <br></br>Thread body: <br></br>{threadd.thread_body} <br></br> Date created: <br></br>{threadd.date }<br></br></li>)} */}
export default Threaddshow