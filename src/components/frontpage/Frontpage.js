
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component}  from 'react';
import { Link } from 'react-router-dom';
import * as Colors from "material-ui/styles/colors";
import img from '../../assets/forestbook1.png';


const style = {
    margin: 15,
    textColor: Colors.white.bold()
};

class Frontpage extends Component {


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3"/>
                    <div className="col-lg-6">
            <img className="logoimg" src={require("../../assets/forestbook1.png")}

            />
                    </div>
                    <div className="col-lg-3"/>
                </div>
            </div>
                    );
    }

}

export default Frontpage;