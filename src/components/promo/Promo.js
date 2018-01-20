import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import promoImage from './promo.jpg' // relative path to image

class Promo extends Component {

  render() {
    return (
      <Paper className="Promo">
        <img src={promoImage} alt={"promo image"}/>
      </Paper>
    );
  }
}

export default Promo;