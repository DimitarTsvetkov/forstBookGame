import React, { Component } from 'react';
<<<<<<< HEAD
import Header from './components/Header';
import Cart from './components/Cart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
=======
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
>>>>>>> 23b16c43e5ec46b6da1dc26da292d0869589dae7

class App extends Component {

  constructor(props){
    super(props)
<<<<<<< HEAD
    this.state = {
      header:'My Header'
    }
  }

  componentDidMount = () => {
    this.setState({
      header:'new header'
=======

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
>>>>>>> 23b16c43e5ec46b6da1dc26da292d0869589dae7
    })
  }

  render() {
    return (
<<<<<<< HEAD
      <MuiThemeProvider>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Header header={this.state.header}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-5">
              <Cart/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
=======
      <div className="App">
          Building a Single Page Application with React
        <Header/>
        <AddItemForm addItem={this.addItem}/>
        <CartList itemList={this.state.items}/>
      </div>
>>>>>>> 23b16c43e5ec46b6da1dc26da292d0869589dae7
    );
  }
}

export default App;
