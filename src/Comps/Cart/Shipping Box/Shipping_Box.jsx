import React, { Component } from 'react';

class Shipping_Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: ""
        }
    }
    
    logger() {
        this.setState({hello:"Dit me may"})
        console.log(this.state.hello);
    }
    render() {
        return (
            <div className="shipping_box">
            <ul className="list">
                <li className="active"><a href={true}>Siêu tốc: 20000₫</a></li>
                <li><a type="button" href={true}>Miễn phí</a></li>
            </ul>
            <h6>Địa chỉ vận chuyển <i className="fa fa-caret-down" aria-hidden="true" /></h6>
            <select className="shipping_select" onChange={this.logger}>
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
        );
    }
}

export default Shipping_Box;