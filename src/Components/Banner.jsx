import { Component } from 'react'
import styled from "styled-components";
import banner from "../images/Sevin1.jpg"
const MyDiv=styled.div`
width: 100%;
position: relative;
img {
    width: 100%;
  }
  .textContainer {
    position: absolute;
    top: 75px;
    left: 100px;
  }
  
  .textContainer h1 {
    font-size: 6rem;
    color: #21ba9e;
  }
  
  .textContainer p {
    font-size: 3rem;
    margin-top: 20px;
    color: #21ba9e;
  }
  
  .textContainer span {
    color: #dea887;
    font-weight: bold;
    font-size: 2rem;

  }
  @media(max-width:768px){
    .textContainer {
        position: absolute;
        top: 25px;
        left: 50px;
      }
      
    .textContainer h1 {
        font-size:2rem;

    }
    .textContainer p {
        font-size:1.5rem;

    }
    .textContainer span {
        font-size:1rem;

    }
}
  
`

export default class Banner extends Component {
  render() {
    return (
      <MyDiv className='container'>
        <img src={banner} alt="banner" />
            <div className='textContainer'>
                <h1>Fakhar Group</h1>
                <p>
                   Tile and Ceramic  
                </p>
                <span>Customer Panel</span>
            </div>

      </MyDiv>
    )
  }
}
