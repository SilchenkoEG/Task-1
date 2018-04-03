import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';




class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      correctCategory : [],
      filterCategory:[],
      checked: true
      // searchString : ''
    }
  }
  showCategory = (name) => {
    data.map(element => {
      if(element.name === name){
        this.setState({ correctCategory :
        element.children,filterCategory: element.children })
      }})
      console.log(this.state.filterCategory)
  }
  changeSearch = (event) => {
    console.log(isNaN(event.target.value))
    this.setState({filterCategory: 
      this.state.correctCategory.filter(item => item.title.indexOf(event.target.value) !== -1)
     })
  }
  changeCheck = (event) => {
    // console.log(event.target.checked)
    // console.log(event.target.value);
    if(event.target.checked === true){
      this.setState({filterCategory:
        this.state.correctCategory.filter(item => item.color === event.target.value)
      })
    }
    else {
      this.setState({filterCategory: this.state.correctCategory});
    }
  }
  render() {
    let dropDownText;
    if(this.state.filterCategory != []){
      dropDownText = <div>
      {this.state.filterCategory.map(item => { return <p key={item.title} >{item.title} {item.price}</p>} )}
    </div> 
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React</h1>
        </header>
      <div className='filterColor'>
      <p> <input type='checkbox'  value='black' onChange={this.changeCheck}/>Black</p>
      <p><input type='checkbox'  onChange={this.changeCheck} value='white' />White </p>   
      </div>  
        <input 
          type ='text'
          // value = {this.state.searchString} 
          onChange = {this.changeSearch}
        />
        <ul>
          {data.map((category, index)=>{
            return <li key={index} onClick={ () => this.showCategory(category.name)}>{category.name}</li>
          })}
        </ul>
        {dropDownText} 
      </div>
    );
  }
}

export default App;
