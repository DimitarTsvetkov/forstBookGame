import React, {Component} from 'react';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import CategoryList from './components/categories/CategoryList';
import Promo from './components/promo/Promo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

const routes = [
    {
        path:'/',
        exact:true,
        header: () => <Header/>,
        right: () => <Cart/>,
        left: () => <Promo/>
    },
    {
        path:'/categories',
        exact:true,
        header: () => <Header/>,
        right: () => <Cart/>,
        left: () => <CategoryList/>
    }
]



class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.header}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.left}
                                    />
                                )}
                            </div>
                            <div className="col-md-5">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.right}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Router>
            </MuiThemeProvider>

        );
    }
}

export default App;
