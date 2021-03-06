
import React, {Component}  from 'react';
import Login from './Login';
import * as Colors from "material-ui/styles/colors";
import {Link, withRouter} from 'react-router-dom';
import {SignUpLink} from '../registration/Register';
import {auth, firebase, db} from '../../firebase';

const authAdminCondition = (authUser) => !!authUser && authUser.username === 'mariaaa';
const authCondition = (authUser) => !!authUser;

const style = {
    margin: 15,
    textColor: Colors.white.bold()
};

const SignInPage = ({history}) =>
    <div>
        <h1>SignIn</h1>
        <Home history={history}/>
        <SignUpLink />
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    loginscreen: [],
    loginmessage: '',
    buttonLabel: 'Register',
    isLogin: true,
    error: null,
};

var _this = this

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
        this.state = {
            users: null,
            authUser: null,
        };
    }


    componentDidMount() {

        firebase.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.setState({authUser})
            }
        });

    }

    componentWillMount() {


        const loginscreen = [];
        loginscreen.push();
        const loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage
        })

    }




    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        const {users} = this.state;

        return (
            <div className="row">
                <div className="col-lg-3">

                </div>
                <div className="col-lg-6">
                    <div className="input-container">

                        <div className="loginscreen">
                            {this.state.loginscreen}
                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">

                </div>

            </div>
        );
    }

}

export default Home;