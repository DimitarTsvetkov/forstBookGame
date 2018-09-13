import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase/firebase';
import * as routes from '../components/constants/Routes';
import Menu from "./login/Menu";
import Home from "./login/Home";
import About from "./login/About";


const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push(routes.HOME);
                }
            });
        }
        render() {


            return (
                <div>
                    {authUser => authUser ? <Component /> : null}
                </div>
            );
        }
    }


    return withRouter(WithAuthorization);
}

export default withAuthorization;