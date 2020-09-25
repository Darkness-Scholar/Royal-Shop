import React from 'react';

function Category(props) {
    return (
        <section className="category-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="single-deal">
                                    <div className="overlay" />
                                    <img className="img-fluid w-100" src="img/category/c1.jpg" alt="" />
                                    <a href="img/category/c1.jpg" className="img-pop-up" target="_blank">
                                        <div className="deal-details">
                                            <h6 className="deal-title">Thời Trang</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single-deal">
                                    <div className="overlay" />
                                    <img className="img-fluid w-100" src="https://picsum.photos/262/225" alt="" />
                                    <a href="https://picsum.photos/262/225" className="img-pop-up" target="_blank">
                                        <div className="deal-details">
                                            <h6 className="deal-title">Gia Dụng</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single-deal">
                                    <div className="overlay" />
                                    <img className="img-fluid w-100" src="https://picsum.photos/262/225" alt="" />
                                    <a href="https://picsum.photos/262/225" className="img-pop-up" target="_blank">
                                        <div className="deal-details">
                                            <h6 className="deal-title">Thực Phẩm</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="single-deal">
                                    <div className="overlay" />
                                    <img className="img-fluid w-100" src="https://picsum.photos/458/184" alt="" />
                                    <a href="https://picsum.photos/458/184" className="img-pop-up" target="_blank">
                                        <div className="deal-details">
                                            <h6 className="deal-title">Điện Tử</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-deal">
                            <div className="overlay" />
                            <img className="img-fluid w-100" src="https://picsum.photos/360/425" alt="" />
                            <a href="https://picsum.photos/360/425" className="img-pop-up" target="_blank">
                                <div className="deal-details">
                                    <h6 className="deal-title">Mĩ Phẩm</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;