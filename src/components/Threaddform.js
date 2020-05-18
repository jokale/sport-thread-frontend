// form for new thread which is a class component
import React from 'react'
import {connect} from 'react-redux'
import {addThreadd} from '../actions/addThreadd'
// import {Route, Link} from 'react-router-dom'




//  const mystyle = {
//         color: "white",
//         backgroundColor: "DodgerBlue",
//         padding: "10px",
//         fontFamily: "Arial"
//       };

class ThreaddForm extends React.Component{

   

    //local state    
    state = {
            username: '',
            date: '',
            thread_title: '',
            thread_body: '',
        }

        handleTheChange = (event) =>{
            this.setState({
               [event.target.name]: event.target.value,
               redirect: true
            })
        }
         handleTheSubmit = (event)=> {
            event.preventDefault()
            this.props.addThreadd(this.state,this.props.history)
            // .then(newThreadd => newThreadd.this.props.history.push)
            this.setState({
            username: '',
            date: '',
            thread_title: '',
            thread_body: ''
            

            })

         }

        

    render(){
        return(
            <div >
                <h5>New Thread Form</h5>
                 <form style={{backgroundColor: "lightblue"}} onSubmit={this.handleTheSubmit}>
                <br></br><label >Name:</label><br/><input style={{color: "DodgerBlue"}}type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Date:</label><br/><input style={{color: "DodgerBlue"}}type="date" placeholder="Date"value={this.state.date} name="date" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Thread title:</label><br/><input style={{color: "DodgerBlue"}} type="text" placeholder="Thread title"value={this.state.thread_title} name="thread_title" onChange={this.handleTheChange}/><br></br>
                <br></br> <label >Thread:</label> <br/><textarea style={{color: "DodgerBlue"}} placeholder="Thread" value={this.state.thread_body} name="thread_body" onChange={this.handleTheChange}/><br></br>
                {/* <br></br><input type="submit"/><br></br> */} 
                
                <br></br> <button type="submit">Submit</button>
            

                </form>
                  
            </div> 
            //  console.log('hello')
        )
    }
}

export default connect(null,{addThreadd}) (ThreaddForm);



