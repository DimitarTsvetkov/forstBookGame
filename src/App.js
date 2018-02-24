import React, {Component} from 'react';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import CategoryList from './components/categories/CategoryList';
import Promo from './components/promo/Promo';
import Weather from './components/chart/Weather';
import Register from './components/registration/Register';
import Login from './components/login/Login';
import Home from "./components/login/Home";
import Menu from "./components/login/Menu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  './App.css';
import firebase, { auth, provider } from './firebase.js';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';



const routes = [
    {
        path:'/',
        exact:true,
        middle: () => <Home/>
    },

    {
        path:'/menu',
        exact:true,
        middle: () => <Menu/>
    },
    {
        path:'/registration',
        exact:true,
        middle: () => <Register/>
    },
    {
        path:'/chart',
        exact:true,
        header: () => <Header/>,
        right: () => <Cart/>,
        left: () => <Weather/>
    },
    {
        path:'/login',
        exact:true,
        header: () => <Header/>,
        middle: () => <Login/>
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
                            <div className="col-md-8">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.left}
                                    />
                                )}
                            </div>
                            <div className="col-md-4">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.right}
                                    />
                                )}
                            </div>
                            <div className="col-md-12">
                                {routes.map((route, i) =>
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.middle}
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
