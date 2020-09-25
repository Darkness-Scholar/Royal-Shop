import React from 'react';
import { useRecoilValue } from 'recoil';
import { latest } from './../../Data & State/Data'
function Latest(props) {
    const latestData = useRecoilValue(latest)
    return (
        <div className="single-product-slider">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>Mới Nhất</h1>
                            <p>Tổng hợp tất cả các sản phẩm vừa ra mắt tại website.</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {latestData.map((value, index) => {
                        return (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="single-product">
                                    <img className="img-fluid" src="img/product/p1.jpg" alt="" />
                                    <div className="product-details">
                                        <h6>{value.name}</h6>
                                        <div className="price">
                                            <h6>500000₫</h6>
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

export default Latest;