import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import {useRecoilState} from 'recoil'
import { cart, addToCart } from './../../Data & State/Cart';
function Banner(props) {
    const [thiscart, setThiscart] = useRecoilState(cart);
    const handleAddToCart = (item) => {
        const newCart = addToCart(thiscart, item);
        setThiscart(newCart);
        
    }
    const bannerImg1 = "https://lh3.googleusercontent.com/fife/ABSRlIpjvUW4yK3H_CAL9knmERecCfdqnDgj8EWa3eTx5TU9odjPPTlgc3oS3iUjlyX3-86_Of6Zs5EqSj7aPRsmyfdovkp75-36y3HBb9x-GP6YCmeDUni5jooom7VjgBAjbcsj1e1_iNAVRqywF_4yloJj6MaykwYUPcfa1WHwvD7jj6sXjNWjst-_gfO9oA4ymHvGw9Ki66EE7ckc9Xa5HviCEdTN3BFZqC8IQgdtEKIeZnBrzyox_dk7BD_PE_nChPM04Czg7EFVPIVo73hdL3BoCYyYDeBbMguBS9zfs0RjlAgQeJ4qODCojLowEHrB4Ar-goZaV4oaZ8RtiA4w1vq_bFP6wylWDtdkUDjiLumrcQqNRa0B5QF1BN_r20RsaZAkev_3_LmkkBW3t6n2pK25_6uMGszrc8SCmja1FJrE-1UxpmwmAGIP2HER2050Wjh1b1jA2guXTkEqgc6G_u12G-fTv0ftvqA_LsyqV8J5VqseQwOLjUlsAHW7_LAw1VVkuxoRFeZ6Phh4k4nEV56FivwTxVuXWkxySwNeU_gfXtTuzxu9aPqk85Sd8vof7PXuxQJn2bMJDNTMu9j1T11fMsbVFoL1HAuUJaZT-aJkgck7INqhfjbIAT8oWV_Six6kHj4FdInHIgIUadeTYOUo0B0v0HDvoYyWPTQNY0c3-RyEa_qyt5wsL5bAuSpb1g_fpcpxZKCM14PueMmM_O4ew5QPXom_NDYPYK_L-bMGfqAQTLY?authuser=0"
    const bannerImg2 = "https://lh3.googleusercontent.com/fife/ABSRlIpjvUW4yK3H_CAL9knmERecCfdqnDgj8EWa3eTx5TU9odjPPTlgc3oS3iUjlyX3-86_Of6Zs5EqSj7aPRsmyfdovkp75-36y3HBb9x-GP6YCmeDUni5jooom7VjgBAjbcsj1e1_iNAVRqywF_4yloJj6MaykwYUPcfa1WHwvD7jj6sXjNWjst-_gfO9oA4ymHvGw9Ki66EE7ckc9Xa5HviCEdTN3BFZqC8IQgdtEKIeZnBrzyox_dk7BD_PE_nChPM04Czg7EFVPIVo73hdL3BoCYyYDeBbMguBS9zfs0RjlAgQeJ4qODCojLowEHrB4Ar-goZaV4oaZ8RtiA4w1vq_bFP6wylWDtdkUDjiLumrcQqNRa0B5QF1BN_r20RsaZAkev_3_LmkkBW3t6n2pK25_6uMGszrc8SCmja1FJrE-1UxpmwmAGIP2HER2050Wjh1b1jA2guXTkEqgc6G_u12G-fTv0ftvqA_LsyqV8J5VqseQwOLjUlsAHW7_LAw1VVkuxoRFeZ6Phh4k4nEV56FivwTxVuXWkxySwNeU_gfXtTuzxu9aPqk85Sd8vof7PXuxQJn2bMJDNTMu9j1T11fMsbVFoL1HAuUJaZT-aJkgck7INqhfjbIAT8oWV_Six6kHj4FdInHIgIUadeTYOUo0B0v0HDvoYyWPTQNY0c3-RyEa_qyt5wsL5bAuSpb1g_fpcpxZKCM14PueMmM_O4ew5QPXom_NDYPYK_L-bMGfqAQTLY?authuser=0"
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
                                        <h1>TITLE1 <br />SOME TEXT</h1>
                                        <p>Sản phẩm này rất đẹp nhưng tôi tin chắc bạn không đủ tiền mua nó đâu, Hehe. Xin cảm ơn!!!</p>
                                        <div className="add-bag d-flex align-items-center">
                                            <a className="add-btn" type="button" href="#" onClick={() => handleAddToCart({id: 1, name: "San Pham X", quantity: 1})}><span className="lnr lnr-cross" /></a>
                                            <span className="add-text text-uppercase">Thêm vào giỏ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src={bannerImg1} alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* single-slide */}
                            <div className="row single-slide">
                                <div className="col-lg-5">
                                    <div className="banner-content">
                                        <h1>TITLE2 <br />SOME TEXT</h1>
                                        <p>Sản phẩm này rất đẹp nhưng tôi tin chắc bạn không đủ tiền mua nó đâu, Hehe. Xin cảm ơn!!!.</p>
                                        <div className="add-bag d-flex align-items-center">
                                            <a className="add-btn" type="button" href="#" onClick={() => handleAddToCart({id: 1, name: "San Pham X", quantity: 1})}><span className="lnr lnr-cross" /></a>
                                            <span className="add-text text-uppercase">Thêm vào giỏ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src={bannerImg2} alt="" />
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