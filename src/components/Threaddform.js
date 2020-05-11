// form for new thread which is a class component
import React from 'react'


class ThreaddForm extends React.Component{

    //local state    
    state = {
            username: '',
            date: '',
            thread_title: '',
            thread_body: ''
        }

    render(){
        return(
            <div>
                <h5>New Thread Form</h5>
                <form>
                <br></br><label >Name:</label><input type="text" placeholder="Name" value={this.state.username}/><br></br>
                <br></br><label >Date:</label><input type="text" placeholder="Date"value={this.state.date}/><br></br>
                <br></br><label >Thread title:</label><input type="text" placeholder="Thread title"value={this.state.thread_title}/><br></br>
                <br></br> <label >Thread:</label><input type="text-area" placeholder="Thread" value={this.state.thread_body}/><br></br>


                </form>
            </div>
        )
    }
}

export default ThreaddForm



// t.string "username"
// t.date "date"
// t.string "thread_title"
// t.text "thread_body"