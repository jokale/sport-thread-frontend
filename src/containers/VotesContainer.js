import React from 'react'
import Upvote from '../components/Upvote'
import Downvote from '../components/Downvote'

class VotesContainer extends React.Component {
    render(){
        return(
            <div>
                <Upvote upvotes={this.props.threadd && this.props.threadd.comments}/>
                <br></br>
                <Downvote downvotes={this.props.threadd && this.props.threadd.comments}/>

            </div>
        )
    }
}

export default VotesContainer