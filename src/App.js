import React, { Component } from 'react';
import Header from './components/header/Header';
import AddItemForm from './components/additemform/AddItemForm';
import CartList from './components/cart/CartList';
import './App.css';
let items = [{
  id:0,
  product: 'book',
  price: 54
},
{
  id:1,
  product: 'apple',
  price: 30
}]

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      items
    }
  }

  addItem = (
      product = 'Added Item', 
      price = 0, 
      id = this.state.items.length) => {
      
      const newItem = {id, product, price}
      this.state.items.push(newItem)

      this.setState({
        items: this.state.items
      })
  }

  removeItem = (id) => {
    const itemsRemaining = this.state.data.filter((item) => {
      if(item.id !== id) return item;
    })
    this.setState({
        items: itemsRemaining
    })
  }

  render() {
    return (
      <div className="App">
          Building a Single Page Application with React
        <Header/>
        <AddItemForm addItem={this.addItem}/>
        <CartList itemList={this.state.items}/>
      </div>
    );
  }
}

export default App;
