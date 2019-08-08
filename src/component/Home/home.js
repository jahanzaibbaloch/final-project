import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './navbar';
import Product from './carousel/carousel';
import CardProduct from './card'
import StickyFooter from './footer';
import CardGroup from 'reactstrap';

 const data = [
   {title:'Uzair', subtitle:'Baloch', text:'123', button:'click'},
   {title:'Uzair', subtitle:'Baloch', text:'123', button:'click'},
   {title:'Uzair', subtitle:'Baloch', text:'123', button:'click'}
 ]


class Home extends React.Component {
 state={
   data
 }
  render() {
    return (
      <div>
        <Mynavbar></Mynavbar>
        <Product></Product>
        <CardGroup>
          <CardProduct card={this.state.data}></CardProduct>
        </CardGroup>
        <StickyFooter></StickyFooter>
      </div>
    )
  }
}

export default Home;