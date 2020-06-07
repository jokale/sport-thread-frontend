import React from 'react';

class Downvote  extends React.Component {


      state = {
        count: 0
    }


    clickerIncrement = (event) => {
        event.preventDefault()
        alert('You just downvoted!');
         const newCount = this.state.count + 1
         this.setState({
          count: newCount
         })


      }

    render(){
        return(
            <div >
            
                <button onClick={this.clickerIncrement} id="upvotebutton"> Downvote <span role="img" aria-label="thumbs-down">👎</span> {this.state.count}</button>
               
            </div>
        )
    }
}

export default Downvote