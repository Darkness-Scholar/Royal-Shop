import React from 'react';

function Features(props) {
    return (
        <section className="features-area section_gap">
            <div className="container">
                <div className="row features-inner">
                    {/* single features */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-features">
                            <div className="f-icon">
                                <img src="img/features/f-icon1.png" alt="" />
                            </div>
                            <h6>Free Ship</h6>
                            <p>Free Ship khi đạt mức quy định</p>
                        </div>
                    </div>
                    {/* single features */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-features">
                            <div className="f-icon">
                                <img src="img/features/f-icon2.png" alt="" />
                            </div>
                            <h6>Đổi Trả</h6>
                            <p>Đổi trả với mọi mặt hàng</p>
                        </div>
                    </div>
                    {/* single features */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-features">
                            <div className="f-icon">
                                <img src="img/features/f-icon3.png" alt="" />
                            </div>
                            <h6>Hỗ Trợ 24/7</h6>
                            <p>Sẵn sàng lắng nghe bất cứ lúc nào</p>
                        </div>
                    </div>
                    {/* single features */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-features">
                            <div className="f-icon">
                                <img src="img/features/f-icon4.png" alt="" />
                            </div>
                            <h6>Thanh toán</h6>
                            <p>Thanh toán nhanh và tiện</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;