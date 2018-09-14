import React from 'react';
import img from './woodsign.png';
import { auth } from '../firebase';

const SignOutButton = () =>
    <button
        type="button"
        onClick={auth.doSignOut}
    ><img src={require("./woodsign.png")}
          width="230"
          height="80" >
    </img>
        <div className="centered">Exit</div>
    </button>

export default SignOutButton;