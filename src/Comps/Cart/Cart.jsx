import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {cart} from './../../Data & State/Cart'
import Cart_Item from './Cart Item/Cart_Item';
import Shipping_Box from './Shipping Box/Shipping_Box';
function Cart(props) {
  const cartData = useRecoilValue(cart)
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

                    {cartData.map((value, index) => {
                      return <Cart_Item key={index} quantity={value.quantity} name={value.product.name} price={value.product.price}/>
                    })}
                    
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
                        <Shipping_Box />
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