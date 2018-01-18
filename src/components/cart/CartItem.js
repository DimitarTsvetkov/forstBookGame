import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';


class Item extends Component {

    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-6">
                        <span className="cart-item-label">{this.props.label}</span>
                    </div>
                    <div className="col-md-3">
                        <span className="cart-item-price">{this.props.price}</span>
                    </div>
                    <div className="col-md-3">
                        <FloatingActionButton mini={true} backgroundColor='grey'  onClick={() => {
                            this.props.removeItem(this.props.id)
                        }}>
                            <ContentClear />
                        </FloatingActionButton>

                    </div>
                </div>


            </li>
        );
    }
}

export default Item;
