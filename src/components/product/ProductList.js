import React, {Component} from 'react';
import ProductItem from "./ProductItem";

class ProductList extends Component {
 ////<ProductItem key={i} productName={product.productName} unitPrice={product.unitPrice} thumbnail={product.thumbnail} />
    ShowProducts() {
        if(this.props.products && Array.isArray(this.props.products)){
            return (
                this.props.products && 
                this.props.products.map((product, pId) => {
                    return (
                        <ProductItem key={pId} 
                            product={product} 
                            onAddOrder={this.props.onAddOrder}  
                            onDelProduct={this.props.onDelProduct}
                            onEditProduct={this.props.onEditProduct}
                        />
                    )
                })
            )
        }
    }

    render(){
        return (
            <div className="row">
            {this.ShowProducts()}
            </div>
        )
    }
}

export default ProductList;