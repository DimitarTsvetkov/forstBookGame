import React, { Component } from 'react';

class Header extends Component {

  constructor (props){
    
    super(props)

  }
  render() {
    return (
      <div className="Header">
          {this.props.header}
      </div>
    );
  }
}

export default Header;
