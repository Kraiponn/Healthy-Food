import React, { Component } from 'react';
import Header from '../components/Header';
import Monitor from '../components/monitor/Monitor';
import Footer from '../components/Footer';
//import axios from 'axios';
import { connect } from 'react-redux';
import { productFetch } from '../actions/';


class Home extends Component {

  /* constructor(props){
    super(props);
    //this.state = {products: ""};
  } */

  componentDidMount(){
     /* this.setState({
        products: [
            {productName: "สลัดผัก", unitPrice: 120, thumbnail: '/images/product/1.jpg'},
            {productName: "ไก่ทอด", unitPrice: 90, thumbnail: '/images/product/2.jpg'},
            {productName: "บิงชู", unitPrice: 200, thumbnail: '/images/product/3.jpg'},
            {productName: "เฟรนฟราย", unitPrice: 140, thumbnail: '/images/product/4.jpg'},
            {productName: "เค้ก 3 ชั้น", unitPrice: 200, thumbnail: '/images/product/5.jpg'},
            {productName: "กาแฟ เฮลตี้ฟู๊ด", unitPrice: 140, thumbnail: '/images/product/6.jpg'}
        ]
    }); 

    fetch("http://localhost:3009/products", {method: "GET"})
    .then(res => res.json())
    .then(res => {this.setState({products: res})})

    axios.get("http://localhost:3010/products")
         .then(res => {
             console.log(res.data);
             this.setState({products: res.data})
         }); */
        
    this.props.productFetch();
  }

  render() {
    return (
      <div className="">
          <Header />
          <Monitor products={this.props.products} />
          <Footer company="ksn-development" email="admin@mail.com" />
      </div>
    );
  }
}

//--- De Constuctor
function mapStateToProps({products}){
  return {products};
}

//--- Normal Solution
/* function mapStateToProps(state){
  console.log(state);
  return {products: state.products};
} */



export default connect(mapStateToProps,{productFetch})(Home);
