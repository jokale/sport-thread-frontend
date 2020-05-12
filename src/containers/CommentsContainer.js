import React from 'react'
import Commentform from '../components/Commentform'
import Commentlist from '../components/Commentlist'

class CommentsContainer extends React.Component {
    render(){
        return(
            <div>
                <Commentlist/>
                <Commentform/>
            </div>
        )
    }
}

export default CommentsContainer