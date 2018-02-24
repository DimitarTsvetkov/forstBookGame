
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component}  from 'react';
import { Link } from 'react-router-dom'
import {lightGreen700, lightGreen900} from 'material-ui/styles/colors';
import img from './woodsign.png';
import img2 from './forestbook1.png';
import getMuiTheme from "material-ui/styles/getMuiTheme";

const style = {
    margin: 15,
};

const muiTheme = getMuiTheme({
    appBar: {
        color: lightGreen900
    }
});
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            play:'',
            animal_book:'',
            exit:''
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-3"/>
                <div className="col-lg-6" >
            <div>
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
                                         height="80"
                                         onClick={(event) => this.handleClick(event)}>
                                    </img>
                                    <div className="centered">Load the game</div>
                                </button>
                            </Link>
                        <br/>
                            <Link className="ButtonLink" to="/">
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
                            <Link className="ButtonLink" to="/">
                                <button className="button">
                                    <img src={require("./woodsign.png")}
                                         width="230"
                                         height="80"
                                         onClick={(event) => this.handleClick(event)}>
                                    </img>
                                    <div className="centered">Book of animals</div>
                                </button>
                            </Link>
                        <br/>
                            <Link className="ButtonLink" to="/">
                                <button className="button">
                                    <img src={require("./woodsign.png")}
                                         width="230"
                                         height="80"
                                         onClick={(event) => this.handleClick(event)}>
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
        );
    }
}
export default Menu;