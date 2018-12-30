import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NotFound = () => {

    return (
        <div>
            <Header />
            <div className="container col-md-8 text-center">
                <h1 className="mt-5" style={{fontSize: 120}} >404</h1>
                <h2 className="mb-4">Not Found</h2>
                <p className="mb-4">
                    ขออภัยไม่พบหน้าที่ค้นค้นหา ดูเหมือนว่าหน้าที่คุณกำลังค้นหาไม่มีอยู่หรือมีการเปลี่ยนแปลง URL
                </p>
            </div>    
            <Footer />
        </div>
    )
}

export default NotFound;