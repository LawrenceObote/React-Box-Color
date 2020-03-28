import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'blue',
      clickCounter: 0
    }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color === 'blue' ? 'orange' : 'blue';
    const clicks = this.state.clickCounter
    this.setState({ 
      color: newColor,
      clickCounter: clicks + 1
     });
    
  }

  // onChange = (e) => {
  //   this.setState({
  //     color: 'orange',
  //     clickCounter: this.state.clickCounter++
  //   })
  //   console.log("click counter ===>", this.state.clickCounter)
  // }
  render() {
    return (
      //parent container
      <div className="App">
        <h1>Box color change</h1>
        <div className="colorBox" 
             style={{backgroundColor: 
             this.state.color}}
             onClick={this.changeColor}
        >
          <p>Click Me</p>
        </div>
        <h1>Click Counter: {this.state.clickCounter}</h1>
      </div>
    )
  }
}
