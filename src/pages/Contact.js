import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      {/* ========= Banner ========= */}
      <section className="container-fluid service_banner_space bg_color_1">
        <Row >
          <Col md={7} className=" align-self-center text-center text-lg-start position-relative media_col_remove">
            <div className="text_bg" />
            <p className="d-flex align-items-center d-block mx-auto mx-lg-0 text_18">
              <Link to="/Home" className="text-decoration-none font_color me-2 weight_500">Home</Link>
              <span className="weight_800"> » Contact Us</span>
            </p>
            <p className="common_text_1 weight_800 text_18 text-start">We'd be delighted to hear from you</p>
            <div className="common_text text-start">
              <div className="me-2 text_64 weight_800 heading_line mb-2 media_heading media_con_head">
                Happy to
                <span className="primary_color weight_800 heading_hover text_64 media_heading media_con_head">Assist</span>
              </div>
            </div>
            <p className="common_text_1 pr_100 pt-3 text-start">
              Simply submit us your questions or concerns in the form of a proposal, and we will provide you with the assistance you require.
            </p>
            <Link to="/Contact" className="btn btn_1 rounded-pill fw-bold mt-4 mx-auto mx-lg-0 btn_shadow">Request Free Proposal</Link>
          </Col>
          <Col md={5}>
            <div className="about_banner_img service_banner_img media_contact_banner">
              <img src="images4/banner.svg" alt="banner" />
            </div>
          </Col>
        </Row>
      </section>

      {/* ========= Let’s Discuss ========= */}
      <section className="digital_space scrollreveal">
        <div className="container-fluid">
          <Row className=" text-center text-lg-start">
            <Col md={6} className=" mb-5 pt-3 pb-5">
              <div className="digital_imgbox">
                <div className="digi_dot digi_dot1" />
                <div className="digi_dot digi_dot2" />
                <div className="digi_dot digi_dot3" />
                <div className="digital_bgimg" />
                <img src="images4/discuss_image.png" alt="our partner" />
              </div>
            </Col>
            <Col md={6} className=" digital_text_space pt-5">
              <div className="common_text weight_800 media_34 media_26">
                <span className="me-0">Let’s Discuss your</span>
                <span className="bg_color_2 rounded-3 px-3">Projects!</span>
              </div>
              <p className="common_text_1 my-4 padding_right_100 me-3">
                : Let’s talk about your company ideas, and our team of experts will assist you in developing the software of your dreams. Within 8 business hours, you should hear from us.
              </p>
            </Col>
          </Row>
        </div></section>

      {/* ========= Get In Touch ========= */}
      <section className="margin_top get_space scrollreveal">
        <Row >
          <Col xl={4}>
            <div className="get_info">
              <div className="text_18 weight_700 text-white mb-2">LET'S TALK</div>
              <div className="text_36 weight_800 primary_color mb-3 lh-sm media_26">
                Speak With Expert Engineers.
              </div>
              <div className="d-flex align-items-center justify-content-md-start mb-4 pb-2">
                <img src="images4/call.svg" className="img-fluid me-3" alt="call" />
                <div>
                  <p className="text-white weight_800 text_18 mb-0">Phone :</p>
                  <a href="js:" className="text-white weight_500 text_18">+91 9510673499</a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-md-start mb-4 pb-2">
                <img src="images4/mail.svg" className="img-fluid me-3" alt="email" />
                <div>
                  <p className="text-white weight_800 text_18 mb-0">Email:</p>
                  <a href="js:" className="text-white weight_500 text_18">info@xcodethemes.in</a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-4 pb-2">
                <img src="images4/location.svg" className="img-fluid me-3" alt="location" />
                <div className="pe-3">
                  <p className="text-white weight_800 text_18 mb-0">Address:</p>
                  <a href="js:" className="text-white weight_500 text_18 pe-5">
                    438, Opera Business Hub, Lajamni Chok,Mota Varachha, Surat, Gujarat, India
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8} className=" get_formspace media_form_mt">
            <div className="primary_color text_18 weight_700 mb-2">GET IN TOUCH</div>
            <div className="common_text weight_800 media_34 media_26">
              <span className="me-0">Fill The</span>
              <span className="bg_color_2 rounded-3 px-3">Form Below</span>
            </div>
            <form>
              <Row className=" g-3 my-2">
                <Col md={6}>
                  <input type="text" className="form_control" placeholder="Name" required />
                </Col>
                <Col md={6}>
                  <input type="email" className="form_control" placeholder="Work Email" required />
                </Col>
                <Col md={6}>
                  <input type="tel" maxLength={10} className="form_control" placeholder="Phone Number" required />
                </Col>
                <Col md={6}>
                  <input type="text" className="form_control" placeholder="Your Website" />
                </Col>
                <Col md={12}>
                  <textarea className="form_control p-5 ps-3 pt-3 mb-4" id="exampleFormControlTextarea1" rows={3} placeholder="Your Message Here" required defaultValue={""} />
                </Col>
                <p className="common_text_1 mt-1">
                  We Appreciate Your Interest In Us. Please Select Your Area Of Interest
                </p>
                <Row>
                  <Col md={3} className="form-check ">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck9" />
                    <label className="form-check-label" htmlFor="defaultCheck9">
                      REQUEST FOR SERVICE
                    </label>
                  </Col>
                  <Col md={3} className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck10" />
                    <label className="form-check-label" htmlFor="defaultCheck10">
                      REQUEST FOR PROPOSAL
                    </label>
                  </Col>
                  <Col md={2} className="form-check ">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck11" />
                    <label className="form-check-label" htmlFor="defaultCheck11">
                      TALK TO EXPERTS
                    </label>
                  </Col>
                  <Col md={2} className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck12" />
                    <label className="form-check-label" htmlFor="defaultCheck12">
                      PRODUCT
                    </label>
                  </Col>
                  <Col md={2} className="form-check ">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck13" />
                    <label className="form-check-label" htmlFor="defaultCheck13">
                      GENERAL INQUIRY
                    </label>
                  </Col>
                </Row>
                <Row >
                  <Col lg={5} className=" media_form_btn">
                    <button className="btn btn_1 rounded-pill fw-bold d-block mt-4 btn_shadow media_form_btn">
                      Submit Now
                    </button>
                  </Col>
                </Row>
              </Row>
            </form>
          </Col>
        </Row>
      </section>
    </div>

  )
}

export default Contact
