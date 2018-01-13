import React, { Component } from 'react';
class ItemInput extends Component {

  render() {

    let input;

    return (
      <div className="input-group cart-input">
          <input className="form-control" ref={ (node) => {
            input = node
          }}/>
          <span className="input-group-btn">
          <button type="button" className="btn btn-success" onClick={()=>{
            this.props.addItem({
              label:input.value,
              price:35
            })
            input.value = ''
          }}>
          <span className="glyphicon glyphicon-plus"></span>
          </button>
          </span>
      </div>
    );
  }
}

export default ItemInput;
