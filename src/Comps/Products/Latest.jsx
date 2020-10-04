import React from 'react';
import { useRecoilValue } from 'recoil';
import { latest } from './../../Data & State/Data'
function Latest(props) {
    const latestData = useRecoilValue(latest)
    const anh = "https://lh3.googleusercontent.com/E-enAHm1NpIJVdggRTSM-Bknrb2LVE98Qe9Gbgj4thhg5wFSBfEC-DgPpweSigEGEnMHgQ3yy9IBgpK42Hptub6ZIvdQei_GdqXm1jW2_o_bgEB_IkIkqv7Ca_bKGX_b5Ff2OtwWzNEvMdJ-cLyvBigbnMdi-sL1uMRJUXKlkqg3aYxtAFqfQotWoyUDWsoIyAoFdpuCD37Lh0aqYr-U75gKUsGwAxxl1CgkVJUm5ZrpFZc2U3Rj9rsx6O12LStjKgTDimMcMEFIk-4xcg0O4b_n6DLmu8FYlSWScJy1JyPRKtavuc7WhfegsKUn2xhC5V15vKprd7QizZ_bkeomQ_Om57CrgtnOGj4colIX7MmgcO9rmjGGnx4HHgzHWcyaOy9t9wftMlnhRxKBj0-rhnIsp79_D881fOjvPisdBpAfxruJBI1EJElzOSI-TgkQvCezAcTKC38ep67dQfIJ5lD2WYyH5lbJ7ONC8z3l0dPvUqNbxa1hjmYiDSy60kmmhxdobENrICJrAX9jbQpXD0QD-r-cDDegDzXC1nHAPEcV7jHxm6GpQ7jow29PiWgWLGsE8D1rDh6ZJvLagLdc_FFn9pKNx-Qnq2HQE6bPQ0kZ4K76irlTzv9g9qCZG1L0HR7CsnYr78YhjeqCS5y4rIErNI8XGkjFe9k4L7_UfjRtVv7VrkZPVjQiV9P9oQ=w262-h280-no?authuser=0"
    return (
        <div className="single-product-slider">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>Mới Nhất</h1>
                            <p>Tổng hợp tất cả các sản phẩm vừa ra mắt tại website.</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {latestData.map((value, index) => {
                        return (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="single-product">
                                    <img className="img-fluid" src={anh} alt="" />
                                    <div className="product-details">
                                        <h6>{value.name}</h6>
                                        <div className="price">
                                            <h6>500000₫</h6>
                                            <h6 className="l-through">{value.price}₫</h6>
                                        </div>
                                        <div className="prd-bottom">
                                            <a href={"#"} className="social-info">
                                                <span className="ti-bag" />
                                                <p className="hover-text">Thêm vào giỏ</p>
                                            </a>
                                            <a href={"#"} className="social-info">
                                                <span className="lnr lnr-heart" />
                                                <p className="hover-text">Yêu thích</p>
                                            </a>
                                            <a href={"#"} className="social-info">
                                                <span className="lnr lnr-move" />
                                                <p className="hover-text">Xem thêm</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default Latest;