import  { Component } from 'react'
import  styled  from 'styled-components';

const Div=styled.div`
background-color: #21ba9e;
padding: 80px 150px;
display: flex;
justify-content: space-between;
align-items: center;
p {
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
  }
  input {
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding: 10px;
  }
  input::placeholder {
    font-size: 1rem;
  }
  @media(max-width:768px){
    
    padding: 40px 75px;
    p{
        font-size:1.5rem;

    }
    input {
        width: 150px;
        height: 20px;
    }
    input::placeholder {
        font-size: 0.75rem;
      }
  }
`
export default class Search extends Component {
    constructor(){
        super();
        this.state={
            text:"",
        }
    }
    searchHandler=event=>{
this.setState({
    text :event.target.value,
})
    }
  render() {
    return (
      <Div className='container'>
        <p>Search What you want</p>
        <div>
        <input type='text' value={this.state.text} placeholder="Search ..." onChange={this.searchHandler}/>
        
        <br />
        <br /><span>
            {this.state.text}
        </span>
        </div>
        
      </Div>
    )
  }
}
