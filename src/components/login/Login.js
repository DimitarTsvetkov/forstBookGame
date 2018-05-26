import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import img from './woodsign.png';
import {lightGreen700} from 'material-ui/styles/colors';
import {lightGreen900} from 'material-ui/styles/colors';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import{ Redirect} from 'react-router-dom'
import { Toaster, Intent} from '@blueprintjs/core'
import {app, auth, email, pass, facebookProvider} from '../../firebase/firebase';


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        }
        this.authWithFacebook = this.authWithFacebook.bind(this)
        this.state = {
            redirect: false
        }
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)



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


    authWithEmailPassword(event){
        event.preventDefault()
        const email = this.state.email
        const password = this.state.password

        app.auth().fetchProvidersForEmail(email).then(
            (providers)=> {
               {
                    return app.auth().SignInWithEmailAndPassword(email, password)
                }
            }
        ).then((user)=>{
            if(user && user.email){
                this.loginForm.reset()
                this.setState({redirect: true})
            }
        })
            .catch((error)=>{
                this.toaster.show({intent: Intent.DANGER, message: error.message })
            })

    }

    render() {

        if (this.state.redirect === true){
            return<Redirect to= '/menu' />
        }

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
                            <form  ref ={(form) => { this.loginForm = form}} >
                                <input className="inputform"
                                        placeholder="Enter your email"
                                        type="email"
                                       value={email}
                                        onChange = {(event,newValue) => this.setState({email:newValue})}
                                       // ref ={(TextField) => {this.emailInput = TextField}}
                                            />
                                    <br/>

                                    <input className="inputform"
                                        placeholder="Enter your password"
                                        type="password"
                                           value={pass}
                                        onChange = {(event,newValue) => this.setState({password:newValue})}
                                       // ref ={(TextField) => {this.passwordInput = TextField}}
                                    />
                            </form>
                            </div>
                        </div>
                            <div className="col-lg-3"/>
                        <div className="row">
                            <div className="col-md-6">

                                <button className="buttonl"
                                        onClick={(event) => this.authWithEmailPassword(event)}>
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
                    </div>
            </div>
        );
    }
}
const style = {
    margin: 15,

};

export default Login;