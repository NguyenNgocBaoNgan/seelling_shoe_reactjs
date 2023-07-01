import React from "react";
import './footer.css';
function Footer(){
    return (
        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Theo dõi chúng tôi trên các nền tảng</h6>
                            <p></p>
                            <div className="footer-social d-flex align-items-center">
                                <a href="#"><i className="fa fa-globe" aria-hidden="true"></i>
                                </a>
                                <a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-mobile" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-tasks" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-wifi" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-6">
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget mail-chimp">
                            <div className="single-footer-widget">
                                <a href="/contact"><h6>Về chúng tôi</h6></a>
                                <p>Số điện thoại: 0789123456</p>
                                <p>Email: support@shoeshop.com</p>
                                <p>Địa chỉ: khu phố 6, phường Linh Trung, quận Thủ Đức, thành phố Hồ Chí Minh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;