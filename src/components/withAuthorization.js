import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase/firebase';
import * as routes from '../components/constants/Routes';
import Menu from "./login/Menu";
import Home from "./login/Home";


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
                <AuthUserContext.Consumer>
                    {authUser => authUser ? < Menu/> : null}
                </AuthUserContext.Consumer>
            );
        }
    }


    return withRouter(WithAuthorization);
}

export default withAuthorization;