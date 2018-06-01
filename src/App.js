import React, {Component} from 'react';
import Header from './components/header/Header';
import Register from './components/registration/Register';
import Login from './components/login/Login';
import Home from "./components/login/Home";
import Menu from "./components/login/Menu";
import About from './components/login/About';
import Statistic from "./components/statistic/Statistic";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  './App.css';
import  { app, firebase } from './firebase/firebase';
import Frontpage from "./components/frontpage/Frontpage";

import {BrowserRouter as Router, Route} from 'react-router-dom';



const routes = [
    {
        path:'/',
        exact:true,
        header: () => <Header/>,
        middle: () => <Frontpage/>
    },
    {
        path:'/login',
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
        path:'/statistic',
        exact:true,
        middle: () => <Statistic/>
    },
    {
        path:'/about',
        exact:true,
        middle: () => <About/>
    },

]



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

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
