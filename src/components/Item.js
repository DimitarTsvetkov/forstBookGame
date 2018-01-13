import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Item extends Component {

  render() {
    return (
      <li className="list-group-item">
      <div className="row">
      <div className="col-md-6">{this.props.label}</div>         
        <div className="col-md-3">{this.props.price}</div>
        <div className="col-md-3">
        <RaisedButton label="-" primary={true} onClick={()=>{
           this.props.removeItem(this.props.id)
          }}/>  
        </div>  
      </div>
         
     
      </li>
    );
  }
}

export default Item;
