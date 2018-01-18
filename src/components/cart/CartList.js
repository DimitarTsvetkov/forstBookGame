import React, { Component } from 'react';
import CartItem from './CartItem'

class CartList extends Component {

  getItems = (items) => {
    if(items.length > 0){
        const cartList = items.map((item)=>{
          return (<CartItem 
            key={item.id}
            label={item.label} 
            price={item.price} 
            id={item.id}
            removeItem={this.props.removeItem}
          />)

        })
        return cartList
    }
    return <div>There are no items</div>
  }
  render() {
    return (
      <div className="CartList">
        {this.getItems(this.props.items)}
      </div>
    );
  }
}

export default CartList;
