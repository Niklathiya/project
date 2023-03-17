import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer className="margin_top">
                <div className="container-fluid">
                    <Row className=" text-white">
                        <Col lg={4} md={6} className=" text-center text-md-start">
                            <a href="index.html"><img src="images/footer-logo.svg" className="img-fluid footer_img" alt="footer logo" /></a>
                            <p className="footer_text mt-4">
                                Top Digital Solution Provider to Build Web &amp; Mobile Apps
                            </p>
                        </Col>
                        <Col lg={2} md={6} className=" text-md-start margin_top2_80 activeclass footer_active media_footer_width media_footer_mt2">
                            <div className="fs-5 fw-bold mb-2 footer_title">Quick Links</div>
                            <ul className="list-unstyled">
                                <li><Link to="/Home">Home</Link></li>
                                <li><Link to="/About">About Us</Link></li>
                                <li><Link to="/Services">Services</Link></li>
                                <li><Link to="/Contact">Contact Us</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} className=" text-md-start margin_top_80 media_footer_mt media_footer_width">
                            <div className="fs-5 fw-bold mb-2 footer_title">Information</div>
                            <ul className="list-unstyled">
                                <li><a href="js:">Terms &amp; Conditions</a></li>
                                <li><a href="js:">Hire Dedicated Developers</a></li>
                                <li><a href="js:">Hosting Recommendations</a></li>
                                <li><a href="js:">Career</a></li>
                                <li><a href="js:">Privacy Policy</a></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} className=" text-start text-md-start margin_top_80 media_footer_mt nedia_flex">
                            <div className="fs-5 fw-bold mb-2 footer_title">Contact Us</div>
                            <p className="d-flex align-items-center justify-content-center justify-content-md-start mb-1 nedia_flex">
                                <a href="js:"><img src="images/phone.svg" className="img-fluid me-3" alt="phone" />+919033469023</a>
                            </p>
                            <p className="d-flex align-items-center justify-content-center justify-content-md-start mb-1">
                                <img src="images/location.svg" className="img-fluid me-3 mb-3" alt="location" />
                                <a href="js:">
                                    Unit #204, 45 Silverstone Drive, Etobicoke, Ontario, M9V 4B, Canada
                                </a>
                            </p>
                            <p className="d-flex align-items-center justify-content-center justify-content-md-start mb-1">
                                <img src="images/location.svg" className="img-fluid me-3 mb-3" alt="location" />
                                <a href="js:">
                                    438, Opera Business Hub, Lajamni Chowk, Mota Varachha, Surat, Gujarat, India
                                </a>
                            </p>
                            <p className="d-flex align-items-center justify-content-center justify-content-md-start mb-1 nedia_flex">
                                <a href="js:"><img src="images/mail.svg" className="img-fluid me-3" alt="mail" />info@xcodethemes.in</a>
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start nedia_flex">
                                <div className="circle">
                                    <img src="images/instagram.svg" className="img-fluid" alt="instagram" />
                                </div>
                                <div className="circle">
                                    <img src="images/facebook.svg" className="img-fluid" alt="facebook" />
                                </div>
                                <div className="circle">
                                    <img src="images/twitter.svg" className="img-fluid" alt="twitter" />
                                </div>
                                <div className="circle">
                                    <img src="images/youtube.svg" className="img-fluid" alt="youtube" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
            {/* ========= rights ========= */}
            <section className="rights">
                <div className="common_text_1 weight_600 d-flex justify-content-center">
                    <p className="mb-0 me-2 ">Xcodethemes © @2022</p>
                    <p className="mb-0">| All Rights Reserved</p>
                </div>
            </section>
        </div>

    )
}

export default Footer
