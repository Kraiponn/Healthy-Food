import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/product/ProductList';
//import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { productFetch, productDelete } from '../../actions';


class Product extends Component {

    constructor(props){
        super(props);
        //this.state = {products: null};
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentDidMount(){
        this.props.productFetch();
    }

    delProduct(product){
        this.props.productDelete(product.id);
    }


    editProduct(product){
        this.props.history.push("products/edit/" + product.id);
        //console.log(product);
    }


    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="fonr-font-weight-bold">สินค้า</h1>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-success title float-right" 
                                onClick={() => this.props.history.push("products/add")}>เพิ่ม
                            </button>
                        </div>
                    </div>

                    {this.props.products && Array.isArray(this.props.products) && 
                        (<ProductList 
                            products={this.props.products} 
                            onDelProduct={this.delProduct}
                            onEditProduct={this.editProduct} 
                        />)
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return { products: state.products };
}

export default withRouter(connect(mapStateToProps, { productFetch, productDelete })(Product));
