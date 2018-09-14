import { Link } from 'react-router-dom';
import React,{Component} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Paper,Tabs,Tab } from 'material-ui';
import {auth, db} from '../../firebase';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import * as firebase from 'firebase';
import { componentDidMount } from 'react-lifecycle-hoc';
import * as Routes from "../constants/Routes";



const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Admin extends Component{

    //Add elements

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            imge: '',
            nameArr: [],
            img: [],
            descriptionArr:[],
            id:[],
            animals:'',
            messages: []
        };



        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleNameChange(event) {
        this.setState({name: event.target.value,});
    }

    handleDescChange(event) {
        this.setState({description: event.target.value,});
    }

    handleImgChange(event) {
        this.setState({imge: event.target.value,});
    }



    handleSubmit(event) {
        const rootRef = firebase.database();
        const post = rootRef.ref('animals');
        var data ={
            name:this.state.name,
            description:this.state.description,
            img:this.state.imge,
        }
        post.push(data);
        event.preventDefault()
    }


// edit

    componentDidMount() {

        const rootRef = firebase.database().ref();
        const post = rootRef.child('animals').orderByKey();


        post.once('value', snap => {
            snap.forEach(child => {
                this.setState({
                    id: this.state.id.concat([child.key]),
                    nameArr: this.state.nameArr.concat([child.val().name]),
                    img: this.state.img.concat([child.val().img]),
                    descriptionArr: this.state.descriptionArr.concat([child.val().description])
                });


                const postList = this.state.id.map((dataList, index) =>
                    <form onSubmit={this.handleRemove.bind(this)}>
                        <div className='row'>
                            <div class="col-md-4 col-lg-4">
                                <h1>{this.state.nameArr[index]}</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div class="col-md-4 col-lg-4">
                                <img src={this.state.img[index]} height={150} />
                            </div>
                            <div class="col-md-8 col-lg-8">
                                <br />
                                {this.state.descriptionArr[index]}
                            </div>
                        </div>
                        <button className="buttonl" type='submit'>
                            <div className="centered">Delete</div>
                        </button>

                    </form>

                );

                this.setState({
                    post: postList
                });
            });
        });
    }
    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        const rootRef = firebase.database().ref();
        const element = rootRef.child('animals').orderByKey();
        element.on('child_removed', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let message = { id: snapshot.key };
            this.setState({ messages: [message].concat(this.state.messages) });
        })
    }

    handleRemove() {
        const rootRef = firebase.database().ref();
        const element = rootRef.child('animals');


        element.on('child_removed', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let message = { id: snapshot.key };
            element.child(message).remove()

        })



    }




    render(){


        return(
            <div className="containerf" >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Име:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                    </label>
                    <label>
                        Снимка:
                        <input type="text" value={this.state.imge} onChange={this.handleImgChange.bind(this)} />
                    </label>
                    <label>
                        Описание:
                        <input type="text" value={this.state.description} onChange={this.handleDescChange.bind(this)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="containerf" >
                    <ul>{this.state.post}</ul>
                </div>

            </div>
        );
    }

}

export default Admin;