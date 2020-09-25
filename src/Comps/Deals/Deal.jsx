import React from 'react';

function Deals(props) {
  return (
    <section className="exclusive-deal-area">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 no-padding exclusive-left">
            <div className="row clock_sec clockdiv" id="clockdiv">
              <div className="col-lg-12">
                <h1>Giảm giá cực sốc!</h1>
                <p>Nhanh chân mua ngay nào.</p>
              </div>
              <div className="col-lg-12">
                <div className="row clock-wrap">

                </div>
              </div>
            </div>
            <a href className="primary-btn">Mua ngay</a>
          </div>
          <div className="col-lg-6 no-padding exclusive-right">
            <div className="active-exclusive-product-slider">
              {/* single exclusive carousel */}
              <div className="single-exclusive-slider">
                <img className="img-fluid" src="img/product/e-p1.png" alt="" />
                <div className="product-details">
                  <div className="price">
                    <h6>3299000₫</h6>
                    <h6 className="l-through">4499000₫</h6>
                  </div>
                  <h4>addidas New Hammer Sports</h4>
                  <div className="add-bag d-flex align-items-center justify-content-center">
                    <a className="add-btn" href><span className="ti-bag" /></a>
                    <span className="add-text text-uppercase">Thêm vào giỏ</span>
                  </div>
                </div>
              </div>
              {/* single exclusive carousel */}
              <div className="single-exclusive-slider">
                <img className="img-fluid" src="img/product/e-p1.png" alt="" />
                <div className="product-details">
                  <div className="price">
                    <h6>3299000₫</h6>
                    <h6 className="l-through">4499000₫</h6>
                  </div>
                  <h4>addidas New Hammer Sports</h4>
                  <div className="add-bag d-flex align-items-center justify-content-center">
                    <a className="add-btn" href><span className="ti-bag" /></a>
                    <span className="add-text text-uppercase">Thêm vào giỏ</span>
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

export default Deals;