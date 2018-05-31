import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import img from './woodsign.png';
import * as Routes from '../constants/Routes';
import{ Redirect} from 'react-router-dom'
import { Toaster, Intent} from '@blueprintjs/core'
import {app, auth, email, pass, facebookProvider} from '../../firebase/firebase';
import {SignInForm} from "../userAction/SignIn";

const SignInPage = ({ history }) =>
    <div>
        <Login history={history} />
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};


class Login extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.authWithFacebook = this.authWithFacebook.bind(this)
        this.state = {
            redirect: false
        }
    }

    authWithFacebook(){
        app.auth().signInWithPopup(facebookProvider).then(
            (result, error) =>{
                if(error){
                    this.toaster.show({intent: Intent.DANGER, message:
                            "Unable tosign in with Fasebook" })
                }else{
                    this.setState({redirect: true})
                }
            }
        )

    }


    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(Routes.BUSSEATS);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault()
    }

    render() {

        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <div>
                    <div className="row">
                        <header className="header">
                            <h1>Login</h1>
                        </header>
                        <div className="col-lg-3"/>
                        <div className="col-lg-6" >
                        <div className="text-center" >
                            <Toaster ref={(element) => { this.toaster = element }} />


                            <br/>
                            <form  onSubmit={this.onSubmit} >
                                <input className="inputform"
                                        placeholder="Enter your email"
                                        type="text"
                                       value={email}
                                       onChange={event => this.setState(byPropKey('email', event.target.value))}  />
                                    <br/>

                                    <input className="inputform"
                                        placeholder="Enter your password"
                                        type="password"
                                           value={pass}
                                           onChange={event => this.setState(byPropKey('password', event.target.value))}  />

                            </form>
                            </div>
                        </div>
                            <div className="col-lg-3"/>
                        <div className="row">
                            <div className="col-md-6">

                                <button className="buttonl"
                                        disabled={isInvalid}>
                                    <img src={require("./woodsign.png")}
                                         width="150"
                                         height="80"

                                      >
                                    </img>
                                    <div className="centered">Submit</div>
                                </button>

                            </div>

                            <div className="col-md-6">
                                <button className="buttonface" onClick={() => {this.authWithFacebook()}}>

                                    <img src={require("./woodsign.png")}
                                         width="200"
                                         height="80"
                                    >
                                    </img>
                                    <div className="centered">Login with Facebook</div>
                                </button>
                            </div>

                        </div>
                        <br />

                        { error && <p>{error.message}</p> }
                    </div>
            </div>
        );
    }
}
const style = {
    margin: 15,

};

export default Login;