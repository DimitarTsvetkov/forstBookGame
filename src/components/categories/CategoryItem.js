import React, {Component} from 'react';

class CategoryItem extends Component {

    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-6">
                    {this.props.title}
                    </div>
                    <div className="col-md-6">
                    {this.props.releaseYear}
                    </div>
                </div>
            </li>
        );
    }
}

export default CategoryItem;
