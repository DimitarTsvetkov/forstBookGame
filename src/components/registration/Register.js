import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

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
        return (
            <div>
                <MuiThemeProvider>
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6">
                        <AppBar
                            title="Registration"
                        />
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange = {(event,newValue) => this.setState({first_name:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange = {(event,newValue) => this.setState({last_name:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange = {(event,newValue) => this.setState({email:newValue})}
                        />
                        <br/>
                        <TextField
                            type = "password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton
                            label="Submit"
                            primary={true}
                            style={style}
                            containerElement={<Link className="HeaderLink" to="/menu">Home</Link>}
                            onClick={(event) => this.handleClick(event)}/>
                        </div>
                            <div class="col-lg-3"></div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 20,
};
export default Register;