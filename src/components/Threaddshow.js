// Here we are creating show page for each 

// functional because we arent doing anything with state 

import React from 'react'

const Threaddshow = (props) => {

     console.log(props)

      let threadd = props.threadds[props.match.params.id -1]

        // console.log(threadd)
     return (

  <li>
      {/* {props.threadd.thread_title} - By: {props.threadd.username} - {props.threadd.thread_body} - {props.threadd.date}  */}
       {threadd ? threadd.thread_title : null} -  {threadd ? threadd.date : null}-{threadd ? threadd.thread_body : null}
        THREAD 
     </li>
)
   



}

// {threadd.thread_title}<br></br> Thread creator: <br></br>{threadd.username} <br></br>Thread body: <br></br>{threadd.thread_body} <br></br> Date created: <br></br>{threadd.date }<br></br></li>)} */}
export default Threaddshow