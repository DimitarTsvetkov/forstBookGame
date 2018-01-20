import React, { Component } from 'react';
import CategoryItem from './CategoryItem'
import Api from '../../Api'
import Paper from 'material-ui/Paper';

class CategoryList extends Component {

  constructor(props){
    super(props)
    this.state = {
      title:'',
      description:'',
      items:[]
    }
  }

  componentDidMount () {
    this.loadData()
  }

  changeState = (json) => {
      console.log(json)  
      this.setState({
        title:json.title,
        description:json.description,
        items:json.movies  
      }) 
  }
  loadData = () => {
    Api.get({
      url:'https://facebook.github.io/react-native/movies.json',
      success: this.changeState
    })
  }
  getItems = (items) => {
    if(items.length > 0){
        const cartList = items.map((item, index)=>{
          return (<CategoryItem 
            key={index}
            title={item.title} 
            releaseYear={item.releaseYear}    
          />)

        })
        return cartList
    }
    return <div>There are no results</div>
  }
  render() {
    return (
      <Paper className="CategoryList">
        <div className="list-header">
          <div className="list-title">{this.state.title}</div>
          <div className="list-description">{this.state.description}</div>
        </div>
        {this.getItems(this.state.items)}
      </Paper>
    );
  }
}

export default CategoryList;