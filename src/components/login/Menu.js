
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component}  from 'react';
import { Link } from 'react-router-dom'


const style = {
    margin: 15,
};

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
            <div>
                <MuiThemeProvider>
                    <div class="row">
                        <div class="col-lg-3"></div>
                        <div class="col-lg-6">

                        <AppBar
                            title="Forest book"
                        />
                        <RaisedButton
                            label="Play"
                            primary={true}
                            style={style}
                            containerElement={<Link className="HeaderLink" to="/">Home</Link>}
                            onClick={(event) => this.handleClick(event)}/>
                        <br/>
                        <RaisedButton
                            label="Animal book"
                            primary={true}
                            style={style}
                            containerElement={<Link className="HeaderLink" to="/">Home</Link>}
                            onClick={(event) => this.handleClick(event)}/>
                        <br/>
                        <RaisedButton
                            label="Exit"
                            primary={true}
                            style={style}
                            containerElement={<Link className="HeaderLink" to="/">Home</Link>}
                            onClick={(event) => this.handleClick(event)}/>
                        </div>
                        <div class="col-lg-3"></div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default Menu;