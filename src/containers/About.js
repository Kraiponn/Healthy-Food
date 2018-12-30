import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {

    return (
        <div className="">
            <Header />
            <div className="container col-md-5">
                <h3>ยินดีต้อนรับครับ</h3>
                <p className="title text-justify">
                    และแล้ววันนี้ก็มาถึง วันที่เพื่อนฝรั่งตาน้ำข้าวมาเยี่ยมเยียนถึงแดนสยาม 
                    เราก็พยายามอย่างสุดความสามารถเพื่อให้เพื่อนฝรั่งได้ประทับใจ 
                    งานนี้ขอร้านปัง ๆ ฝรั่งเห็นละอึ้ง! ทีมงาน Wongnai 
                    เสาะแสวงหาร้านอาหารไทยแท้ ๆ ให้เพื่อนได้รับถึงวัฒนธรรมเราได้อย่างดี 
                    และวันนี้อยากจะขอเสนอ 10 ร้านอาหารไทยต้นตำรับ 
                </p>
                <h4 className="text-success title">
                    จาก เฮลตี้คาเฟ่
                </h4>
            </div>
            <Footer company="ksn-development" email="admin@mail.com" />
        </div>
    )
}

export default About;