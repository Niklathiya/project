import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      {/* ========= banner ========= */}
      <section className="container-fluid about_banner_space bg_color_1">
        <Row>
          <Col lg={7} md={7} className=" align-self-center text-start text-lg-start position-relative">
            <div className="text_bg" />
            <p className=" d-flex align-items-center d-block mx-auto mx-lg-0 text_18">
              <Link to="/Home" className="text-decoration-none font_color me-2 weight_500">Home</Link>
              <span className="weight_800"> » About Us</span>
            </p>
            <div className="common_text">
              <div className="me-2 text_64 weight_800 heading_line mb-2 media_heading">
                An Extended Enthusiastic Team that helps you Build your
              </div>
              <span className="primary_color weight_800 heading_hover text_64 media_heading media_about_pr">Dream Project </span>
            </div>
            <p className="common_text_1 pr_100 pt-4 mt-2 media_pr">
              At Xcodethemes, we ensure that our teammates and clients grow alongside the company by providing the best work-life culture in the industry.
            </p>
          </Col>
          <Col lg={5} md={5} >
            <div className="about_banner_img">
              <img src="images2/banner.svg" alt="banner" />
            </div>
          </Col>
        </Row>
      </section>

      {/* ========= digital Solution ========= */}
      <section className="digital_space scrollreveal">
        <div className="container-fluid">
          <Row className=" text-center text-lg-start">
            <Col md={6} className=" pt-5 pb-5">
              <div className="digital_imgbox">
                <div className="digi_dot digi_dot1" />
                <div className="digi_dot digi_dot2" />
                <div className="digi_dot digi_dot3" />
                <div className="digital_bgimg" />
                <img src="images2/digital-img.png" alt="our partner" />
              </div>
            </Col>
            <Col md={6} className=" digital_text_space pt-5">
              <div className="common_text weight_800 media_34 media_26 text-start">
                <span className="me-0">
                  The Ultimate Partner to Build your Dream
                </span>
                <span className="bg_color_2 rounded-3 px-3">Digital Solutions</span>
              </div>
              <p className="common_text_1 weight_700 fst-italic pt-4 mt-1 text-start">You express your idea, We Build it for you!</p>
              <p className="common_text_1 my-4 text-start">
                We turn innovative business concepts into outstanding digital products. We come up with ideas, create, and implement data-driven digital products to solve business problems. We are a full-service software development firm that assists startups and businesses in developing a seamless digital masterpiece.
              </p>
              <p className="common_text_1 pt-1 text-start">Join Hands with us and Rest Assured, you’ll know the difference…!!</p>
            </Col>
          </Row>
        </div>
      </section>

      {/* ========= decade ========= */}
      <section className="digital_space scrollreveal">
        <div className="container-fluid">
          <Row className=" text-center text-lg-start">
            <Col md={6} className=" digital_text_space pt-5 pe-0">
              <div className="common_text weight_800 media_34 media_26 text-start">
                <span className="me-0">
                  Eternal Trust for a
                </span>
                <span className="bg_color_2 rounded-3 px-3">Decade</span>
              </div>
              <p className="common_text_1 my-4 text-start">
                We’ve believed in your success, trusted our winning abilities, and sworn by the computer code since the beginning. We believe, It is not work; it is our responsibility.
              </p>
              <p className="common_text_1 pt-1 text-start">
                Our business has been differentiated by our laser-like emphasis on customer pleasure. Our inquisitive spirit and inventiveness ensure that our approach to new difficulties never becomes stale. Xcodetheme is not just your digital partner, It’s a winning combination for a fantastic digital product.
              </p>
            </Col>
            <Col md={6} className=" pt-5 pb-5">
              <div className="digital_imgbox">
                <div className="digi_dot digi_dot1" />
                <div className="digi_dot digi_dot2" />
                <div className="digi_dot digi_dot3" />
                <div className="digital_bgimg" />
                <img src="images4/discuss_image.png" alt="our partner" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ========= Philosophy ========= */}
      <section className="digital_space mb-5 pb-5 scrollreveal media_philosophy_space">
        <div className="container-fluid">
          <Row className=" text-center text-lg-start">
            <Col md={6} className=" pt-5">
              <div className="ps-5 position-relative philosophy_hover media_remove">
                <div className="philosophy_box">
                  <img src="images2/Philosophy-img.jpeg" alt="Philosophy banner" />
                </div>
                <img src="images2/Experience.svg" alt="Experience" className="exp_sticker" />
                <div>
                  <img src="images2/business-lable.png" alt="business-lable" className="business_lable" />
                  <div className="border_circle" />
                </div>
              </div>
            </Col>
            <Col md={6} className=" digital_text_space pt-5">
              <div className="common_text weight_800 media_34 media_26 text-start">
                <span className="me-0">
                  Our
                </span>
                <span className="bg_color_2 rounded-3 px-3">Philosophy</span>
              </div>
              <div className="d-flex padding_right_100 mt-3 text-start">
                <img src="images2/Mission.svg" alt="Mission" className="align-self-start" />
                <div className="ps-3 ">
                  <p className="common_text_1 weight_700 text_18 mb-2">Our Mission</p>
                  <p className="common_text_1">
                    We're on a Mission to cater our valued global clientele with Customer-centric, Result-oriented, and Cost-effective Digital Solutions.
                  </p>
                </div>
              </div>
              <div className="d-flex padding_right_100 mt-3 text-start">
                <img src="images2/Vision.svg" alt="Vision" className="align-self-start" />
                <div className="ps-3 ">
                  <p className="common_text_1 weight_700 text_18 mb-2">Our Vision</p>
                  <p className="common_text_1">
                    We are envisioned to become a well-known Full-stack Digital Solution Consulting and Development firm that serves Start-ups, Agencies, SMEs, and Large corporations. Our fundamental strategy for obtaining our ultimate goal of success is constant innovation. By providing top quality solutions, we have become a worldwide recognised Digital solution provider and Software Development firm.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ========= Digital Product ========= */}
      <section className="digi_product digi_product_bg scrollreveal">
        <div className="container-fluid">
          <div className="common_text weight_800 text-lg-center text-center digi_heading pb-5 media_34 media_26 media_remove_pb">
            <span className="me-0">
              Steps to Build a Successful Digital
            </span>
            <span className="bg_color_2 rounded-3 px-3">Product</span>
          </div>
          <Row className=" mt-5 text-center">
            <Col md={3} className="col-6 step_hover">
              <img src="images2/digi_1.svg" alt="step 1" />
              <p className="common_text_1 weight_800 text_24 mt-2 mb-3 lh-sm">Advertising and Marketing</p>
            </Col>
            <Col md={3} className=" col-6 step_hover">
              <p className="common_text_1 weight_800 text_24 mb-3 lh-sm">Web <br /> Development</p>
              <img src="images2/digi_2.svg" altx="step 2" />
            </Col>
            <Col md={3} className=" col-6 step_hover">
              <img src="images2/digi_3.svg" alt="step 3" />
              <p className="common_text_1 weight_800 text_24 mt-2 mb-3 lh-sm">Mobile App <br /> Development</p>
            </Col>
            <Col md={3} className=" col-6 step_hover">
              <p className="common_text_1 weight_800 text_24 mb-3 lh-sm">Search Engine Optimization</p>
              <img src="images2/digi_4.svg" alt="step 4" />
            </Col>
          </Row>
        </div>
      </section>

      {/* ========= Dynamic Team ========= */}
      <section className="digital_space pt-5 scrollreveal">
        <div className="container-fluid">
          <Row className=" text-center text-lg-start">
            <Col md={6} className=" digital_text_space pt-5">
              <div className="common_text weight_800 padding_right_100 media_34 media_26 text-start">
                <span className="me-0">
                  We Are A Dynamic Team Of Digital
                </span>
                <span className="bg_color_2 rounded-3 px-3">Marketing</span>
              </div>
              <p className="common_text_1 my-4 padding_right_100 me-3 text-start">
                We provide marketing services to startups and small businesses looking for a partner for their digital media. We work with you, not for you.We are lorem duoa headquartered in North-Eastern France, with our 19 associates located across nine countries in order to best serve.
              </p>
              <Link to="/About" className="btn btn_1 rounded-pill fw-bold mt-2 mx-auto mx-lg-0 btn_shadow">Learn More</Link>
            </Col>
            <Col md={6} className=" pt-5 pb-5">
              <div className="digital_imgbox">
                <div className="digi_dot digi_dot1" />
                <div className="digi_dot digi_dot2" />
                <div className="digi_dot digi_dot3" />
                <div className="digital_bgimg" />
                <img src="images2/digital-img.png" alt="our partner" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ========= Value System at Xcodethemes ========= */}
      <section className="bg_color_1 container-fluid value_space margin_top scrollreveal">
        <Row >
          <Col lg={6} className=" align-self-center margin_top_100">
            <Row>
              <Col md={6} className=" pb-3">
                <div className="card p-4 pb-5 value_card">
                  <div className="what_imgbox d-flex align-items-center justify-content-center">
                    <img src="images2/security.png" alt="security Design" className="what_img" />
                  </div>
                  <p className="fw-bold mt-4 text_18 what_text">Graphic Design</p>
                  <p className="common_text_1 mb-0">
                    We believe in forming a community of partners that are invested in each other's success rather than a customer list.
                  </p>
                </div>
              </Col>
              <Col md={6} className=" pb-3">
                <div className="card p-4 pb-5 value_card">
                  <div className="what_imgbox d-flex align-items-center justify-content-center">
                    <img src="images2/tick.png" alt="tick design" className="what_img" />
                  </div>
                  <p className="fw-bold mt-4 text_18 what_text">Mobile App Development</p>
                  <p className="common_text_1 mb-0">
                    Our willingness to walk an extra mile every time, our ambition to raise our bar and challenge our best output from the past, and our desire to win all boil down to one thing: excellence.
                  </p>
                </div>
              </Col>
              <Col md={6} >
                <div className="card p-4 pb-5 value_card">
                  <div className="what_imgbox d-flex align-items-center justify-content-center">
                    <img src="images2/thinking.png" alt="thinking design" className="what_img" />
                  </div>
                  <p className="fw-bold mt-4 text_18 what_text">Web Development</p>
                  <p className="common_text_1 mb-0">
                    The ability to continually think outside the box, even when it seems absurd, is how the world evolves
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className=" text-center text-lg-start ps-5 pe-5 align-self-center">
            <div className="common_text weight_800 text-start media_34 media_26 media_value_pt">
              <span className="me-2">
                Value System at
              </span>
              <span className="bg_color_2 rounded-3 px-3">Xcodethemes</span>
            </div>
            <p className="common_text_1 my-4 text-start">
              We are Thought Leaders and Action-oriented Team ready to code your dreams into the world-class Digital Solutions. We are committed to deliver the best by bringing together our Knowledge and Experience to build User-centric Digital Designs.
            </p>
            <Link to="/About" className="btn btn_1 rounded-pill fw-bold btn_shadow">Learn More</Link>
          </Col>
        </Row>
      </section>

      {/* ========= our team ========= */}
      <section className="margin_top bg_color_1 scrollreveal">
        <div className="our_team">
          <div className="team_img" />
        </div>
        <div className="ourteam_space">
          <div className="common_text weight_800 mb-3 media_34 media_26">
            <span>Our</span>
            <span className="bg_color_2 rounded-3 px-3">Team</span>
          </div>
          <p className="common_text_1 weight_700 text_18 pt-3">Innovative Army Behind Xcodethemes</p>
          <p className="common_text_1 weight_700 text_18">Leadership</p>
          <p className="common_text_1">
            We at Xcodethemes believe in savouring every single minute of life. We have the freedom to express ourselves, our feelings, our thoughts, and most importantly, to have fun. As a result, our lives at Xcodethemes are full of hustling, colliding, and recreation on all levels of personal and professional life.
          </p>
        </div>
      </section>

      {/* ========= team member ========= */}
      <section className="member_space scrollreveal">
        <div className="common_text weight_800 mb-3 text-center media_34 media_26">
          <span>The Most Dedicated and Innovative</span>
          <span className="bg_color_2 rounded-3 px-3">Team</span>
        </div>
        <Row >
          <Col lg={3} className=" col-6 divison">
            <img src="images2/member-1.jpeg" alt="team member" />
            <div className="overlay">
              <div className="overlay_head">
                <span className="common_text weight_800 m-0">Diana Yong</span>
                <p className="common_text_1 weight_800 m-0">Designer</p>
                <ul className="d-flex p-0 mt-2">
                  <li><a><i className="fa-brands fa-instagram social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-facebook-f social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-youtube social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-twitter social_icon" /></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} className=" col-6 divison">
            <img src="images2/member-2.jpeg" alt="team member" />
            <div className="overlay">
              <div className="overlay_head">
                <span className="common_text weight_800 m-0">Jhone Chik</span>
                <p className="common_text_1 weight_800 m-0">Designer</p>
                <ul className="d-flex p-0 mt-2">
                  <li><a><i className="fa-brands fa-instagram social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-facebook-f social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-youtube social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-twitter social_icon" /></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} className=" col-6 divison media_mt10">
            <img src="images2/member-3.jpeg" alt="team member" />
            <div className="overlay">
              <div className="overlay_head">
                <span className="common_text weight_800 m-0">Mlahia Diona</span>
                <p className="common_text_1 weight_800 m-0">Designer</p>
                <ul className="d-flex p-0 mt-2">
                  <li><a><i className="fa-brands fa-instagram social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-facebook-f social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-youtube social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-twitter social_icon" /></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} className=" col-6 divison media_mt10">
            <img src="images2/member-4.jpeg" alt="team member" />
            <div className="overlay">
              <div className="overlay_head">
                <span className="common_text weight_800 m-0">Isuma Linia</span>
                <p className="common_text_1 weight_800 m-0">Designer</p>
                <ul className="d-flex p-0 mt-2">
                  <li><a><i className="fa-brands fa-instagram social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-facebook-f social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-youtube social_icon" /></a></li>
                  <li><a><i className="fa-brands fa-twitter social_icon" /></a></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      
      {/* ========= Client Testimonials ========= */}
      <section className="padding_60 margin_top scrollreveal">
        <div className="container-fluid px-5 media_client_space">
          <div className="fw-bold primary2_color mb-2 text-center text_18">
            Client Testimonials
          </div>
          <div className="common_text text-center weight_800 media_34 media_26">
            <span className="me-2">What Our</span>
            <span className="bg_color_2 rounded-3 px-3">Clients Say</span>
          </div>
          <Row className=" mt-5 media_client_width">
            <Col lg={6} className=" align-self-center">
              <img src="images/client-banner.png" className="img-fluid" alt="client banner" />
            </Col>
            <Col lg={6} className=" align-self-center">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={3000}>
                    <div className="clients_carousel">
                      <p className="mb-0 carousel_text">
                        To Work With, Xcodethemes Is An Excellent Full Stack
                        Digital Solution Provider. Exceptionally professional and
                        knowledgeable in the development of mobile apps and
                        e-commerce websites. We started working with Xcodethemes
                        on two websites, and they exceeded our expectations.
                      </p>
                    </div>
                    <div className="client_detail d-flex mt-3">
                      <img src="images/client-profile.jpeg" className="clients_img" alt="client image" />
                      <div className="align-self-center ms-2">
                        <h4 className="clients_name">Wanda Vision</h4>
                        <div>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <div className="clients_carousel">
                      <p className="mb-0 carousel_text">
                        We are working closely with them and they are very
                        reliable and responsive. They are reliable and organised
                        and I trust them to deliver. When there is feedback, they
                        respond with a positive attitude and seem to really value
                        customer satisfaction.
                      </p>
                    </div>
                    <div className="align-self-center mt-3 ms-2">
                      <h4 className="clients_name">Ravi Shashtri</h4>
                      <div>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <div className="clients_carousel">
                      <p className="mb-0 carousel_text">
                        The communication was perfect. The team managed the
                        project very effectively across different time zones,
                        tracking their work carefully and transparently, while
                        being accommodating and responsive when changes were
                        required. They were very transparent, which helped ease
                        our worries about outsourcing. It was incredible.
                      </p>
                    </div>
                    <div className="align-self-center mt-3 ms-2">
                      <h4 className="clients_name">Salman bhai</h4>
                      <div>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <button className="carousel-control-prev carousel_btn carousel_btn_1" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span aria-hidden="true"><img src="images/Previous-Arrow.svg" alt="Previous-Arrow" />
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next carousel_btn carousel_btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span aria-hidden="true"><img src="images/next-Arrow.svg" alt="next-Arrow" /></span>
              <span className="visually-hidden">Next</span>
            </button>
          </Row>
        </div>
      </section>

      {/* ========= Let’s Get Connected ========= */}
      <section className="margin_top connect_space scrollreveal">
        <div className="let_space">
          <div className="common_text text-center weight_800 media_34 media_26">
            <span className="me-2">Let’s Get</span>
            <span className="bg_color_2 rounded-3 px-3">Connected</span>
          </div>
          <form className="mt-5">
            <Row >
              <Col md={6} >
                <span className="p-3">
                  <input type="text" className="form_control" placeholder="Name" required />
                </span>
                <span className="p-3">
                  <input type="email" className="form_control" placeholder="Email" required />
                </span>
                <span className="p-3">
                  <textarea className="form_control p-5 ps-3 pt-3 mb-4" id="exampleFormControlTextarea1" rows={3} placeholder="Message" required defaultValue={""} />
                </span>
                <button className="btn btn_1 rounded-pill weight_500 fs-6 d-block mx-auto">
                  Send
                </button>
              </Col>
              <Col md={6} className=" ps-5 align-self-center media_form">
                <div className="mb-3">
                  <a href="js:">
                    <img src="images2/skype.png" alt="skype" className="me-3" />
                    <span className="common_text_1">skypetest77</span>
                  </a>
                </div>
                <div className="mb-3">
                  <a href="js:">
                    <img src="images2/email.png" alt="email" className="me-3" />
                    <span className="common_text_1">info@xcodethemes.in</span>
                  </a>
                </div>
                <div className="mb-3">
                  <a href="js:">
                    <img src="images2/call.png" alt="phone" className="me-3" />
                    <span className="common_text_1">9510673499</span>
                  </a>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </section>
    </div>

  )
}

export default About
