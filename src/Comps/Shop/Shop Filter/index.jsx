import React from 'react';

function Shop_Filter(props) {
    return (
        <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="sidebar-categories">
                <div className="head">Theo chủng loại</div>
                <ul className="main-categories">
                    <li className="main-nav-list"><a data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span className="lnr lnr-arrow-right" />Thực phẩm<span className="number">(N)</span></a>
                        <ul className="collapse" id="fruitsVegetable" data-toggle="collapse" aria-expanded="false" aria-controls="fruitsVegetable">
                            <li className="main-nav-list child"><a href="#">Rau<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Gạo<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Cá đông lạnh<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Thịt bò<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Thịt lợn<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Thịt gà<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Tôm cua mực<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Bánh kẹo<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Bia rượu<span className="number">(N)</span></a></li>
                        </ul>
                    </li>
                    <li className="main-nav-list"><a data-toggle="collapse" href="#meatFish" aria-expanded="false" aria-controls="meatFish"><span className="lnr lnr-arrow-right" />Mĩ phẩm<span className="number">(N)</span></a>
                        <ul className="collapse" id="meatFish" data-toggle="collapse" aria-expanded="false" aria-controls="meatFish">
                            <li className="main-nav-list child"><a href="#">Mặt nạ<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Son<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Sữa rửa mặt<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Phấn<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Nước hoa<span className="number">(N)</span></a></li>
                        </ul>
                    </li>
                    <li className="main-nav-list"><a data-toggle="collapse" href="#cooking" aria-expanded="false" aria-controls="cooking"><span className="lnr lnr-arrow-right" />Điện tử<span className="number">(N)</span></a>
                        <ul className="collapse" id="cooking" data-toggle="collapse" aria-expanded="false" aria-controls="cooking">
                            <li className="main-nav-list child"><a href="#">Điện thoại<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Laptop<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Tivi<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Máy tính<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Linh kiện<span className="number">(N)</span></a></li>
                        </ul>
                    </li>
                    <li className="main-nav-list"><a data-toggle="collapse" href="#beverages" aria-expanded="false" aria-controls="beverages"><span className="lnr lnr-arrow-right" />Thời trang<span className="number">(N)</span></a>
                        <ul className="collapse" id="beverages" data-toggle="collapse" aria-expanded="false" aria-controls="beverages">
                            <li className="main-nav-list child"><a href="#">Áo<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Quần<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Giày dép<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Phụ kiện<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Mũ<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Trang sức<span className="number">(N)</span></a></li>
                        </ul>
                    </li>
                    <li className="main-nav-list"><a data-toggle="collapse" href="#homeClean" aria-expanded="false" aria-controls="homeClean"><span className="lnr lnr-arrow-right" />Gia dụng<span className="number">(N)</span></a>
                        <ul className="collapse" id="homeClean" data-toggle="collapse" aria-expanded="false" aria-controls="homeClean">
                            <li className="main-nav-list child"><a href="#">Chổi<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Cây lau nhà<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Dao kéo<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Bàn ghế<span className="number">(N)</span></a></li>
                            <li className="main-nav-list child"><a href="#">Móc treo<span className="number">(N)</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="sidebar-filter mt-50">
                <div className="top-filter-head">STH</div>
                <div className="common-filter">
                    <div className="head">Thương hiệu</div>
                    <form action="#">
                        <ul>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label htmlFor="apple">Apple<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label htmlFor="asus">Asus<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="vsmart" name="brand" /><label htmlFor="vsmart">Vsmart<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="xiaomi" name="brand" /><label htmlFor="xiaomi">Xiaomi<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label htmlFor="samsung">Samsung<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="gucci" name="brand" /><label htmlFor="gucci">Gucci<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="louis_vuitton" name="brand" /><label htmlFor="louis_vuitton">Louis Vuitton<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label htmlFor="chanel">Chanel<span>(N)</span></label></li>
                        </ul>
                    </form>
                </div>
                <div className="common-filter">
                    <div className="head">Màu sắc</div>
                    <form action="#">
                        <ul>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color" /><label htmlFor="black">Đen<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color" /><label htmlFor="balckleather">Trắng<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color" /><label htmlFor="blackred">Đỏ<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color" /><label htmlFor="gold">Vàng<span>(N)</span></label></li>
                            <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color" /><label htmlFor="spacegrey">Xanh<span>(N)</span></label></li>
                        </ul>
                    </form>
                </div>
                <div className="common-filter">
                    <div className="head">Giá</div>
                    <div className="price-range-area">
                        <div id="price-range" />
                        <div className="value-wrapper d-flex">
                            <div className="price">Giá:</div>
                            <span>đ</span>
                            <div id="lower-value" />
                            <div className="to"> tới</div>
                            <span>đ</span>
                            <div id="upper-value" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop_Filter;