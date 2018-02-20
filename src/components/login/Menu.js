
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
            <div className="row">
                <div className="col-lg-3"/>
                <div className="col-lg-6" >
            <div>
                <MuiThemeProvider>
                    <div className="screen">
                    <div className="row">
                        <div className="col-lg-3"/>
                        <div className="col-lg-6">

                        <AppBar
                            title="Forest book"
                            showMenuIconButton={false}

                        />
                        <RaisedButton
                            label="Load the game"
                            primary={true}
                            style={style}
                            containerElement={<Link className="HeaderLink" to="/">Home</Link>}
                            onClick={(event) => this.handleClick(event)}/>
                        <br/>
                        <RaisedButton
                            label="Statistic"
                            primary={true}
                            style={style}
                            containerElement={<Link className="HeaderLink" to="/">Home</Link>}
                            onClick={(event) => this.handleClick(event)}/>
                        <br/>
                        <RaisedButton
                            label="Book of animals"
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