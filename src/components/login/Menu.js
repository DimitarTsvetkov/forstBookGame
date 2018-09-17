import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {lightGreen700, lightGreen900} from 'material-ui/styles/colors';
import img from './woodsign.png';
import img2 from './forestbook1.png';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { auth,db } from '../../firebase';
import { firebase } from '../../firebase';
import AuthUserContext from '../AuthUserContext';
import SignOutButton from '../SingOut';
import * as routes from "../constants/Routes";
require('firebase/database');


//const Page = require("./reactmaster/src/components/login/Flipbookpage.html?_ijt=6vpmujq9c91a81b2jr54fam6up");
const style = {
    margin: 15,
};

const muiTheme = getMuiTheme({
    appBar: {
        color: lightGreen900
    }
});


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: '',
            animal_book: '',
            exit: '',
            bookUrl: ''
        }
        this.state = {
            authUser: null,
        };
    }

    async componentDidMount()  {
        const {
            history,
        } = this.props;


        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
            console.log(authUser.uid);

        });

        firebase.auth.onAuthStateChanged (function(user) {
            if (user) {
                console.log("  Photo URL: " + user.getIdToken());

                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        console.log("Sign-in provider: " + profile.providerId);
                        console.log("  Provider-specific UID: " + profile.uid);
                        console.log("  Name: " + profile.displayName);
                        console.log("  Email: " + profile.email);

                    });

                }

            } else {
                console.log("  No user ");
            }

        });


    }





    render() {

        const {Navigation} = this.state;

        return (

            <div>

            <div className="row">
                <div className="col-lg-3"/>
                <div className="col-lg-6">
                    <div className="text-center">
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <div className="screenmenu">
                                <div className="row">
                                    <div className="col-lg-3"/>
                                    <div className="col-lg-6">
                                        <img className="logoimg" src={require("./forestbook1.png")}
                                        />
                                        <Link className="ButtonLink" to="/">
                                            <button className="button">
                                                <img src={require("./woodsign.png")}
                                                     width="230"
                                                     height="80">
                                                </img>
                                                <div className="centered">Download game</div>
                                            </button>
                                        </Link>
                                        <br/>
                                        <Link className="ButtonLink" to="/about">
                                            <button className="button">
                                                <img src={require("./woodsign.png")}
                                                     width="230"
                                                     height="80"
                                                     onClick={(event) => this.handleClick(event)}>
                                                </img>
                                                <div className="centered">About</div>
                                            </button>
                                        </Link>
                                        <br/>
                                        <Link className="ButtonLink" to="/statistic">
                                            <button className="button">
                                                <img src={require("./woodsign.png")}
                                                     width="230"
                                                     height="80"
                                                     onClick={(event) => this.handleClick(event)}>
                                                </img>
                                                <div className="centered">Statistic</div>
                                            </button>
                                        </Link>
                                        <br/>
                                        <a className="ButtonLink" href={'http://localhost:63342/reactmaster/src/components/login/Flipbookpage.html?_ijt=hqf4m1qb4tsgb5j4kv95mg0h68'}>

                                        <button className="button">
                                            <img src={require("./woodsign.png")}
                                                 width="230"
                                                 height="80"
                                                 onClick={(event) => this.showBook(event)}>
                                            </img>
                                            <div className="centered">Book of animals</div>
                                        </button>
                                        </a>
                                        <br/>
                                        <Link className="ButtonLink" to="/">
                                            <button className="button" onClick={auth.doSignOut}>
                                                <img src={require("./woodsign.png")}
                                                  width="230"
                                                  height="80"
                                                  >
                                            </img>
                                                <div className="centered">Exit</div>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3"/>
                                </div>
                            </div>
                        </MuiThemeProvider>
                    </div>
                </div>
                <div className="col-lg-3"/>
            </div>

            </div>
        );
    }
}

export default Menu;