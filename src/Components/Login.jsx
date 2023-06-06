import  { Component } from 'react'
import styled from 'styled-components';
import logo from '../images/logo3.jpg';
import './Login.css';
const Form = styled.form`
position: relative;
z-index: 1;
background: #fff;
max-width: 360px;
margin: 0 auto 200px;
padding: 45px;
text-align: center;
box-shadow: 0 0 20px 0 rgba(0,0,0,.2),0 5px 5px 0 rgba(0,0,0,.24)
select {
    width:175px;
    height: 35px;
}
img{
    width:55px;
    border-radius: 50%;
    padding:20px;
    margin:10px;
    border: #21ba9e solid 1px;

}
input , select{
    font-family: roboto,sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px
}
button {
    font-family: roboto,sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #21ba9e;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #fff;
    font-size: 14px;
    -webkit-transition: all .3 ease;
    transition: all .3 ease;
    cursor: pointer
}
button:hover,.form button:active,.form button:focus {
    background: #dea877;
}
`
export default class Login extends Component {
    constructor(){
    super();
    this.state={
       text:"",
       option:"option0"
    }
    }
    clickHandler =()=>{
        this.setState({})
    }
    chaneHandler=event=>{
this.setState(
    {
        text : event.target.value
    }
)}
selectHandler  = event => {
    this.setState({
        option : event.target.value
    })
}
submitHandler =event=>{
event.preventDefault();
}
  render() {
    const {text, option}=this.state;
    return (
        <>
      <Form onSubmit={this.submitHandler}>
      <img src={logo} alt='logo'/>
        <select value={option} onChange={this.selectHandler}>
        <option value="option0">select your name:</option>
            <option value="option1">fateme</option>
            <option value="option2">ali</option>
            <option value="option3">zahra</option>
            <option value="option4">marym</option>
        </select>
        <input type="text" value={text} onChange={this.chaneHandler} placeholder='enter password'/>
        <button onClick={this.clickHandler} >
Submit       
 </button>
      </Form>
      </>
    )
  }
}
