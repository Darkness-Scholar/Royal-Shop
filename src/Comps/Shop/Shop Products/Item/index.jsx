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
        setGiohang(newCart);
    }
    const data = props.data_for_item
    const code = String(data.code);
    const anh = "https://lh3.googleusercontent.com/56paIbRZYulexMkhnyrlxn0M13grMCLrrL7qo7Sz443z7SmYXmB6WibFpVNg3GNYAlPoQNZFlyM4bRtsBCeYCLE0ZTA6UMO_aKJ1C8AIxRpn6oFjP1IpQaErsisca2vvAyDDfmFIDpzRiG-u9sniyDcbk7MxrQ2rHFkXydLl4rMqADQeb9iK6-gBGEobq1kJ4vzufyIO0SHXMVUKqZ4do763I8_pYjD5dyrxFeyBeyHlTH8OnXae02uqxFqlpk0OaPGOUumiHRr2Ua_x8S9S0ZkM40beeilRRYf88Ks3aBYU6-G7Gq1h0Ac5EhU0XmCIyiVzkjZBUf3ATD3NBPAQ8h_2TpwO16jc6lZbOIl5VZcR8WhvMImGaXMfkiDtrSi-2jh1WE4k2s5uVZ0JZvkBDGqgpPfrPcwaBeEK68NHnXBK8qBZ3MBebf9UZyPhBMe56_7gdtUGlM3DPDnIa5Ii-Ayz2Ov7FMYLfet1Wd3kzDrHjNt-wamJU7zVkbLjSzLgkiQCBtfBNjuVj-Cdbrkij3tKroETwYDv6gvvwg3HItU0tvMzsmFvvrqzf7jaTWB_qczwh2eAySqQEUWGDTWDBbWkDrLGsn1yUh11GmtcAaWGPYDONEloYY7dqqDVBjyw1hg8CNrSn3aqKESskINE8U9dS-fJeiJabhpZE95Dh0VQvhW1Bbta_bJ7R8Gx_Q=w263-h280-no?authuser=0"
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-product">
                <Link to={"/shop/" + code}><img className="img-fluid" src={anh} alt="" /></Link>
                <div className="product-details">
                    <h6>{data.name}</h6>
                    <div className="price">
                        <h6>{data.price}₫</h6>
                        <h6 className="l-through">10000₫</h6>
                    </div>
                    <div className="prd-bottom">
                        <a type="button" href={"#"} className="social-info" onClick={() => handleAddToCart(data)}>
                            <span className="ti-bag" />
                            <p className="hover-text">Thêm vào giỏ</p>
                        </a>
                        <a href={"#"} className="social-info">
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