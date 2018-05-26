
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component}  from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import * as Colors from "material-ui/styles/colors";
import {app, facebookProvider} from '../../firebase/firebase';


const style = {
    margin: 15,
    textColor: Colors.white.bold()
};

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loginscreen:[],
            loginmessage:'',
            buttonLabel:'Register',
            isLogin:true
        }
    }
    componentWillMount(){
        const loginscreen = [];
        loginscreen.push();
        const loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-3"/>
                <div className="col-lg-6" >
                    <div className="input-container">

                     <div className="loginscreen" >
                     {this.state.loginscreen}
                        <div>
                            <MuiThemeProvider>
                                <div className="row">
                                        <div className="loginmessage">

                                            <Login parentContext={this} appContext={this.props.parentContext}/>
                                            {this.state.loginmessage}

                                        </div>
                                            <div>
                                                <Link className="ButtonLink" to="/registration">
                                                <button className="button">
                                                    <img src={require("./woodsign.png")}
                                                         key={this.state.buttonLabel}
                                                         width="150"
                                                         height="80"
                                                         onClick={(event) => this.handleClick(event)}>
                                                    </img>
                                                    <div className="centered">Register</div>
                                                </button>
                                            </Link>

                                            </div>
                                        </div>
                            </MuiThemeProvider>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="col-lg-3"/>
            </div>
        );
    }

}

    export default Home;