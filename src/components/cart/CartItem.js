import React, { Component } from 'react';

class CartItem extends Component {


  
  render() {
    return (
      <div className="Product">
        {this.props.label} 
        {this.props.price}
        <button  onClick={()=>{
          console.log(this.props.id)
        }}/>
      </div>
    );
  }
}

export default CartItem;
