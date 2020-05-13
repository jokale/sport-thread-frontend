import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'

class Commentform extends React.Component{


    state = {
        username:'',
        date: '',
        comment_description: ''

    }


    handleTheChange = (event) =>{
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleTheSubmit = (event)=> {
        event.preventDefault()
        // let threadd = props.threadds[props.match.params.id -1]
       
         this.props.addComment(this.state,this.addComment.thread.id)
         
        this.setState({
        username: '',
        date: '',
        comment_description: ''
    }) 
    // debugger;

        }

    render(){
        return(
            <div>
                <h5>New Comment Form:</h5>
                <form onSubmit={this.handleTheSubmit}>
                <br></br><label >Name:</label><input placeholder="Username" type="text"value={this.state.username} name="username" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Date:</label><input placeholder="Date"type="datetime-local"value={this.state.date} name="date" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Comment:</label><input placeholder="Comment"type="text"value={this.state.comment_description} name="comment_description"onChange={this.handleTheChange}/><br></br>
                <br></br> <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default connect(null, {addComment})(Commentform)

