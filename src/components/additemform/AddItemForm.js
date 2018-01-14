import React, { Component } from 'react';
class AddItemForm extends Component {
  render() {
    let input;

    return (
      <div className="Cart">
        <input ref={node => {
          input = node;
        }}/>
        <button onClick={() => {
          this.props.addItem(input.value, 20)  
        }}/>
      </div>
    );
  }
}

export default AddItemForm;
