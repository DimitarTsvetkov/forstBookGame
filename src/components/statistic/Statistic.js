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
            user: {},
                    name: '',
                    level: '',
                    point: '',
                    nameArr: [],
                    points: [],
                    levels:[],
                    id:[],
                    animals:'',
                    messages: []

        }
    }
    async componentDidMount() {
        const user = firebase.auth.currentUser;
        console.log('_user ', user)
        const userData = await _firebase.database().ref("users").orderByKey();

        userData.once('value', snap => {
            snap.forEach(child => {
                this.setState({
                    id: this.state.id.concat([child.key]),
                    nameArr: this.state.nameArr.concat([child.val().name]),
                    points: this.state.points.concat([child.val().points]),
                    levels: this.state.levels.concat([child.val().level])
                });


                const postList = this.state.id.map((dataList, index) =>

                        <tr key={index}>
                            <td>{this.state.nameArr[index]}</td>
                            <td>{this.state.levels[index]}</td>
                            <td>{this.state.points[index]}</td>
                        </tr>


                );

                this.setState({
                    post: postList
                });
            });
        });
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
                    <table className='table-responsive' >
                        <thead>
                        <tr>
                            <th>Player</th>
                            <th>Level</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.post}

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