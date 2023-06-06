import { Component } from 'react'
import Product from './Product';
import  styled from 'styled-components';
import {v4} from 'uuid'
import Adorn from "../images/Adorn1.jpg";
import Aker from "../images/Aker1.jpg";
import Calcutta from "../images/Calcutta1.jpg";
import Cameron from "../images/cameron1.jpg";
const Div=styled.div`

    display: flex;
    justify-content: space-around;
    margin: 60px 0 60px;
  
`
export default class Products extends Component {
  constructor(){
    super();
    this.state ={
      TileData:[
        {id:1,image:Adorn ,name:"Adorn" ,size:"30 x 90" ,type:"Glossy", cost:"50$"},
        {id:2,image:Aker, name:"Aker", size:"90 x 180" ,type:"Matt", cost:"100$"},
        {id:3,image:Calcutta, name:"Calcutta", size:"75 x 150", type:"Polished", cost:"100$"},
        {id:4,image:Cameron, name:"Cameron", size:"90 x 180", type:"Matt", cost:"100$"},
      ]
    }
  }
  render() {
    return (
      <Div className='container'>
        {/* <Product image={Adorn} name="Adorn" size="30 x 90" type="Glossy" cost="100$"/>
        <Product image={Aker} name="Aker" size="90 x 180" type="Matt" cost="100$"/>
        <Product image={Calcutta} name="Calcutta" size="75 x 150" type="Polished" cost="100$"/>
        <Product image={Cameron} name="Cameron" size="90 x 180" type="Matt" cost="100$"/> */}
        {this.state.TileData.map(tile=> <Product key={v4()} image={tile.image} name={tile.name} size={tile.size} type={tile.type} cost={tile.cost} />)}
      </Div>
    );
  }
} 