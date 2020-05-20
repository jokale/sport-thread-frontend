import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'DodgerBlue',
  textDecoration: 'underline overline',
  textDecorationColor: 'white',
  color: 'pink',
 
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >About</NavLink>
             <NavLink
          to="/threads"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Threads</NavLink>

        <NavLink
          to="/thread/new"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Create new thread</NavLink>
     
     <NavLink
          to="/updates"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Live Sport Updates</NavLink>
     
      </div>
    )
  }
}

export default Navbar;