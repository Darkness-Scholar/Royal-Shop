import React from 'react';
import { useRecoilValue } from 'recoil';
import { soon } from './../../Data & State/Data'
function Soon(props) {
    const soonData = useRecoilValue(soon)
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
                                    <img className="img-fluid" src="img/product/p6.jpg" alt="" />
                                    <div className="product-details">
                                        <h6>{value.name}</h6>
                                        <div className="price">
                                            <h6>700000₫</h6>
                                            <h6 className="l-through">{value.price}₫</h6>
                                        </div>
                                        <div className="prd-bottom">
                                            <a href className="social-info">
                                                <span className="ti-bag" />
                                                <p className="hover-text">Thêm vào giỏ</p>
                                            </a>
                                            <a href className="social-info">
                                                <span className="lnr lnr-heart" />
                                                <p className="hover-text">Yêu thích</p>
                                            </a>
                                            <a href className="social-info">
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