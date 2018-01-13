import React, { Component } from 'react';
import Item from './Item';



class ItemList extends Component {

  getItems = (items) => {
      if(items.length == 0){
        return <div>There are no items</div>
      }
      let cartList = items.map((item, i) => {
        return <Item 
        removeItem={this.props.removeItem}
        key={i}
        id={item.id}
        label={item.label} 
        price={item.price}/>
      }) 
      return cartList
  }

  render() {
    return <div>
      <p>Items in cart:</p>
      <ul className="list-group">
         {this.getItems(this.props.items)}
      </ul>
    </div>
  
  }
}

export default ItemList;
