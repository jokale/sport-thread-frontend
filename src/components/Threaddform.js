// form for new thread which is a class component
import React from 'react'
import {connect} from 'react-redux'
import {addThreadd} from '../actions/addThreadd'

class ThreaddForm extends React.Component{

    //local state    
    state = {
            username: '',
            date: '',
            thread_title: '',
            thread_body: ''
        }

        handleTheChange = (event) =>{
            this.setState({
               [event.target.name]: event.target.value 
            })
        }
         handleTheSubmit = (event)=> {
            event.preventDefault()
            this.props.addThreadd(this.state)


         }

    render(){
        return(
            <div>
                <h5>New Thread Form</h5>
                <form onSubmit={this.handleTheSubmit}>
                <br></br><label >Name:</label><input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Date:</label><input type="date" placeholder="Date"value={this.state.date} name="date" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Thread title:</label><input type="text" placeholder="Thread title"value={this.state.thread_title} name="thread_title" onChange={this.handleTheChange}/><br></br>
                <br></br> <label >Thread:</label><input type="text-area" placeholder="Thread" value={this.state.thread_body} name="thread_body" onChange={this.handleTheChange}/><br></br>
                <br></br><input type="submit"/><br></br>


                </form>
            </div>
        )
    }
}

export default connect(null,{addThreadd}) (ThreaddForm);



