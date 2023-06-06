import { Component } from 'react'
import Humbergermenu from './Components/Humbergermenu';
import Products from './Components/Products';
import Banner from './Components/Banner';
import Search from './Components/Search';
export default class App extends Component {
  render() {
    return (
      <div>
        <Humbergermenu/>
        <Banner/>
        <Search/>
        <Products/>

      </div>
    )
  }
}
