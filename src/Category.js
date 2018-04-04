import React, { Component } from 'react'
import data from './data.json'

class Category extends Component {
  constructor (props){
    super(props);
    this.state = {
      filterNameCategory:'',
      filterColor:['black', 'white'],
      filterName:'',
    }    
  }
  // showCategory = (name) => {
  //   data.map(element => {
  //     if(element.name === name){
  //       this.setState({ correctCategory :
  //       element.children,filterCategory: element.children })
  //     }})
  // }
  showCategory = (name) => {
    this.setState({ filterNameCategory : name});
  }
  changeSearch = (event) => {
    this.setState({ filterName: event.target.value })
  }
  changeCheck = (event) => {
    if(event.target.checked){
      const joined = this.state.filterColor.slice()
      joined.push(event.target.value);
      this.setState({filterColor : joined })
    }
    else{
      const joined = this.state.filterColor;
      joined.splice(joined.indexOf(event.target.value),1)
      this.setState({filterColor : joined})
    }
  }
  render() {
    return (
      <div className="App">
        <div className='filterColor'>
          <p><input type='checkbox' value='black' checked={this.state.filterColor.includes('black')} onChange={this.changeCheck} />Black</p>
          <p><input type='checkbox' value='white' checked={this.state.filterColor.includes('white')} onChange={this.changeCheck} />White </p>   
        </div>  
        <input type ='text' value = {this.state.filterName} onChange = {this.changeSearch}/>
        <ul>
          {data.map((category)=>{ return <li key={category.name} onClick={ () => this.showCategory(category.name)}>{category.name}</li> })}
        </ul>
        { this.state.filterNameCategory !== '' && data.filter(item => item.name === this.state.filterNameCategory).map(item => item.children).reduce((a,b) => a.concat(b))
          .filter((product)=> this.state.filterColor.includes(product.color))
          .filter( item => item.title.indexOf(this.state.filterName) !== -1)
          .map((item,index) =>  <p key={index} >{item.title} {item.price} {item.color}</p> )}
         </div> 
    );
  }
}
  
  export default Category;