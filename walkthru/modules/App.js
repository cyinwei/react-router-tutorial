import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>Hello, React Router!
        <ul role="nav">
          <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
          <li><Link to="/repos" activeStyle={{color: 'blue'}}>Repos</Link></li>
        </ul>
        {/* render the child components in App, which comes from Render */}
        {this.props.children}
      </div>
    )
  }
})
