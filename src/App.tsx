import React, { Component } from 'react';
import Number from './Number';
import { From, Input } from './input';

// 이름앞에 대문자I를 붙여서 interface라는것을 알려줌
interface IState {
  counter:number;
  name:string;

}

class App extends Component<{}, IState> {
  state = {
    counter:0,
    name:""
  };
  
  render (){
    const { counter, name } = this.state;
    return (
      <div>
        <From onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange}/>
        </From>
        <Number count={counter}/><button onClick={this.add}>Add</button>
      </div>
    );
  };

  onChange = (event:React.SyntheticEvent<HTMLInputElement>):void => {
    console.log(event.target);
  };

  onFormSubmit = (event:React.FormEvent) => {
    event.preventDefault();
  }

  add = ():void => {
    this.setState(prev => {
      return{
        counter: prev.counter + 1
      }
    })
  }
}

export default App;
