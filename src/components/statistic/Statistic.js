import React,{Component} from "react";
import AppBar from 'material-ui/AppBar';
import {lightGreen900} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import img from './woodsign.png';
import { Link } from 'react-router-dom';
import { firebase, db } from '../../firebase';
import _firebase from 'firebase'
const muiTheme = getMuiTheme({
    appBar: {
        color: lightGreen900
    }
});

class Statistic extends Component{
    constructor(props) {
        super(props)

        this.state = {
            userData: {},
            user: {}
        }
    }
    async componentDidMount() {
        const user = firebase.auth.currentUser;
        console.log('_user ', user)
        const userData = await _firebase.database().ref("/users/"+user.uid).once('value')
        this.setState({
            userData: userData.val(),
            user
        })
    }

    render() {
        const { userData, user } = this.state

        console.log('this state > ', this.state)
        return(
            <div>

                <MuiThemeProvider  muiTheme={muiTheme}>
                    <AppBar className='appbar'
                    title="Statistic"
                    showMenuIconButton={false}
                    />
                </MuiThemeProvider>
                <div className="table-container">
                { userData && userData.points &&
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
                        <td>{user.email}</td>
                        <td>{userData.level}</td>
                        <td>{userData.points}</td>
                    </tr>
                    </tbody>


                </table>
                }

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