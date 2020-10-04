import React from 'react';
import { useRecoilValue } from 'recoil';
import { soon } from './../../Data & State/Data'
function Soon(props) {
    const soonData = useRecoilValue(soon)
    const anh = "https://lh3.googleusercontent.com/SURbVZR-iZ40qHFNPok3SKhAwbE_avwg4Q1pR80BDJBd5Ukp-kcbMPuWkNO0J2WFEE7x2d1JeHVDc03Rrf1EGulzmigEPII1BByqd1zBSERTEdPuLln7y5hsLlA6Z0rqGNCnLePlQuJ5wNkeYfHO4Q2DZLxL8nkricMaqZJsF5fpyIL4wCi3FWzgorDWLozC_6rYdhYTfRxY_XbbUJmQJhF1yUlGCaWZGVLRguoid7OOtJMqHcibPiEx7NIyLm0oHVhZlXmUW32bJKnkyXuE9icoUZ_aRzhoiM3vc-MXbgA2kWmXe6RahZLaP9fmpOeLZ6fcyUm6XjddnQ1MbhnXK1rnoBNyerrWmZfE7tFBQmIpTf6Z0ImbetuBrQm6IKWbmnmT2ZOlxCfgYyO5QhY-5nARx5IDZihGCzD9373VI8QIvrpNWONEcFVcbH4k9zJOq9hIR8L96-239D00qE0Zju5e7ztdvpXGeGfiRohE9AmcVAR-JmWWYrXQuZBXlbOKF08sTYxQLWhsLKbO8BKdb8pSWPHnHgBoE64CieJi7Vjdv1D7ntNVqsIMQ_3dVd-b7D_eOQ8Cuj4O1yjbY-SxnbC9onKJ4U0xNbrCA7BoWzmb0mYG8VxHas9E-Pn9ddfUTMuJNS3LTOpMjQev3FQ-sWwTMyq5JHvlflQwRQyqD66UyfH-SC3uNWp5ZMiHXw=w263-h280-no?authuser=0"
    return (
        <div className="single-product-slider">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>Sắp Ra Mắt</h1>
                            <p>Tổng hợp tất cả các sản phẩm sắp ra mắt tại website.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {soonData.map((value, index) => {
                        return (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="single-product">
                                    <img className="img-fluid" src={anh} alt="" />
                                    <div className="product-details">
                                        <h6>{value.name}</h6>
                                        <div className="price">
                                            <h6>700000₫</h6>
                                            <h6 className="l-through">{value.price}₫</h6>
                                        </div>
                                        <div className="prd-bottom">
                                            <a href={"#"} className="social-info">
                                                <span className="ti-bag" />
                                                <p className="hover-text">Thêm vào giỏ</p>
                                            </a>
                                            <a href={"#"} className="social-info">
                                                <span className="lnr lnr-heart" />
                                                <p className="hover-text">Yêu thích</p>
                                            </a>
                                            <a href={"#"} className="social-info">
                                                <span className="lnr lnr-move" />
                                                <p className="hover-text">Xem thêm</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Soon;