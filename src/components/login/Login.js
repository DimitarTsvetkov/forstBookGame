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
                        <div className="col-lg-3"/>
                        <div className="col-lg-6" >
                        <div className="text-center" >

                                <div className="input-container">
                                    <AppBar
                                        title="Login"
                                        showMenuIconButton={false}

                                    />
                                    <TextField
                                        hintText="Enter your Username"
                                        type="username"
                                        floatingLabelText="username"
                                        onChange = {(event,newValue) => this.setState({username:newValue})}
                                    />
                                    <br/>
                                    <TextField
                                        hintText="Enter your password"
                                        type="password"
                                        floatingLabelText="Enter your Password"
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
                            <div className="col-lg-3"/>

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