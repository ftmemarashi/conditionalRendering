import { Component }  from 'react';
import styled from 'styled-components';
import down from "../images/down.svg";
import up from "../images/up.svg";

const Div=styled.div `
margin: 10px;
background-color: #ececec;
border-radius: 10px;
overflow: hidden;
box-shadow: 5px 5px 10px rgb(188, 204, 200);
  
 img {
    width: 300px;
    height: 200px;

  }
img:hover {
    opacity: 0.6;
    transition: all .3s linear;
  }
p {
  margin: 30px 20px 20px;
  background-color: rgb(145, 10, 33);
  width: fit-content;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
}
  h3 {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 28px;
    margin: 30px 20px 20px;
    color: #696969;

  }
  h4 , span {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 100;
    font-size: 20px;
    margin: 30px 20px 20px;
    color: #696969;
  }
  
.counter {
    display: flex;
    align-items: center;
    border-top: 1px silver solid;
  }
  .counter img{
    width:20px;
    height:20px;
    margin:20px;
    cursor: pointer;
  }
  .counter span {
    background-color: rgb(68, 223, 189);
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
  }


`
export default class product extends Component {
  constructor(){
    super();
    this.state={
      counter:0,
    }
  }
  downHandler=()=>{
    if(this.state.counter >=1){
      this.setState(prevState=>({
        counter:prevState.counter -1,
            }))
    }
   
  }
  upHandler=()=>{
    this.setState(nextState=>({
      counter:nextState.counter +1,
    }))
  }
  render() {
    const {image , name , size , type ,cost}=this.props;
    const {counter}=this.state;
    return (
        <>
<Div className='container'>
<img src={image} alt="product image" />
<h3>
    {name}
</h3>
<h4>
    {size}
</h4>
<span> 
  {cost} {counter ? `*${counter}=${counter *Number(cost.split("  ")[0])} $`:"" }
</span>
<p>
    {type}
</p>

<div className="counter">
<img src={down} alt="arrow"  onClick={this.downHandler}/>
<span>
    {counter}
</span>
<img src={up} alt="arrow"  onClick={this.upHandler} />
</div>
</Div>
        </>
    )
  }
}
