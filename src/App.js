import React, {Component} from 'react';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            header: 'My Header',
        }
    }



    render() {
        return (
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

        );
    }
}

export default App;
