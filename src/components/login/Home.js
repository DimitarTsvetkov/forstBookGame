
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component}  from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import * as Colors from "material-ui/styles/colors";


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
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
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
                     <div className="loginscreen" >
                     {this.state.loginscreen}
                        <div>
                            <MuiThemeProvider>
                                <div className="row">
                                    <div className="col-lg-3"/>
                                    <div className="col-lg-6" >
                                        <div className="loginmessage">
                                        {this.state.loginmessage}
                                        </div>
                                            <div>
                                                <RaisedButton
                                                    label={this.state.buttonLabel}
                                                    key={this.state.buttonLabel}
                                                    primary={true}
                                                    style={style}
                                                    containerElement={<Link className="HeaderLink" to="/registration">Home</Link>}
                                                    onClick={(event) => this.handleClick(event)}/>
                                            </div>
                                        </div>
                                    <div className="col-lg-3"/>
                                </div>
                            </MuiThemeProvider>
                        </div>
                     </div>
                </div>
                <div className="col-lg-3"/>
            </div>
        );
    }

}

    export default Home;