// form for new thread which is a class component
import React from 'react'
import {connect} from 'react-redux'
import {addThreadd} from '../actions/addThreadd'
import Form from 'react-bootstrap/Form'

// import Threaddlist from './Threaddlist'
// import {Route, Link} from 'react-router-dom'





class ThreaddForm extends React.Component{

   

    //local state that belongs to the component    
    state = {
            username: '',
            date: '',
            thread_title: '',
            thread_body: '',
        }

        handleTheChange = (event) =>{
            // alert('Your Thread was submitted!');
            this.setState({
               [event.target.name]: event.target.value,
               redirect: true
            })
        }
         handleTheSubmit = (event)=> {
            event.preventDefault()
            this.props.addThreadd(this.state,this.props.history)
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
                 <Form style={{backgroundColor: "#A7BAE3"}} onSubmit={this.handleTheSubmit}>
         
                               <Form.Label>Name:</Form.Label><br></br>

                <input style={{color: "DodgerBlue"}}type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.handleTheChange}/><br></br>

                <br></br><label >Date:</label><br/><input style={{color: "DodgerBlue"}}type="date" placeholder="Date"value={this.state.date} name="date" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Thread title:</label><br/><input style={{color: "DodgerBlue"}} type="text" placeholder="Thread title"value={this.state.thread_title} name="thread_title" onChange={this.handleTheChange}/><br></br>
                <br></br> <label >Thread:</label> <br/><textarea style={{color: "DodgerBlue"}} placeholder="Thread" value={this.state.thread_body} name="thread_body" onChange={this.handleTheChange}/><br></br>
                  <Form.Text className="text-muted">
                We'll never share your data with anyone else.
                </Form.Text>
                <br></br> <button type="submit">Submit</button>

                              
               

               
                </Form>
                  



   
            
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     <center><h6  >A Joanna E. Kalema Application</h6></center>
            </div> 
        )
    }
}

export default connect(null,{addThreadd}) (ThreaddForm);



