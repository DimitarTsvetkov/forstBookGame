import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import {lightGreen700} from 'material-ui/styles/colors';
import {lightGreen900} from 'material-ui/styles/colors';






class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            username:'',
            email:'',
            password:''
        }
    }


    render() {
        return <div className="row">
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
                                    placeholder="Enter your First Name"
                                    onChange={(event, newValue) => this.setState({first_name: newValue})}
                                />
                                <br/>
                                <input className="inputform"
                                    placeholder="Enter your Last Name"
                                    onChange={(event, newValue) => this.setState({last_name: newValue})}
                                />
                                <br/>
                                <input className="inputform"
                                    placeholder="Enter your username"
                                    onChange={(event, newValue) => this.setState({username: newValue})}
                                />
                                <br/>
                                <input className="inputform"
                                    placeholder="Enter your Email"
                                    type="email"
                                    onChange={(event, newValue) => this.setState({email: newValue})}
                                />
                                <br/>
                                <input className="inputform"
                                    type="password"
                                    placeholder="Enter your Password"
                                    onChange={(event, newValue) => this.setState({password: newValue})}
                                />
                                <br/>
                                <Link className="ButtonLink" to="/menu">
                                    <button className="button">
                                        <img src={require("./woodsign.png")}
                                             width="150"
                                             height="80"
                                             onClick={(event) => this.handleClick(event)}>
                                        </img>
                                        <div className="centered">Submit</div>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-lg-3"/>
                        </div>
                    </div>
            </div>
            <div className="col-lg-3"/>
        </div>;
    }
}


const style = {
    margin: 20,
};
export default Register ;