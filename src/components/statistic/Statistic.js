import React,{Component} from "react";
import AppBar from 'material-ui/AppBar';
import {lightGreen900} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import img from './woodsign.png';
import { Link } from 'react-router-dom';

const muiTheme = getMuiTheme({
    appBar: {
        color: lightGreen900
    }
});

class Statistic extends Component{

    render() {
        return(
            <div>
                <MuiThemeProvider  muiTheme={muiTheme}>
                    <AppBar className='appbar'
                    title="Statistic"
                    showMenuIconButton={false}
                    />
                </MuiThemeProvider>
                <div className="table-container">
                <table className='table-responsive'>
                        <thead>
                        <tr>
                            <th>Player</th>
                            <th>Leval</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                    <tbody>
                    <tr>
                        <td>Ana</td>
                        <td>2</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>Tom</td>
                        <td>3</td>
                        <td>50</td>
                    </tr>
                    </tbody>


                    </table>
                </div>
                <Link className="ButtonLink" to="/menu">
                    <button className="button">
                        <img src={require("./woodsign.png")}
                             width="150"
                             height="80"
                            >
                        </img>
                        <div className="centered">Back</div>
                    </button>
                </Link>
            </div>

        )
    }

}
export default Statistic;