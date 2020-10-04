import React from 'react';

function Deals(props) {
  const anh = "https://lh3.googleusercontent.com/IDIWVfR9-vIc0JNbnM7uyBbqhB7jLWykP8Z7DzymWB7uUoR9gGscaqb1lAWR4b-NKB3mdZ4pMvl8AAtpaYIy1nbRpfk7xCMUyhz6j3bqioiA7V6Bm1o0BFovzv2FCkowKdIZoQ9FuFhGp59Hq7YYtyCe14yHyH68rdEl6bOetKhDQbs-2LhTLcJ4Ade60oxqmttFm6aMAHu00XCxlL3mzve2KsgpMBxEX7e7dNAFsfLL4nCsv4-y5m9VAr7AhUeAObu2EDG7GQC3lY9aHwAK7yX4N5yWeuwybUCT7ahZlg8o2_kZWXEXpvNpunCcCLqc9cJcTVDexznz_6vwdxulXdMSl4QTS8GtmZBx7cAsF8cKIJZNFhdfDkxBUIj-4pbDbb2OAA2VLPNtdRrflQiMg-v3M4nWDK8bPx33uWI4euTW-xNv-LPG7xfN4HXKZ5F4x6eYwFhdHVAiE1uh5tfdtjZZrqOxDAXCpK2QUxuXfc6_b4X2FDCPLe8cORc6IgZBbFKNqs_c5DuZLvq5osMU9wwFmiCZiHV7br6rUC-AdCCtYt9ttLH5qNLjc6TfOI1q-8adWoZ4gzAsCL6yyUMvQTwz5EVdiSk2ccDwOrJuU8P6btRUjZL8B6i6KrOtL3FXucUOHVj4xo7Hr4Xu6j2VKW23rEROO0NhohlVj3FnyX45PN2cXhavRqp0tahx_A=w440-h400-no?authuser=0"
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
            <a href={"#"} className="primary-btn">Mua ngay</a>
          </div>
          <div className="col-lg-6 no-padding exclusive-right">
            <div className="active-exclusive-product-slider">
              {/* single exclusive carousel */}
              <div className="single-exclusive-slider">
                <img className="img-fluid" src={anh} alt="" />
                <div className="product-details">
                  <div className="price">
                    <h6>3299000₫</h6>
                    <h6 className="l-through">4499000₫</h6>
                  </div>
                  <h4>addidas New Hammer Sports</h4>
                  <div className="add-bag d-flex align-items-center justify-content-center">
                    <a className="add-btn" href={"#"}><span className="ti-bag" /></a>
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
                    <a className="add-btn" href={"#"}><span className="ti-bag" /></a>
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