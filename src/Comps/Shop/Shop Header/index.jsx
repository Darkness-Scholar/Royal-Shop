import React from 'react';

function Shop_Header(props) {
    return (
        <section className="banner-area organic-breadcrumb">
        <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div className="col-first">
                    <h1>Cửa Hàng</h1>
                    <nav className="d-flex align-items-center">
                        <a href="index.html">Trang Chủ<span className="lnr lnr-arrow-right" /></a>
                        <a href="#">Shop</a>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Shop_Header;