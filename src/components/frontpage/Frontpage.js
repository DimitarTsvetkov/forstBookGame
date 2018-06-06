
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
                    <div className="col-md-6">
            <img className="logoimg"

                 src={require("../../assets/forestbook1.png")}

            />      </div>
                        <div className="col-md-6">


                            <div className="textscreen" >
                                <h1>ForestBook</h1>
                                <p> е образователна игра, съчетаваща знанието и забавата в едно.
                                Ако обичате животните и искате да научите повече за тях, за начина им на живот
                                    и навиците им, но също така харесвате интересни и приятни игри, заповядайне
                                    в нашия див свят изпълнен с приключения.</p>
                            </div>
                        </div>

                    </div>


            </div>


                    );
    }

}

export default Frontpage;