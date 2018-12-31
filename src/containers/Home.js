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
     /* 
    fetch("http://localhost:3009/products", {method: "GET"})
    .then(res => res.json())
    .then(res => {this.setState({products: res})}) */
        
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
