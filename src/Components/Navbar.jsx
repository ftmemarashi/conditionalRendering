import styled from 'styled-components';

const Ul = styled.ul`
list-style:none;
display:flex;
justify-content:none;
margin: 20px 50px;
z-index:15;
background:#21ba9e;
font-family: sans-serif;
li{
  padding:18px 30px;
  color:#fff;
}
@media (max-width:768px){
  margin:0;
  flex-direction: column;
  background:#dea877;
  position:fixed;
  transition:all 0.3s linear;
  transform: ${props=>props.open ? 'translateX(0)':'translateX(100%)'};
  top:0;
  right:0;
  height:100vh;
  width:300px;
  padding-top:3.5rem; 
  li{ 
    padding:18px 30px;
    color:#fff;
  }
}
`
const Navbar=({ open })=>{
      return (
        <div>
<Ul open={open}  className='list'>
  <li>
    Home
  </li>
  <li> 
    Product
    {/* <ul>
    <li>
      size 60x60
    </li>
    <li>
      size 80x80
    </li>
    <li>
      size 100x100
    </li>
    </ul> */}
  </li>
  <li>
About Us
  </li>
  <li>
Contact Us
  </li>
</Ul>
        </div>
    )
  }

export default  Navbar