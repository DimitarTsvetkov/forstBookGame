import React, { Component } from 'react';
import ItemInput from './ItemInput'
import ItemList from './ItemList'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


let counter = 1;
let cartItems = [
  {
    label: 'book',
    price: 20,
    id:0
  },
  {
    label: 'apple',
    price: 10,
    id:1
  }
]

class Cart extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentItems:cartItems
    }
  }

  removeItem = (id) => {
    let remainingItems = 
    this.state.currentItems.filter((item) => {
        if(item.id != id) return item;
    })
    this.setState({
      currentItems: remainingItems
    })
  }
  addItem = (item) => {
      counter++
      item.id = counter
      this.state.currentItems.push(item)
      this.setState({
          currentItems: this.state.currentItems
      })
  }

  render() {
    return (

<Card >
    <CardTitle title="Cart with Items" />
    <div className="Cart">
    <ItemInput addItem={this.addItem}/>
    <ItemList removeItem={this.removeItem} items={this.state.currentItems}/>
</div>
   
  </Card>

 
    );
  }
}

export default Cart;
