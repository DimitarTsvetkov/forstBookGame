import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    marginRight: 20,
    backgroundColor: 'red'
};


class CartAddItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }

    addItem = () => {
        if(this.state.value === '') return

        this.props.addItem({
            label: this.state.value,
            price: 35
        })

        this.setState({
            value:''
        })
    }

    render() {

        return (
            <div>
                <TextField
                    hintText="Item name"
                    floatingLabelText="Add Items to Cart"
                    value={this.state.value}
                    floatingLabelFixed={true}
                    onChange={(e, value) => {
                        this.setState({
                            value
                        })
                    }}

                />
                <FloatingActionButton mini={true} style={style} onClick={this.addItem}>
                        <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default CartAddItem;
