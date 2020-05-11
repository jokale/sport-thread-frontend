import React from 'react'
import {fetchThreadds} from '../actions/fetchThreadds'
import Threaddform from '../components/Threaddform'
import Threaddlist from '../components/Threaddlist'
import {connect} from 'react-redux';


class ThreaddsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchThreadds()
    }

    render(){
        return(

            <div>
            <Threaddform/><br></br>
            <Threaddlist threadds={this.props.threadds}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        threadds: state.threadds
    }
}

export default connect(mapStateToProps, {fetchThreadds})(ThreaddsContainer);