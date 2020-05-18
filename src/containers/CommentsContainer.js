import React from 'react'
import Commentform from '../components/Commentform'
import Commentlist from '../components/Commentlist'

class CommentsContainer extends React.Component {
    render(){
        return(
            <div>
                <Commentlist comments={this.props.threadd && this.props.threadd.comments}/>
                <Commentform />
            </div>
        )
    }
}

export default CommentsContainer