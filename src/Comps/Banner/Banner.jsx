import React from 'react';
import {useRecoilState} from 'recoil'
import { cart, addToCart } from './../../Data & State/Cart';
function Banner(props) {
    const [thiscart, setThiscart] = useRecoilState(cart);
    const handleAddToCart = (item) => {
        const newCart = addToCart(thiscart, item);
        setThiscart(newCart);
        
    }
    return (
        <section className="banner-area">
            <div className="container">
                <div className="row fullscreen align-items-center justify-content-start">
                    <div className="col-lg-12">
                        <div className="active-banner-slider owl-carousel">
                            {/* single-slide */}
                            <div className="row single-slide align-items-center d-flex">
                                <div className="col-lg-5 col-md-6">
                                    <div className="banner-content">
                                        <h1>TITLE <br />SOME TEXT</h1>
                                        <p>Sản phẩm này rất đẹp nhưng tôi tin chắc bạn không đủ tiền mua nó đâu, Hehe. Xin cảm ơn!!!</p>
                                        <div className="add-bag d-flex align-items-center">
                                            <a className="add-btn" type="button" href={true} onClick={() => handleAddToCart({id: 1, name: "San Pham X", quantity: 1})}><span className="lnr lnr-cross" /></a>
                                            <span className="add-text text-uppercase">Thêm vào giỏ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src="img/banner/banner-img.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* single-slide */}
                            <div className="row single-slide">
                                <div className="col-lg-5">
                                    <div className="banner-content">
                                        <h1>TITLE <br />SOME TEXT</h1>
                                        <p>Sản phẩm này rất đẹp nhưng tôi tin chắc bạn không đủ tiền mua nó đâu, Hehe. Xin cảm ơn!!!.</p>
                                        <div className="add-bag d-flex align-items-center">
                                            <a className="add-btn" type="button" href={true} onClick={() => handleAddToCart({id: 1, name: "San Pham X", quantity: 1})}><span className="lnr lnr-cross" /></a>
                                            <span className="add-text text-uppercase">Thêm vào giỏ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src="img/banner/banner-img.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;