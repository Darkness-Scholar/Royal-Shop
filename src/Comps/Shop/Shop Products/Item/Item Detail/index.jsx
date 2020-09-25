import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { appData } from './../../../../../Data & State/Data';
import { cart, addToCart } from './../../../../../Data & State/Cart';
import { Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item_Detail_Banner from './Item Detail Banner';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

function Item_Detail(props) {
    var itemData = useRecoilValue(appData)
    var { id } = useParams();
    const dataforitem = { ...itemData.filter(value => { return value.code === id }) };

    const [giohang, setGiohang] = useRecoilState(cart);
    const handleAddToCart = (item) => {
        const newCart = addToCart(giohang, item);
        console.log(newCart);
        setGiohang(newCart);
    }

    console.log(dataforitem);
    return (
        <div>
            <Item_Detail_Banner />
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/600"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/600"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/600"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{dataforitem['0'].name}</h3>
                                <h2>4499000₫</h2>
                                <ul className="list">
                                    <li><a className="active" href="#"><span>Chủng loại</span> : Điện tử/Laptop</a></li>
                                    <li><a href="#"><span>Tình trạng</span> : Còn hàng</a></li>
                                </ul>
                                <p>{dataforitem['0'].desc}</p>
                                <div className="product_count">
                                        <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                                        <button className="increase items-count" type="button"><i className="lnr lnr-chevron-up" /></button>
                                        <button className="reduced items-count" type="button"><i className="lnr lnr-chevron-down" /></button>
                                </div>
                                <div className="card_area d-flex align-items-center">
                                    <a type="button" className="primary-btn" href={true} onClick={() => handleAddToCart(dataforitem['0'])}>Thêm vào giỏ</a>
                                    <a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond" /></a>
                                    <a className="icon_btn" href="#"><i className="lnr lnr lnr-heart" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================End Single Product Area =================*/}
            {/*================Product Description Area =================*/}
            <section className="product_description_area">
                <div className="container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Giới thiệu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Mô tả</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Bình luận</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Đánh giá</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản.</p>
                            <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản.</p>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5>Model</h5>
                                            </td>
                                            <td>
                                                <h5>MSI GF63 10SCR - 830VN</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Thương hiệu</h5>
                                            </td>
                                            <td>
                                                <h5>MSI Chính Hãng Việt Nam</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>CPU</h5>
                                            </td>
                                            <td>
                                                <h5>Intel® i7-10750H (2.6GHz upto 5.0GHz, 6 Cores, 12 Threads, 12MB cache, FSB 8GT/s)</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>RAM</h5>
                                            </td>
                                            <td>
                                                <h5>8GB DDR4 2666MHz, 2 slots, upto 32GB</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Ổ cứng</h5>
                                            </td>
                                            <td>
                                                <h5>SSD 512GB M.2 PCIe</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>GPU</h5>
                                            </td>
                                            <td>
                                                <h5>Nvidia Geforce GTX 1650Ti Max-Q 4GB GDDR6</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Màn hình</h5>
                                            </td>
                                            <td>
                                                <h5>15.6 inch FHD IPS (1920*1080) with 120Hz, viền mỏng</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Kết nối</h5>
                                            </td>
                                            <td>
                                                <h5>Intel Wireless-AC 9560 (2*2 a/c) + Bluetooth 5</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Trọng lượng</h5>
                                            </td>
                                            <td>
                                                <h5>1.8 kg</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="comment_list">
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/product/review-1.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h4>USER</h4>
                                                    <h5>Time</h5>
                                                    <a className="reply_btn" href="#">Reply</a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo</p>
                                        </div>
                                        <div className="review_item reply">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/product/review-2.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h4>USER</h4>
                                                    <h5>Time</h5>
                                                    <a className="reply_btn" href="#">Reply</a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo</p>
                                        </div>
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/product/review-3.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h4>USER</h4>
                                                    <h5>Time</h5>
                                                    <a className="reply_btn" href="#">Reply</a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="review_box">
                                        <h4>Gửi bình luận</h4>
                                        <form className="row contact_form" method="post" id="contactForm" noValidate="novalidate">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" name="name" placeholder="Tên" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="number" name="number" placeholder="SĐT" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" id="message" rows={1} placeholder="Lời nhắn" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-right">
                                                <button type="submit" value="submit" className="btn primary-btn">Gửi</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row total_rate">
                                        <div className="col-6">
                                            <div className="box_total">
                                                <h5>Tổng</h5>
                                                <h4>4.0</h4>
                                                <h6>(N Reviews)</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="rating_list">
                                                <h3>Dựa trên N đánh giá</h3>
                                                <ul className="list">
                                                    <li><a href="#">5 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                    <li><a href="#">4 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                    <li><a href="#">3 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                    <li><a href="#">2 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                    <li><a href="#">1 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review_list">
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/product/review-1.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h4>USER</h4>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo</p>
                                        </div>
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/product/review-2.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h4>USER</h4>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo</p>
                                        </div>
                                        <div className="review_item">
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/product/review-3.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h4>USER</h4>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="review_box">
                                        <h4>Đánh giá sản phẩm này</h4>
                                        <p>Star:</p>
                                        <ul className="list">
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                            <li><a href="#"><i className="fa fa-star" /></a></li>
                                        </ul>
                                        <p> </p>
                                        <form className="row contact_form" method="post" id="contactForm" noValidate="novalidate">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" name="name" placeholder="Tên"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="number" name="number" placeholder="SĐT" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" id="message" rows={1} placeholder="Lời đánh giá" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-right">
                                                <button type="submit" value="submit" className="primary-btn">Gửi</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Item_Detail;