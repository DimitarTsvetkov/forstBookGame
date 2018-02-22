import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import {lightGreen500} from 'material-ui/styles/colors';
import {orange900} from 'material-ui/styles/colors';
import img from './woodsign.png';




const muiTheme = getMuiTheme({
    palette: {
        textColor: lightGreen500,
    },
    appBar: {
        color: orange900
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
        return <div className="row">
            <div className="col-lg-3"/>
            <div className="col-lg-6">
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className="screenreg">
                        <div className="row">
                            <div className="col-lg-3"/>
                            <div className="col-lg-6">
                                <AppBar
                                    title="Registration"
                                    showMenuIconButton={false}
                                />
                                <TextField
                                    hintStyle={{color: orange900}}
                                    hintText="Enter your First Name"
                                    floatingLabelStyle={{color: orange900}}
                                    floatingLabelText="First Name"
                                    onChange={(event, newValue) => this.setState({first_name: newValue})}
                                />
                                <br/>
                                <TextField
                                    hintStyle={{color: orange900}}
                                    hintText="Enter your Last Name"
                                    floatingLabelStyle={{color: orange900}}
                                    floatingLabelText="Last Name"
                                    onChange={(event, newValue) => this.setState({last_name: newValue})}
                                />
                                <br/>
                                <TextField
                                    hintStyle={{color: orange900}}
                                    hintText="Enter your username"
                                    floatingLabelStyle={{color: orange900}}
                                    floatingLabelText="Username"
                                    onChange={(event, newValue) => this.setState({username: newValue})}
                                />
                                <br/>
                                <TextField
                                    hintStyle={{color: orange900}}
                                    hintText="Enter your Email"
                                    floatingLabelStyle={{color: orange900}}
                                    type="email"
                                    floatingLabelText="Email"
                                    onChange={(event, newValue) => this.setState({email: newValue})}
                                />
                                <br/>
                                <TextField
                                    hintStyle={{color: orange900}}
                                    type="password"
                                    hintText="Enter your Password"
                                    floatingLabelStyle={{color: orange900}}
                                    floatingLabelText="Password"
                                    onChange={(event, newValue) => this.setState({password: newValue})}
                                />
                                <br/>
                                <Link className="ButtonLink" to="/menu">
                                    <button className="button">
                                        <img src={require("./woodsign.png")}
                                             width="150" height="80"
                                             onClick={(event) => this.handleClick(event)}>
                                        </img>
                                        <div className="centered">Submit</div>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-lg-3"/>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
            <div className="col-lg-3"/>
        </div>;
    }
}


const style = {
    margin: 20,
};
export default Register ;