import React, { Component } from 'react';
import Number from './Number';

// 이름앞에 대문자I를 붙여서 interface라는것을 알려줌
interface IState {
  counter:number;
}

class App extends Component<{}, IState> {
  state = {
    counter:0
  };
  
  render (){
    const { counter } = this.state;
    return (
      <div>
        <Number count={counter}/><button onClick={this.add}>Add</button>
      </div>
    );
  };

  add = ():void => {
    this.setState(prev => {
      return{
        counter: prev.counter + 1
      }
    })
  }
}

export default App;
