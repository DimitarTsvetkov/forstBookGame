import React, {Component} from 'react';
import CartAddItem from './CartAddItem'
import CartList from './CartList'
import {Card, CardTitle} from 'material-ui/Card';
import './Cart.css';

let counter = 1;
let cartItems = [
    {
        label: 'book',
        price: 20,
        id: 0
    },
    {
        label: 'apple',
        price: 10,
        id: 1
    }
]

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentItems: cartItems
        }
    }

    removeItem = (id) => {
        let remainingItems =
            this.state.currentItems.filter((item) => {
                if (item.id !== id) return item;
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
                <CardTitle title="Cart Component"/>
                <div className="Cart">
                    <CartAddItem addItem={this.addItem}/>
                    <CartList removeItem={this.removeItem} items={this.state.currentItems}/>
                </div>

            </Card>


        );
    }
}

export default Cart;
