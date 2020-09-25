import React, { useState } from 'react';
import Cart_Item from './Cart Item/Cart_Item';
function Cart(props) {
    return (
        <div>
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first">
                <h1>Đặt Hàng</h1>
                <nav className="d-flex align-items-center">
                  <a href="/">Home<span className="lnr lnr-arrow-right" /></a>
                  <a href="/cart">Đặt Hàng</a>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Banner Area */}
        {/*================Cart Area =================*/}
        <section className="cart_area">
          <div className="container">
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sản phẩm</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      <Cart_Item />
                    
                    <tr className="bottom_button">
                      <td>
                        <a className="gray_btn" type="button" href={true}>Cập Nhật</a>
                      </td>
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                        <div className="cupon_text d-flex align-items-center">
                          <input type="text" placeholder="Mã giảm giá" />
                          <a className="primary-btn" type="button" href={true}>Áp Dụng</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                        <h5>Tổng</h5>
                      </td>
                      <td>
                        <h5>50000₫</h5>
                      </td>
                    </tr>
                    <tr className="shipping_area">
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                        <h5>Vận chuyển</h5>
                      </td>
                      <td>
                        <div className="shipping_box">
                          <ul className="list">
                            <li className="active"><a href={true}>Siêu tốc: 20000₫</a></li>
                            <li><a type="button" href={true}>Miễn phí</a></li>
                          </ul>
                          <h6>Địa chỉ vận chuyển <i className="fa fa-caret-down" aria-hidden="true" /></h6>
                          <select className="shipping_select">
                            <option value={1}>Hà Nội</option>
                            <option value={2}>Hải Phòng</option>
                            <option value={4}>Đà Nẵng</option>
                            <option value={5}>TP Hồ Chí Minh</option>
                          </select>
                          <select className="shipping_select">
                            <option value={1}>Hồ Tây</option>
                            <option value={2}>Thanh Xuân</option>
                            <option value={4}>Ba Đình</option>
                          </select>
                          <input type="text" placeholder="Ghi chú thêm" />
                          <a className="gray_btn" type="button" href={true}>Cập Nhật</a>
                        </div>
                      </td>
                    </tr>
                    <tr className="out_button_area">
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                        <div className="checkout_btn_inner d-flex align-items-center">
                          <a className="gray_btn" type="button" href={true}>Xem Thêm</a>
                          <a className="primary-btn" type="button" href={true}>Thanh Toán</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Cart;