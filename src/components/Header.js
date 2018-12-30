import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timeID = setInterval(() => {
            this.Tick();
        }, 1000);
    }

    componentWillMount(){
        clearInterval(this.timeID);
    }

    Tick(){
        this.setState({date: new Date()});
    }

    render() {
        const styles = {height: 70};

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success">
                            <img style={styles} src="/images/logo/logo.png" alt="" />
                             เฮลตี้ คาเฟ้
                        </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="mt-3 text-muted">{this.state.date.toLocaleTimeString()}</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item title">
                                <Link className="text-success" to="/">หน้าหลัก</Link>
                            </li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title">
                                <Link className="text-success" to="/order">รายการสั่งซื้อ</Link>
                            </li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title">
                                <Link className="text-success" to="/products">สินค้า</Link>
                            </li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title">
                                <Link className="text-success" to="/about">เกี่ยวกับเรา</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;