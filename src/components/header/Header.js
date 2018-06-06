import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {lightGreen700, black} from 'material-ui/styles/colors';
import img from '../../assets/forestbook1.png';


const styles = {
    button: {
        marginLeft: 5,
    },
    linkColor:'#888'
};


class Header extends Component {

    render() {
        return (
            <nav className="Header" >
                <div className="row">
                    <div className="col-md-8">

                    </div>
                    <div className="col-lg-4">
                <RaisedButton
                    backgroundColor={black}
                    label="Login"
                    key="Login"
                    style={styles.button}
                    labelColor={styles.linkColor}
                    containerElement={<Link className="HeaderLink" to="/login">Login</Link>}
                    icon={<span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>}
                />
                <RaisedButton
                    backgroundColor={black}
                    label="Registration"
                    key="Registration"
                    style={styles.button}
                    labelColor={styles.linkColor}
                    containerElement={<Link className="HeaderLink" to="/registration">Registration</Link>}
                    icon={<span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>}
                />
                    </div>
                </div>
            </nav>
    );
    }
}

export default Header;
