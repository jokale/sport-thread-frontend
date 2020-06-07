import React from 'react';
import {connect} from 'react-redux'
import {addUpvote} from '../actions/addUpvote'

class Upvote  extends React.Component {


      state = {
        count: 0
    }


      clickerIncrement = (event) => {
        event.preventDefault()
        alert('You just upvoted!');
         const newCount = this.state.count + 1
         this.setState({
          count: newCount
         })


      }

    render(){
        return(
            <div >
            
                <button onClick={this.clickerIncrement} id="upvotebutton"> Upvote <span role="img" aria-label="thumbs-up">👍</span> {this.state.count}</button>
               
            </div>
        )
    }
}

export default connect(null, {addUpvote})(Upvote)

