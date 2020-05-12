import React from 'react'
import {fetchThreadds} from '../actions/fetchThreadds'
import Threaddform from '../components/Threaddform'
import Threaddlist from '../components/Threaddlist'
import Threaddshow from '../components/Threaddshow'
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'

class ThreaddsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchThreadds()
    }

    render(){
        return(

            <div>
            <Route path='/thread/new' component={Threaddform}/>
            {/* <Threaddform/><br></br> */}
             <Route path='thread/:id' render={(routerProps) => <Threaddshow {...routerProps} threadds={this.props.threadds}/>}/>
             
            <Route exact path='/threads'render={()=> <Threaddlist threadds={this.props.threadds}/>} />
            {/* <Threaddlist threadds={this.props.threadds}/> */}
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