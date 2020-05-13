import React from 'react'
import {connect} from 'react-redux'


class Commentform extends React.Component{


    state = {
        username:'',
        date: '',
        comment_description: ''

    }

    render(){
        return(
            <div>
                <h5>New Comment Form:</h5>
                <form id="commentform">
                <br></br><label >Name:</label><input placeholder="Username" type="text"value={this.state.username} name="username"/><br></br>
                <br></br><label >Date:</label><input placeholder="Date"type="datetime-local"value={this.state.date} name="date"/><br></br>
                <br></br><label >Comment:</label><input placeholder="Comment"type="text"value={this.state.comment_description} name="comment_description"/><br></br>
                <br></br> <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default connect(null)(Commentform)

