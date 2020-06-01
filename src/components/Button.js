import React from 'react';

class Clicker extends React.Component {

    // constructor() {
    //     super()
    //     this.state = {
    //       count: 0
    //     }
    //   }

      state = {
        count: 0
    }


      clickerIncrement = () => {
        const newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }

    render(){
        return(
            <div >
            
                <button onClick={this.clickerIncrement} id="clickerbutton"> Click me!</button>
                {this.state.count}
            </div>
        )
    }
}

export default Clicker 