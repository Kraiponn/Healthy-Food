import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { ordersFetch, orderDelete } from '../../actions/';
 
class Order extends Component {

    componentDidMount(){
        this.props.ordersFetch();
    }

    delOrder(order){
        this.props.orderDelete(order.id);
    }

    showOrder(){
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderedDate);
            return (
                <div className="col-md-4" key={order.id} >
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm" 
                            onClick={() => this.delOrder(order)} >X</button>
                    </p>
                    <h5 className="title">
                        วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}
                    </h5>
                    <ul>
                        {
                            order.orders && order.orders.map(record => {
                                return (
                                    <li key={record.product.id}>
                                {record.product.productName} ( {record.quantity} set ) = {record.product.unitPrice * record.quantity} THB
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        })
    }


    render(){
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h3 className="title">รายการสั่งซื้อ</h3>
                    <div className="row">
                        {this.showOrder()}
                    </div>
                </div>               
                <Footer />        
            </div>
        )
    }
}

function mapStateToProps({orders}){
    return {orders};
}

export default connect(mapStateToProps, { ordersFetch, orderDelete })(Order);