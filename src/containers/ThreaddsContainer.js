import React from 'react'
import {fetchThreadds} from '../actions/fetchThreadds'
import Threaddform from '../components/Threaddform'
import Threaddlist from '../components/Threaddlist'
import Threaddshow from '../components/Threaddshow'
// import Button from '../components/Button'
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'

class ThreaddsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchThreadds()
    }

    render(){
        return(

            <div>
                <Switch>
            <Route path='/thread/new' component={Threaddform}/>
            {/* <Threaddform/><br></br> */}
             <Route path='/threads/:id' render={(routerProps) => <Threaddshow {...routerProps} threadds={this.props.threadds}/>}/>

            <Route exact path='/threads'render={()=> <Threaddlist threadds={this.props.threadds}/>} />
            {/* <Threaddlist threadds={this.props.threadds}/> */}
            </Switch>
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