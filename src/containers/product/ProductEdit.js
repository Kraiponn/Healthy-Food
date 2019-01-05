import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productCreate, productUpdate, productFetchById } from '../../actions';
import Header from '../../components/Header';
import ProductForm from '../../components/product/ProductForm';
import Footer from '../../components/Footer';

//86292957615

class ProductEdit extends Component {

    componentDidMount(){
        if(this.props.match.params.id){
            this.props.productFetchById(this.props.match.params.id);
        }
    }

    createNewProduct(product){
        console.log("submit " + product);
        //productUpdate(products.id, product) ;
    }

    render() {
        const { formValues, match, products, productCreate, productUpdate } = this.props;
        //console.log(match);

        return(
            <div>
                <Header />
                <div className="container col-md-5">
                {match.path.indexOf("add") > 0 && (
                    <div>
                        <h1 className="title">เพิ่มสินค้า</h1>
                        {products.saved && (
                            <div className="alert alert-secondary title" role="alert">
                                {products.msg}
                            </div>
                        )
                        }
                     
                        <ProductForm onProductSubmit={() => productCreate(formValues)} />
                    </div>
                )}

                {match.path.indexOf("edit") > 0 && (
                    <div>
                        <h1 className="title">แก้ไขสินค้า</h1>
                        {products.saved && (
                            <div className="alert alert-secondary title" role="alert">
                                {products.msg}
                            </div>
                        )
                        }
                        <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
                    </div>
                )}
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ form, products }) => {
    //console.log("Hello ",products);
    return { formValues: form.productForm ? form.productForm.values : null, products };
}

export default connect(mapStateToProps, { productCreate, productUpdate, productFetchById })(ProductEdit);