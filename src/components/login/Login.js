import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="row">
                        <div className="text-center" >
                            <div className="login-container">
                                <div className="input-container">
                                    <input
                                        className="login-input"
                                        placeholder="Enter your Username"
                                        onChange = {(event,newValue) => this.setState({username:newValue})}
                                    />
                                    <input
                                        className="login-input"
                                        type="password"
                                        placeholder="Enter your Password"
                                        onChange = {(event,newValue) => this.setState({password:newValue})}
                                    />
                                </div>


                                <RaisedButton
                                    label="Submit"
                                    primary={true}
                                    style={style}
                                    containerElement={<Link className="HeaderLink" to="/menu">Home</Link>}
                                    onClick={(event) => this.handleClick(event)}/>
                            </div>


                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;