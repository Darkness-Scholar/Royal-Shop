import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import "./style.css"
import { cart } from './../../Data & State/Cart'
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
function Header(props) {
    const cartData = useRecoilValue(cart)
    const showCart = () => {
        if (cartData.length <= 0) {
            return (<p>Giỏ hàng đang trống, hãy mua thêm</p>)
        }
        else {
            return (
                <div>
                    {cartData.map((value, index) => {
                        return(<div key={index}>{value.product.name} x {value.quantity}</div>)
                    })}
                    <p>Co hang</p>
                    <Link to="/cart">Thanh Toán</Link>
                </div>
            )
        }
    }
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Giỏ Hàng</Popover.Title>
            <Popover.Content>
                {showCart()}
            </Popover.Content>
        </Popover>
    );
    return (
        <div>
            <header className="header_area sticky-header">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <a className="navbar-brand logo_h" href="/"><img src="https://via.placeholder.com/137x50" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                                    <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Giới Thiệu</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="#">Về Chúng Tôi</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="#">Blog</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Đăng Nhập</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="/login">Đăng Nhập</Link></li>
                                            <li className="nav-item"><a className="nav-link" href="/">Đăng Ký</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="/">Liên Hệ</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item header-cart">
                                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                            <Button variant="success" className="ti-bag"></Button>
                                        </OverlayTrigger>
                                        {/*<a href="#" className="cart"><span className="ti-bag" /></a>*/}</li>
                                    <li className="nav-item">
                                        <button className="search"><span className="lnr lnr-magnifier" id="search" /></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form className="d-flex justify-content-between">
                            <input type="text" className="form-control" id="search_input" placeholder="Tìm Kiếm" />
                            <button type="submit" className="btn" />
                            <span className="lnr lnr-cross" id="close_search" title="Close Search" />
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;