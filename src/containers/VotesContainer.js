import React from 'react'
import Upvote from '../components/Upvote'
import Downvote from '../components/Downvote'

class VotesContainer extends React.Component {
    render(){
        return(
            <div>
                <Upvote/>
                <br></br>
                <Downvote/>

            </div>
        )
    }
}

export default VotesContainer