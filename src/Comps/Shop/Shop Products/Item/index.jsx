import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import { useRecoilState } from 'recoil';
import {cart, addToCart} from './../../../../Data & State/Cart'
function Item(props) {
    const [giohang, setGiohang] = useRecoilState(cart);
    const handleAddToCart = (item) => {
        const newCart = addToCart(giohang, item);
        console.log(newCart);
        setGiohang(newCart);
    }
    const data = props.data_for_item
    const code = String(data.code);
    console.log(data);
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-product">
                <Link to={"/shop/" + code}><img className="img-fluid" src="img/product/p1.jpg" alt="" /></Link>
                <div className="product-details">
                    <h6>{data.name}</h6>
                    <div className="price">
                        <h6>{data.price}₫</h6>
                        <h6 className="l-through">10000₫</h6>
                    </div>
                    <div className="prd-bottom">
                        <a type="button" href={true} className="social-info" onClick={() => handleAddToCart(data)}>
                            <span className="ti-bag" />
                            <p className="hover-text">Thêm vào giỏ</p>
                        </a>
                        <a href={true} className="social-info">
                            <span className="lnr lnr-heart" />
                            <p className="hover-text">Yêu thích</p>
                        </a>
                        {/* 
                        <a href className="social-info">
                            <span className="lnr lnr-sync" />
                            <p className="hover-text">compare</p>
                        </a>
                        */}
                        <Link to={"/shop/" + code} className="social-info">
                            <span className="lnr lnr-move" />
                            <p className="hover-text">Xem thêm</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;