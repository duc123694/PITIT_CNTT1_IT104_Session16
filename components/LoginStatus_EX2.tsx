import React, { Component } from 'react'
interface State {
    isLoggedIn:boolean;
}
export default class LoginStatus extends Component <object,State>{
    constructor (props:object){
        super(props);
    this.state = {
        isLoggedIn:false
    }
}
    toggleLogin = () =>{
        this.setState((prevState) =>({
            isLoggedIn:!prevState.isLoggedIn,
        }))
}
  render() {
    return (
      <div>
      <h2>{this.state.isLoggedIn ?"Xin chào User!" :"Vui lòng đăng nhập để tiếp tuc"}</h2>
      <button onClick={this.toggleLogin} 
      style={{
        marginTop:"20px",
        padding:"10px 20px",
        borderRadius:"10px",
        cursor:"pointer",
        backgroundColor: this.state.isLoggedIn ? "#ff4d4f" : "#4CAF50",
        color: "white",
      }}>
        {this.state.isLoggedIn ?"Đăng xuất" :"Đăng nhập"}
      </button>

      </div>
    )
  }
}
