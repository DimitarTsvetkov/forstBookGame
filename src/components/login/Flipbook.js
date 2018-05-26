
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import React, { Component}  from 'react';
import { Link } from 'react-router-dom'
import {lightGreen700, lightGreen900} from 'material-ui/styles/colors';
import img from './woodsign.png';
import img2 from './forestbook1.png';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Menu from "./Menu";
import FlipPage from 'react-flip-page';

const muiTheme = getMuiTheme({
    appBar: {
        color: lightGreen900
    }
});

class Flipbook extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="Flipbookpage.html"></a>
        );
    }
}
export default Flipbook;