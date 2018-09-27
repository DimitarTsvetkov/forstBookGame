import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {lightGreen700} from 'material-ui/styles/colors';
import {lightGreen900} from 'material-ui/styles/colors';
import { auth } from '../../firebase';
import * as Routes from '../constants/Routes';
import { componentDidMount } from 'react-lifecycle-hoc';

import { firebase, db } from '../../firebase';
import _firebase from 'firebase';

const SignUpPage = ({ history }) =>
    <div>
        <Register history={history} />
    </div>

const INITIAL_STATE = {
    name:'',
    email: '',
    username: '',
    passwordOne: '',
    passwordTwo: '',
    phone:'',
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Register extends Component {



    constructor (props) {
        super(props);
        this.state = { ...INITIAL_STATE };

    }


    onSubmit = (event) => {
        const {
            name,
            username,
            email,
            passwordOne,

        } = this.state;

        const {
            history,
        } = this.props;



        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({ ...INITIAL_STATE }));

                    const rootRef =  _firebase.database();
                    const post = rootRef.ref().child('users').child(authUser.uid);

                    post.child("email").set(email);
                    post.child("name").set(name);
                    post.child("username").set(username);

                    history.push(Routes.MENU);

            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();

    }



    render() {
        const {
            name,
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
        <div className="row">
            <div className="col-lg-3"/>
            <div className="col-lg-6">
                    <div className="screenreg">
                        <div className="row">
                            <header className="header">
                                <h1>Registration</h1>
                            </header>
                            <div className="col-lg-3"/>
                            <div className="col-lg-6">
                                <input className="inputform"
                                       value={this.state.name}
                                       onChange={event => this.setState(byPropKey('name', event.target.value))}
                                       type="text"
                                       placeholder="Enter your Full Name"
                                />
                                <br/>
                                <input className="inputform"
                                       value={this.state.username}
                                       onChange={event => this.setState(byPropKey('username', event.target.value))}
                                       type="text"
                                       placeholder="Enter your Username"
                                />
                                <br/>
                                <input className="inputform"
                                       value={this.state.email}
                                       onChange={event => this.setState(byPropKey('email', event.target.value))}
                                       type="email"
                                       placeholder="Enter your Email"
                                     />
                                <br/>
                                <input className="inputform"
                                       value={passwordOne}
                                       onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                       type="password"
                                       placeholder="Enter your Password"
                                     />
                                <br/>
                                <input className="inputform"
                                       value={passwordTwo}
                                       onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                                       type="password"
                                       placeholder="Confirm Password"
                                />
                                <br/>
                                    <button className="button"
                                            disabled={isInvalid}
                                            type="submit">
                                        <img src={require("./woodsign.png")}
                                             width="150"
                                             height="80"
                                             >
                                        </img>
                                        <div className="centered">Submit</div>
                                    </button>
                            </div>
                            <div className="col-lg-3"/>
                        </div>
                        { error && <p>{error.message}</p> }
                    </div>
            </div>
            <div className="col-lg-3"/>
        </div>

            </form>
        );
    }
}





export default withRouter(SignUpPage);

export {
    Register,
};