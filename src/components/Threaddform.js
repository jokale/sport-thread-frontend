// form for new thread which is a class component
import React from 'react'
import {connect} from 'react-redux'
import {addThreadd} from '../actions/addThreadd'
import { Redirect } from 'react-router-dom'




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
            redirect: false
        }

        handleTheChange = (event) =>{
            this.setState({
               [event.target.name]: event.target.value,
               redirect: true
            })
        }
         handleTheSubmit = (event)=> {
            event.preventDefault()
            this.props.addThreadd(this.state)
            this.setState({
            username: '',
            date: '',
            thread_title: '',
            thread_body: ''
            

            })

         }

         renderRedirect = () => {
            if (this.state.redirect) {
              return <Redirect to="/threads/:id" />
            }
          }
        

    render(){
        return(
            <div>
                <h5>New Thread Form</h5>
                 <form style={{backgroundColor: "lightblue"}} onSubmit={this.handleTheSubmit}>
                <br></br><label >Name:</label><br/><input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Date:</label><br/><input type="date" placeholder="Date"value={this.state.date} name="date" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Thread title:</label><br/><input type="text" placeholder="Thread title"value={this.state.thread_title} name="thread_title" onChange={this.handleTheChange}/><br></br>
                <br></br> <label >Thread:</label> <br/><textarea  placeholder="Thread" value={this.state.thread_body} name="thread_body" onChange={this.handleTheChange}/><br></br>
                {/* <br></br><input type="submit"/><br></br> */} 
                
                <br></br> <button onClick={this.setRedirect} type="submit">Submit</button>


                </form>
          
            </div>
        )
    }
}

export default connect(null,{addThreadd}) (ThreaddForm);



