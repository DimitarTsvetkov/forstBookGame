import React,{Component} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {lightGreen900} from "material-ui/styles/colors";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

const style ={
    backgroundImage: "src/components/login/img/desk_wooden.jpg"
}

class About extends Component{

    render(){
        return(
            <body >

            <div className="row">
                <div className="col-lg-3"/>
                <div className="col-lg-6" >
                <div className="screenabout" >
                    <h2 className="textcenter">Покана за експедиция</h2>

                    <p> Уважаеми изследователю,</p>

                    <p> Вашата мисия, в случай, че решите да я приемете, е да помогнете за откриването на данни
                        за отдавна изчезнали животни.</p>
                    <p> Ще бъдете изпратен на тайна локация.
                        Чрез наблюдение и проучване на видовете животни, намиращи се
                        там, ще съберете информация за тях, а заедно с това и улики водещи до един от изчезналите видове.
                    </p>
                    <p> За да изпълните тази задача ще ви бъде предоставена карта, която да следвате, за да откриете животните.
                    </p>

                    <p>
                        Бъдете внимателен! За да откриете изчезналото животно, трябва да намерите всички следи водещи към него!
                        Уликите и информацията ще получите, ако изиграете игра, съпътстваща всеки от проучваните индивиди.
                    </p>
                    <p> Пожелавам Ви успешно проучванe! </p>
                    <p>Професор Смит </p>



                </div>
                </div>
                <div className="col-lg-3">
                    <Link className="ButtonLink" to="/menu">
                        <button className="button">
                            <img src={require("./woodsign.png")}
                                 width="150"
                                 height="80"
                                 onClick={(event) => this.handleClick(event)}>
                            </img>
                            <div className="centered">Back</div>
                        </button>
                    </Link>
                </div>


            </div>
            </body>
        );
    }

}
export default About;