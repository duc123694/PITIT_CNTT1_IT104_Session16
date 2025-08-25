import React, { Component } from 'react'
interface State {
    count:number
}
export default class EX4 extends Component <object,State> {
    constructor (props:object){
        super(props);
    this.state = {
        count:0,
    }
    }
    handleClick = () => {
        this.setState((prevState) =>({
            count: prevState.count+1,
        }))
    }
  render() {
    return (
      <div>
        <h2>Bạn đã click số lần {this.state.count}</h2>
        <button onClick={this.handleClick}  style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",}}>Click me</button>
      </div>
    )
  }
}
