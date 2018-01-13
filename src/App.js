import React, { Component } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      header:'My Header'
    }
  }

  componentDidMount = () => {
    this.setState({
      header:'new header'
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Header header={this.state.header}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-5">
              <Cart/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
