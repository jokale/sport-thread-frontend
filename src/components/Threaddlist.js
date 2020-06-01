// All of the accounts will live here
// This is a functional component in an arrow function style 
import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Clicker from '../components/Button'
// import Threaddshow from './Threaddshow'

//Presentional component which is focusing on the look of how created threads will look 

// everything within my return is JSX
const Threaddlist = (props) => {

    return(
        <div> 
            <Clicker/>
            {props.threadds.map(threadd => 
            
            <div key={threadd.id}> <Button size='lg' variant="outline-dark"><Link to={`/threads/${threadd.id}`}>{threadd.thread_title}<br></br></Link></Button>
            </div>
            )}


<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     <center><h6 style={{color: "#ff6699"}} >A Joanna E. Kalema Application</h6></center>
        </div>
    )
}


export default Threaddlist

