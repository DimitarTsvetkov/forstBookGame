import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import {lightGreen500} from 'material-ui/styles/colors';
import {orange500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import img from './woodsign.png'



const muiTheme = getMuiTheme({
    palette: {
        textColor: lightGreen500,
    },
    appBar: {
        color: orange500
    }
});
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
            <div className="row">
                <div className="col-lg-3"/>
                <div className="col-lg-6">
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="screen">
                <div className="row">
                    <div className="col-lg-3"/>
                    <div className="col-lg-6">
                        <AppBar
                            title="Registration"
                            showMenuIconButton={false}

                        />
                        <TextField
                            hintStyle={{color: orange500}}
                            hintText="Enter your First Name"
                            floatingLabelStyle={{color: orange500}}
                            floatingLabelText="First Name"
                            onChange={(event, newValue) => this.setState({first_name: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange={(event, newValue) => this.setState({last_name: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({username: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange={(event, newValue) => this.setState({email: newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton
                            label="Submit"
                            primary={true}
                            styles={style}
                            containerElement={<Link className="HeaderLink" to="/menu">Home</Link>}
                            onClick={(event) => this.handleClick(event)}>
                        </RaisedButton>
                    </div>
                    <div className="col-lg-3"/>
                </div>
                </div>
            </MuiThemeProvider>
                </div>
                <div className="col-lg-3"/>
            </div>
        );
    }
}


const style = {
    margin: 20,
};
export default Register ;