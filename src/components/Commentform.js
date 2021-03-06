import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'



//Container Component as you see its allowing for the comment form to be submitted and to actually work 
class Commentform extends React.Component{


    state = {
        username:'',
        date: '',
        comment_description: '',
        threadd_id: ''

    }


    handleTheChange = (event) =>{
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleTheSubmit = (event)=> {
        event.preventDefault()
        
        let comment = {
            username: this.state.username,
            date: this.state.date,
            comment_description: this.state.comment_description,
            threadd_id:  this.props.threadd.id 
    
        }

        this.props.addComment(comment)
       
        this.setState({
        username: '',
        date: '',
        comment_description: ''
    }) 
   

        }

    render(){
        return(
            <div style={{backgroundColor: '#A7BAE3'}}>
               <br/> <h5>New Comment Form:</h5>
                <form  onSubmit={this.handleTheSubmit}style={{color: "DodgerBlue"}}>
                <br></br><label  >Name:</label><br/><input style={{color: "DodgerBlue"}} placeholder="Username" type="text"value={this.state.username} name="username" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Date:</label><br/><input placeholder="Date"type="datetime-local"value={this.state.date} name="date" onChange={this.handleTheChange}/><br></br>
                <br></br><label >Comment:</label><br/><textarea placeholder="Comment"type="text"value={this.state.comment_description} name="comment_description"onChange={this.handleTheChange}/><br></br>
                <br></br> <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}



export default connect(null, {addComment})(Commentform);

