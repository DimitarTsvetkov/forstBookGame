import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
    button: {
        marginLeft: 5,
    },
    linkColor:'#000000'
};


class Header extends Component {

    render() {
        return (
            <nav className="Header">
                <div className="row">
                    <div className="col-md-7"/>
                    <div className="col-lg-5">
                <RaisedButton
                    label="Home"
                    key="Home"
                    style={styles.button}
                    containerElement={<Link className="HeaderLink" to="/">Home</Link>}
                    icon={<span className="glyphicon glyphicon-home" aria-hidden="true"></span>}
                />
                <RaisedButton
                    label="Login"
                    key="Login"
                    style={styles.button}
                    labelColor={styles.linkColor}
                    containerElement={<Link className="HeaderLink" to="/login">Login</Link>}
                    icon={<span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>}
                />
                <RaisedButton
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
