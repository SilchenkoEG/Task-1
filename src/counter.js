import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
        this.plusCount = this.plusCount.bind(this);
    }
    
    plusCount() {
        this.state.count +1;
    }
    
    
    render(){
        return (
            <div>
            <button onClick={this.plusCount}>Plus</button>
            <button>Minus</button>
            {count}
            </div>
        )
    }
}
export default Counter;