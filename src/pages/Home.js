import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* ========= banner ========= */}
            <section className="container-fluid banner_space">
                <Row className="media_banner_width">
                    <Col md={6} className="align-self-center text-center text-md-start text_space position-relative">
                        <div className="text_bg" />
                        <p className="fw-bold align-items-center d-block mx-auto mx-lg-0 text_18">
                            <a href="index.html" className="text-decoration-none font_color me-2">Home</a>
                        </p>
                        <div className="common_text">
                            <div className="me-2 text_64 weight_800 heading_line mb-2 media_heading">
                                Top Digital Solution Provider to Build
                            </div>
                            <span className="primary_color weight_800 heading_hover text_64 media_heading">Web / Mobile</span>
                        </div>
                        <p className="common_text_1 pr_100 pt-4 mt-2 pt-lg-3">
                            Create Cutting-edge Mobile and Web applications that delight consumers and help your company flourish
                        </p>
                        <Link to="/Contact" className="btn btn_1 rounded-pill fw-bold mt-4 mx-auto mx-lg-0 btn_shadow">Let's Work Together</Link>
                    </Col>
                    <Col md={6} className=" banner_bg banner_imgspace p-0">
                        <span className="bg_dot" />
                        <span className="bg_dot bg_dot1" />
                        <img src="images/banner-gragh.svg" alt="banner graph" className="bg_img" />
                        <div className="banner_box">
                            <img src="images/banner.png" alt="banner" className="banner_img" />
                        </div>
                    </Col>
                </Row>
            </section>

            {/* ========= counter ========= */}
            <section className="container counter_block scrollreveal">
                <Row className="counter_items" id="counter_id">
                    <Col lg={2} md={3} sm={6} className="count_rel media_count" id="myTargetElement">
                        <div className="d-flex count">
                            <h2 className="counter" />
                            <span>1000+</span>
                        </div>
                        <p>Projects</p>
                        <div className="count_img">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.02 222.69"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke-width:3px;}" }} /></defs><path className="cls-1" d="M91.48,3.55a14,14,0,0,1,14.06,0l83,47.89a14.05,14.05,0,0,1,7,12.17V159.4a14.05,14.05,0,0,1-7,12.17l-82.95,47.89a14.07,14.07,0,0,1-14.06,0L8.53,171.57a14.05,14.05,0,0,1-7-12.17V63.61a14.05,14.05,0,0,1,7-12.17Z" transform="translate(0 -0.16)" />
                            </svg>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={6} className="count_rel media_count" id="myTargetElement2">
                        <div className="d-flex count count2">
                            <h2 className="counter" />
                            <span>500+</span>
                        </div>
                        <p>Clients</p>
                        <div className="count_img">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.02 222.69"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke-width:3px;}" }} /></defs><path className="cls-1" d="M91.48,3.55a14,14,0,0,1,14.06,0l83,47.89a14.05,14.05,0,0,1,7,12.17V159.4a14.05,14.05,0,0,1-7,12.17l-82.95,47.89a14.07,14.07,0,0,1-14.06,0L8.53,171.57a14.05,14.05,0,0,1-7-12.17V63.61a14.05,14.05,0,0,1,7-12.17Z" transform="translate(0 -0.16)" />
                            </svg>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={6} className="count_rel media_count" id="myTargetElement3">
                        <div className="d-flex count count3">
                            <h2 className="counter" />
                            <span>16+</span>
                        </div>
                        <p>Awards Won</p>
                        <div className="count_img">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.02 222.69"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke-width:3px;}" }} /></defs><path className="cls-1" d="M91.48,3.55a14,14,0,0,1,14.06,0l83,47.89a14.05,14.05,0,0,1,7,12.17V159.4a14.05,14.05,0,0,1-7,12.17l-82.95,47.89a14.07,14.07,0,0,1-14.06,0L8.53,171.57a14.05,14.05,0,0,1-7-12.17V63.61a14.05,14.05,0,0,1,7-12.17Z" transform="translate(0 -0.16)" />
                            </svg>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={6} className="count_rel media_count" id="myTargetElement4">
                        <div className="d-flex count count4">
                            <h2 className="counter" />
                            <span className="count_plus">25+</span>
                        </div>
                        <p className>Team</p>
                        <div className="count_img">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.02 222.69"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke-width:3px;}" }} /></defs><path className="cls-1" d="M91.48,3.55a14,14,0,0,1,14.06,0l83,47.89a14.05,14.05,0,0,1,7,12.17V159.4a14.05,14.05,0,0,1-7,12.17l-82.95,47.89a14.07,14.07,0,0,1-14.06,0L8.53,171.57a14.05,14.05,0,0,1-7-12.17V63.61a14.05,14.05,0,0,1,7-12.17Z" transform="translate(0 -0.16)" />
                            </svg>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* ========= Who We Are ? ========= */}
            <section className="bg_color_1 padding_60 margin_top scrollreveal">
                <div className="container-fluid">
                    <Row className="text-center text-lg-start">
                        <Col md={6} className="align-self-center d-flex justify-content-center justify-content-lg-start media_whowe">
                            <div className="who_img">
                                <div className="who_bg" />
                                <img src="images/play-button.png" className="play_icon" alt="play button" />
                                <a href="https://youtu.be/lKPmEKSdXAo" className="who_vid">
                                    <img src="images/video-img.png" className="img-fluid border_radius_2 who_vidimg" alt="video-image" />
                                </a>
                            </div>
                        </Col>
                        <Col md={6} className=" margin_top_100 media_mt_50">
                            <div className="fw-bold primary2_color mb-2 text_18 text-md-start text-start">Who We Are ?</div>
                            <div className="common_text weight_800 media_34 media_30 text-md-start media_26 text-start">
                                <span className="me-0">
                                    Your Digital Partner for Inspiring Design and Dependable
                                    Solutions for Web, Mobile, and,
                                </span>
                                <span className="bg_color_2 rounded-3 px-3">Cloud</span>
                            </div>
                            <p className="common_text_1 my-4 pe-xl-5 text-md-start text-start">
                                Xcodethemes, India's top-notch and premier Web and Mobile App
                                Development Company with a global presence, is the first-rate
                                choice of clients globally. We are deeply committed to building
                                highly engaging apps that precisely match business needs and cater
                                to a wide range of projects, all with the goal of complete client
                                happiness in mind.
                            </p>
                            <Link to="/About" className="btn btn_1 rounded-pill fw-bold btn_shadow">Know More</Link>
                        </Col>
                    </Row>
                </div>
            </section>

            {/* ========= What We DO ========= */}
            <section className="container-fluid what_space margin_top scrollreveal">
                <Row>
                    <Col md={6} className="text-start text-lg-start what_we">
                        <div className="fw-bold primary2_color mb-2 text_18">What We DO</div>
                        <div className="common_text weight_800 media_34 media_30 media_26">
                            <span className="me-2">
                                Building Ultimate Digital Solutions for World
                            </span>
                            <span className="bg_color_2 rounded-3 px-3">Changers</span>
                        </div>
                        <p className="common_text_1 my-4">
                            We have a team of offshore specialised development professionals who
                            are experts in all key technologies, no matter what technology
                            you're working on. These freelancing offshore developers have
                            successfully constructed solutions using a variety of technologies
                            over the years.
                        </p>
                        <Link to="/Services" className="btn btn_1 rounded-pill fw-bold btn_shadow">Explore More</Link>
                    </Col>
                    <Col className="align-self-center margin_top_100">
                        <Row>
                            <Col md={6} className="pb-3">
                                <div className="card bg_color_1 p-4 pb-5">
                                    <div className="what_imgbox d-flex align-items-center justify-content-center">
                                        <img src="images/what_1.png" alt="Graphic Design" className="what_img" />
                                    </div>
                                    <p className="fw-bold mt-4 text_18 what_text media_16">Graphic Design</p>
                                </div>
                            </Col>
                            <Col md={6} className="pb-3">
                                <div className="card bg_color_1 p-4 pb-5">
                                    <div className="what_imgbox d-flex align-items-center justify-content-center">
                                        <img src="images/what_2.png" alt="Mobile App Development" className="what_img" />
                                    </div>
                                    <p className="fw-bold mt-4 text_18 what_text media_16">
                                        Mobile App Development
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} className=" pb-3">
                                <div className="card bg_color_1 p-4 pb-5">
                                    <div className="what_imgbox d-flex align-items-center justify-content-center">
                                        <img src="images/what_3.png" alt="Web Development" className="what_img" />
                                    </div>
                                    <p className="fw-bold mt-4 text_18 what_text media_16">Web Development</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="card bg_color_1 p-4 pb-5">
                                    <div className="what_imgbox d-flex align-items-center justify-content-center">
                                        <img src="images/what_4.png" alt="Digital Marketing" className="what_img" />
                                    </div>
                                    <p className="fw-bold mt-4 text_18 what_text media_16">
                                        Digital Marketing
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

            {/* ========= What we offer ========= */}
            <section className="margin_top padding_60 bg_color_1 scrollreveal media_what_space">
                <div className="what_offer">
                    <div className="offer_img" />
                </div>
                <div className="offer_space mt-3 media_we_ms">
                    <div className="fw-bold primary2_color text-center mb-2 text_18">What we offer</div>
                    <div className="common_text text-center weight_800 mb-5 media_34 media_30 media_24">
                        Technologies We
                        <span className="bg_color_2 rounded-3 px-3">Expertise</span>
                    </div>
                </div>
                <Row className=" mt-5 offer_space media_whatrow media_remove_mt">
                    <Col md={3} className=" media_block" />
                    <Col lg={2} md={2} className="media_row_line">
                        <img src="images/flutter.png" className="img-fluid offer_box" alt="flutter" />
                    </Col>
                    <Col lg={2} md={2} className="media_row_line">
                        <img src="images/wordpress.png" className="img-fluid offer_box" alt="wordpress" />
                    </Col>
                    <Col lg={2} md={2} className=" media_row_line">
                        <img src="images/figma.png" className="img-fluid offer_box" alt="figma" />
                    </Col>
                    <Col md={2} className=" media_row_line">
                        <img src="images/illustrator.png" className="img-fluid offer_box" alt="illustrator" />
                    </Col>
                </Row>
                <Row className=" mt-4 offer_space media_whatrow media_remove_mt">
                    <Col lg={1} md={4} />
                    <Col lg={2} md={2} className=" media_row_line offset-0 offset-lg-2">
                        <img src="images/photoshop.png" className="img-fluid offer_box" alt="photoshop" />
                    </Col>
                    <Col lg={2} md={2} className=" media_row_line">
                        <img src="images/android.png" className="img-fluid offer_box" alt="android" />
                    </Col>
                    <Col lg={2} md={2} className=" media_row_line">
                        <img src="images/design-xd.png" className="img-fluid offer_box" alt="design-xd" />
                    </Col>
                </Row>
                <Row className=" mt-4 offer_space media_whatrow media_remove_mt">
                    <Col lg={5} md={6}/>
                    <Col lg={2} md={2} className=" media_row_line">
                        <img src="images/sketch.png" className="img-fluid offer_box" alt="sketch" />
                    </Col>
                </Row>
            </section>

            {/* ========= How we work ========= */}
            <section className="container-fluid margin_top how_design how_space scrollreveal">
                <div className="fw-bold primary2_color text-center mb-2 text_18">How we work</div>
                <div className="common_text text-center weight_800 media_34 media_26">
                    How Your Off-Shore Development
                    <span className="bg_color_2 rounded-3 px-3">Team WORK</span>
                </div>
                <p className="common_text_1 my-4 how_para text-center">
                    The Moment you Hire your Offshore Development Team, they will complete
                    all of the stages necessary to design your specific solutions. Our team
                    of offshore specialised development experts has produced consistent
                    outcomes by following the methods outlined below throughout the years.
                </p>
                <Row className=" margin_top media_how_width">
                    <Col lg={3} md={6} >
                        <div className="shadow work_card">
                            <img src="images/how-1.svg" className="img-fluid work_img" alt="card icon" />
                            <div className="how_cardhead fw-bold mb-3">
                                On-Boarding The Right Team &amp; Tech
                            </div>
                            <p className="weight_500">
                                Handle everything for you, from vetting to selecting the best team
                                members and technology preferred.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="margin_top2_100">
                        <div className="shadow work_card">
                            <img src="images/how-2.svg" className="img-fluid work_img" alt="card icon" />
                            <div className="how_cardhead fw-bold mb-3">Sprint Planning</div>
                            <p className="weight_500">
                                A Sprint Roadmap is the collective group effort where the core
                                team works together to clarify issues and ensure a common
                                understanding.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className=" margin_top_100">
                        <div className="shadow work_card">
                            <img src="images/how-3.svg" className="img-fluid work_img" alt="card icon" />
                            <div className="how_cardhead fw-bold mb-3">Tech Architecture</div>
                            <p className="weight_500">
                                Decoupling the code to allow your offshore development team to
                                operate more quickly and independently.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className=" margin_top_100">
                        <div className="shadow work_card">
                            <img src="images/how-4.svg" className="img-fluid work_img" alt="card icon" />
                            <div className="how_cardhead fw-bold mb-3">
                                Code Reviews, Demos and Standups
                            </div>
                            <p className="weight_500">
                                Weekly reviews, demos, and standups ensure that team members and
                                the client are in sync.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Link to="/Services" className="btn btn_1 rounded-pill fw-bold mt-5 how_btn d-block mx-auto">Explore More</Link>
            </section>

            {/* ========= Digital Products ========= */}
            <section className="product_bg margin_top scrollreveal">
                <div className="container">
                    <div className="common_text text-center weight_800 media_34 media_30 media_26">
                        <span className="me-0">Let's Convert your Dream into Great Digital</span>
                        <span className="bg_color_2 rounded-3 px-3">Products</span>
                    </div>
                    <p className="common_text_1 text-center my-5">
                        Dreamt a Digital Solution but don't know where to begin? We specialise
                        in full-stack solutions, and our qualified experts are ready to assist
                        you at every stage of the process, from product conception through
                        maintenance and support. We help you identify your needs and code your
                        ideas by turning them into viable, market-ready digital solutions,
                        whether web front-end or back-end, native app or cross-platform.
                    </p>
                    <Link to="/Contact" className="btn btn_1 rounded-pill fw-bold d-block mx-auto digital_btn">Hire your Dream Team NOW</Link>
                </div>
            </section>

            {/* ========= Why Choose US ========= */}
            <section className="container margin_top why_us scrollreveal">
                <div className="common_text weight_800 text-center media_34 media_26">
                    <span className="me-2">Why</span>
                    <span className="bg_color_2 rounded-3 px-3">Choose US</span>
                </div>
                <p className="common_text_1 text-center my-4">
                    In this competitive world, many companies offer similar solutions, which
                    has given rise to a demand for differentiation. We measure every
                    delivery step down to the smallest details in our dedication to provide
                    top-notch services to our clients. We're proud to bring on the Key
                    Differentiators that help us stand out of the competition.
                </p>
                <Row className=" margin_top media_whyus_width">
                    <Col lg={4} md={6} className=" media_whyus_width">
                        <div className="shadow work_card why_card">
                            <img src="images/why-1.svg" className="img-fluid work_img img_width_2" alt="card icon" />
                            <div className="text_18 fw-bold mb-3">
                                We Anticipate the Future
                            </div>
                            <p className="weight_500">
                                At the time of delivery, we analyse the target audience, your
                                present and near-future requirements, and any possible demands.
                                Our experience across many platforms ensures dependability
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className=" margin_top2_100 media_whyus_width">
                        <div className="shadow work_card why_card">
                            <img src="images/why-2.svg" className="img-fluid work_img img_width_2" alt="card icon" />
                            <div className="text_18 fw-bold mb-3">
                                We Value Human Intelligence
                            </div>
                            <p className="weight_500">
                                We strongly think that our people are our most valuable asset,
                                which is reflected in our hiring process. We have a large pool of
                                multidisciplinary professionals in our talent pool
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className=" margin_top_100 media_how_mt media_whyus_width">
                        <div className="shadow work_card why_card">
                            <img src="images/why-3.svg" className="img-fluid work_img img_width_2" alt="card icon" />
                            <div className="text_18 fw-bold mb-3">
                                We Envision the Competence
                            </div>
                            <p className="weight_500">
                                When the sea is calm, anyone can control the helm. We've become
                                stronger as a result of surviving severe competition and market
                                turbulence
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="margin_top media_whyus_width">
                        <div className="shadow work_card why_card">
                            <img src="images/why-4.svg" className="img-fluid work_img img_width_2" alt="card icon" />
                            <div className="text_18 fw-bold mb-3">We Promise to Deliver</div>
                            <p className="weight_500">
                                We've done it before, and we know how to do it again. This
                                understanding boosts our confidence and motivates us to provide
                                guaranteed services.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className=" margin_top media_whyus_width">
                        <div className="shadow work_card why_card">
                            <img src="images/why-5.svg" className="img-fluid work_img img_width_2" alt="card icon" />
                            <div className="text_18 fw-bold mb-3">We Build a Partnership</div>
                            <p className="weight_500">
                                Our employees see themselves as an extension of your company. Our
                                viewpoint is similar to yours, and we use it to help your company
                                reach new heights.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className=" margin_top media_whyus_width">
                        <div className="shadow work_card why_card">
                            <img src="images/why-6.svg" className="img-fluid work_img img_width_2" alt="card icon" />
                            <div className="text_18 fw-bold mb-3">We Create Synergy</div>
                            <p className="weight_500">
                                The entire design and development cycles are oiled by our project
                                management staff. It uses modern strategies to accomplish
                                demanding deadlines while incorporating optimal resource
                                allocation
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* ========= Client Testimonials ========= */}
            <section className="bg_color_1 padding_60 margin_top scrollreveal">
                <div className="container-fluid px-5 media_client_space">
                    <div className="fw-bold primary2_color mb-2 text-center text_18">
                        Client Testimonials
                    </div>
                    <div className="common_text text-center weight_800 media_34 media_26">
                        <span className="me-2">What Our</span>
                        <span className="bg_color_2 rounded-3 px-3">Clients Say</span>
                    </div>
                    <Row className=" mt-5 media_client_width">
                        <Col lg={6}  className="align-self-center">
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
                                        <div className="align-self-center mt-3 ms-2 text-start">
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
                                        <div className="align-self-center mt-3 ms-2 text-start">
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

            {/* ========= Our Blog ========= */}
            <section className="container-fluid margin_top our_blog scrollreveal">
                <div className="fw-bold primary2_color text-center mb-2 text_18">Our Blog</div>
                <div className="common_text text-center weight_800 media_34 media_26">
                    <span className="me-2">News &amp;</span>
                    <span className="bg_color_2 rounded-3 px-3">Article</span>
                </div>
                <Row className=" mt-5">
                    <Col lg={4} md={6} >
                        <div className="blog_card">
                            <div className="blog_imgbox">
                                <img src="images/blog-1.png" className="card-img-top img-fluid blog_img" alt="blog image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title fs-5 fw-bold mb-3">
                                    Single Page Application Development: Why Enterprises Should
                                    Consider
                                </div>
                                <span className="blog_date text_18 weight_500">September 15, 2021</span>
                                <p className="weight_500 my-3 card-text">
                                    Single-page applications (SPA) technology is today, the de facto
                                    standard for creating modern web applications. Because of the...
                                </p>
                                <a href="js:" className="primary2_color blog_read fw-bold text-decoration-none">
                                    Read More<i className="fa-solid fa-arrow-right ms-1" />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="mt-lg-0 media_blog_mt2">
                        <div className="blog_card">
                            <div className="blog_imgbox">
                                <img src="images/blog-2.jpeg" className="card-img-top img-fluid blog_img" alt="blog image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title fs-5 fw-bold mb-3">
                                    Progressive Web Application Development: Why Businesses Should
                                </div>
                                <span className="blog_date text_18 weight_500">September 15, 2021</span>
                                <p className="card-text weight_500 my-3">
                                    Imagine a website that offers a seamless smartphone user
                                    experience without needing you to develop across all
                                    different...
                                </p>
                                <a href="js:" className="primary2_color blog_read fw-bold text-decoration-none">Read More<i className="fa-solid fa-arrow-right ms-1" /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="media_blog_mt">
                        <div className="blog_card">
                            <div className="blog_imgbox">
                                <img src="images/blog-3.jpeg" className="card-img-top img-fluid blog_img" alt="blog image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title fs-5 fw-bold mb-3">
                                    Secrets of Successful Payment Gateway Integration in Mobile
                                    Application
                                </div>
                                <span className="blog_date text_18 weight_500">September 15, 2021</span>
                                <p className="card-text weight_500 my-3">
                                    Do you wish to discover how and why you should integrate a
                                    payment gateway in the app that would elevate user engagement?
                                    If...
                                </p>
                                <a href="js:" className="primary2_color blog_read fw-bold text-decoration-none">Read More<i className="fa-solid fa-arrow-right ms-1" /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* ========= Let’s Discuss Your Project ========= */}
            <section className="margin_top form_space scrollreveal">
                <div className="common_text text-center weight_800 media_34 media_26">
                    <span className="me-2">Let's Discuss Your</span>
                    <span className="bg_color_2 rounded-3 px-3">Project</span>
                </div>
                <form className="shadow p-5 project_bg mt-5 text-start">
                    <Row className=" g-3 mb-4">
                        <Col lg={4} md={4} >
                            <input type="text" className="form_control" placeholder="Name" required />
                        </Col>
                        <Col lg={4} md={4} >
                            <input type="email" className="form_control" placeholder="Work Email" required />
                        </Col>
                        <Col lg={4} md={4}>
                            <input type="tel" maxLength={10} className="form_control" placeholder="Phone Number" required />
                        </Col>
                    </Row>
                    <p className="common_text_1 mt-3">
                        How soon do you want to start the project?*
                    </p>
                    <div className="d-flex mb-4">
                        <div className="form-check me-4">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Within 8 weeks
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                More than 8 weeks
                            </label>
                        </div>
                    </div>
                    <p className="common_text_1 mt-3">
                        Which digital marketing services are you looking for?*
                    </p>
                    <div className="mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1"> Social Media Marketing </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2"> SEO Services </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck3"> Email Marketing </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck4" />
                            <label className="form-check-label" htmlFor="defaultCheck4"> Others </label>
                        </div>
                    </div>
                    <p className="common_text_1 mt-3">
                        Share your requirements*<span className="text-secondary"> ( minimum 150 characters ) </span>
                    </p>
                    <div className="mb-3">
                        <textarea className="form_control p-5 ps-3 pt-3 mb-4" id="exampleFormControlTextarea1" rows={3} placeholder="( You can add links to your shareable materials if any )" required defaultValue={""} />
                    </div>
                    <p className="common_text_1 mt-3">
                        We Appreciate Your Interest In Us. Please Select Your Area Of Interest
                    </p>
                    <div className="mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck5" />
                            <label className="form-check-label" htmlFor="defaultCheck5"> REQUEST FOR SERVICE </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck6" />
                            <label className="form-check-label" htmlFor="defaultCheck6"> REQUEST FOR PROPOSAL </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck7" />
                            <label className="form-check-label" htmlFor="defaultCheck7"> CAREERS </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck8" />
                            <label className="form-check-label" htmlFor="defaultCheck8"> STARTUP </label>
                        </div>
                    </div>
                    <button className="btn btn_1 rounded-pill fw-bold d-block mx-auto">
                        Submit Now
                    </button>
                </form>
            </section>
        </div>

    )
}

export default Home
