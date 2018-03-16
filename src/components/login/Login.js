import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import img from './woodsign.png';
import {lightGreen700} from 'material-ui/styles/colors';
import {lightGreen900} from 'material-ui/styles/colors';
import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
    palette: {
        textColor: lightGreen700,
    },
    appBar: {
        color: lightGreen900
    }
});
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
                <MuiThemeProvider  muiTheme={muiTheme}>
                    <div className="row">
                        <div className="col-lg-3"/>
                        <div className="col-lg-6" >
                        <div className="text-center" >

                                    <AppBar
                                        title="Login"
                                        showMenuIconButton={false}
                                    />
                                    <TextField
                                        hintStyle={{color: lightGreen700}}
                                        hintText="Enter your Username"
                                        floatingLabelStyle={{color: lightGreen900}}
                                        type="username"
                                        floatingLabelText="username"
                                        onChange = {(event,newValue) => this.setState({username:newValue})}
                                    />
                                    <br/>
                                    <TextField
                                        hintStyle={{color: lightGreen700}}
                                        hintText="Enter your password"
                                        floatingLabelStyle={{color: lightGreen900}}
                                        type="password"
                                        floatingLabelText="Enter your Password"
                                        onChange = {(event,newValue) => this.setState({password:newValue})}
                                    />


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