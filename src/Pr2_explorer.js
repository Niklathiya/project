import React, { Component } from 'react';
import Pr2_function from './Pr2_function.js';

class Pr2 extends Component {
  constructor(props) {
    super(props);
    this.state = {hour : 0, minute : 0, second : 0};
  }

  componentDidMount()
  {
    this.timerId = setInterval(
      () => this.timer(),
      1000 
    );
  }

  componentWillUnmount()
  {
    clearInterval(this.timerId);
  }

  timer()
  {
    this.setState(prevState =>{
      const {hour, minute, second} = prevState;
      let newSecond = second + 1;
      let newMinute = minute;
      let newHour = hour;

      if(newSecond == 59){
        newSecond = 0;
        newMinute = minute + 1;
      }
      if(newMinute == 59){
        newMinute = 0;
        newHour = hour + 1;
      }
      return {
        hour : newHour,
        minute : newMinute,
        second : newSecond
      }
    })
  }

  render() {
    const {hour, minute, second} = this.state;
    return (
      <div>
        <h2>Timer with class</h2>    
        <h3>{hour}:{minute}:{second}</h3>  
        <Pr2_function/>
      </div>
    )
  }
}


export default Pr2