import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Shop_Filter from './Shop Filter';
import Shop_Header from './Shop Header';
import Shop_Products from './Shop Products'
function Shop(props) {
    return (
        < >
            <Shop_Header />
            <div className="container">
                <div className="row">
                    <Shop_Filter />
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        {/* Start Filter Bar */}
                        <div className="filter-bar d-flex flex-wrap align-items-center">
                            <div className="sorting">
                                <select>
                                    <option value={1}>Mới nhất</option>
                                    <option value={1}>Hot nhất</option>
                                    <option value={1}>Xem nhiều</option>
                                </select>
                            </div>
                            <div className="sorting mr-auto">
                                <select>
                                    <option value={1}>Hiển thị 12</option>
                                    <option value={1}>Hiển thị 12</option>
                                    <option value={1}>Hiển thị 12</option>
                                </select>
                            </div>
                            <div className="pagination">
                                <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true" /></a>
                                <a href="#" className="active">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true" /></a>
                                <a href="#">6</a>
                                <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                            </div>
                        </div>
                        {/* End Filter Bar */}
                        {/* Start Best Seller */}
                        <Shop_Products />
                        {/* End Best Seller */}
                        {/* Start Filter Bar */}
                        <div className="filter-bar d-flex flex-wrap align-items-center">
                            <div className="sorting mr-auto">
                                <select>
                                    <option value={1}>Hiển thị 12</option>
                                    <option value={1}>Hiển thị 12</option>
                                    <option value={1}>Hiển thị 12</option>
                                </select>
                            </div>
                            <div className="pagination">
                                <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true" /></a>
                                <a href="#" className="active">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true" /></a>
                                <a href="#">6</a>
                                <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                            </div>
                        </div>
                        {/* End Filter Bar */}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Shop;