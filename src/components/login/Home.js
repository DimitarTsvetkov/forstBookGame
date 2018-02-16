
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
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage
        })
    }
    render() {
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    <MuiThemeProvider>
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6">
                                {this.state.loginmessage}
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
                            <div class="col-lg-3"></div>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }

}

    export default Home;