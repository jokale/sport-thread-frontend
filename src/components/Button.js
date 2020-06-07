import React from 'react';

class Clicker extends React.Component {


      state = {
        count: 0
    }


      clickerIncrement = () => {
        // const newCount = this.state.count + 1
        // this.setState({
        //   count: newCount
        // })

        console.log('a')

        fetch('http://localhost:3000/threaddsfdjkfsldjfldsfs')
          .then(resp => {
            if(resp.status !== 200) {
              throw new Error(resp.statusText);
            }
            console.log('b')
            return resp.json();
          })
          .then(data => console.log('c', data))
          .catch(errors => console.log('d', errors))
        
          console.log('e')
        // a, e, d

      }

    render(){
        return(
            <div >
            
                <button onClick={this.clickerIncrement} id="clickerbutton"> Click me! <br></br>{this.state.count}</button>
               
            </div>
        )
    }
}

export default Clicker 