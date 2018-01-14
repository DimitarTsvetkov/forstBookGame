import React, { Component } from 'react';
import CartItem from './CartItem'

class CartList extends Component {

  constructor(props){
    super(props)
  } 

  getItems = (itemList) => {
    if(itemList.length > 0){
        const cartList = itemList.map((item)=>{
          return (<CartItem 
            key={item.id}
            label={item.label} 
            price={item.price} 
            id={item.id}/>)
        })
        return cartList
    }
    return <div>There are no items</div>
  }
  render() {
    return (
      <div className="CartList">
        {this.getItems(this.props.itemList)}
      </div>
    );
  }
}

export default CartList;
