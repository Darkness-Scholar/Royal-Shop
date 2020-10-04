import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';
import './style.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            name: "",
            picture: "",
            email: ""
        }
    }

    componentClicked = () => {
        console.log("componentClicked");
    }

    responseFacebook = (response) => {
        console.log(response);
        if (response.status !== "unknown") {
            this.setState({
                auth: true,
                name: response.name,
                picture: response.picture.data.url,
                email: response.email
            })
        }
    }
    render() {
        let Facebook_data;

        this.state.auth ?
            Facebook_data = (<div style={{color:'white'}}>
                Hello World!, {this.state.name}
                <div className="fb-avt">
                    <img src={this.state.picture} alt="" />
                </div>
            </div>) :
            Facebook_data = (
                <FacebookLoginBtn
                    appId="330841791565372"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            )
        return (
            <div>
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Login/Register</h1>
                                <nav className="d-flex align-items-center">
                                    <a href="index.html">Home<span className="lnr lnr-arrow-right" /></a>
                                    <a href="category.html">Login/Register</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner Area */}
                {/*================Login Box Area =================*/}
                <section className="login_box_area section_gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="login_box_img">
                                    <img className="img-fluid" src="https://picsum.photos/585/609" alt="" />
                                    <div className="hover">
                                        <h4>Sử dụng Facebook để đăng nhập</h4>
                                        <p>An toàn, thuận tiện với mọi người</p>
                                        {Facebook_data}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="login_form_inner">

                                    <h3>Đăng Nhập</h3>
                                    <h6>(Chưa phát triển chức năng này)</h6>
                                    <form className="row login_form" method="post" id="contactForm" noValidate="novalidate">
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Tài khoản" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Mật khẩu" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account">
                                                <input type="checkbox" id="f-option2" name="selector" />
                                                <label htmlFor="f-option2">Rêmmber</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 form-group">

                                            <button type="button" className="primary-btn">Log In</button>
                                            <a href="#">Quên mật khẩu?</a>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Login;