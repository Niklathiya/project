import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      {/* ========= Banner ========= */}
      <section className="container-fluid service_banner_space bg_color_1">
        <Row>
          <Col lg={7} className=" align-self-center text-center text-lg-start position-relative">
            <div className="text_bg text_bg1" />
            <p className="d-flex align-items-center d-block mx-auto mx-lg-0 text_18">
              <Link to="/Home" className="text-decoration-none font_color me-2 weight_500">Home</Link>
              <span className="weight_800"> » Services</span>
            </p>
            <div className="common_text">
              <div className="me-2 text_64 weight_800 heading_line mb-2 media_heading text-start">
                India's Most Agile Web and App
              </div>
              <span className="primary_color weight_800 heading_hover text_64 media_heading media_26 media_24">Development Company</span>
            </div>
            <p className="common_text_1 pr_100 pt-4 mt-2 text-start">
              Xcodethemes, India’s most preferred Web and App development company,
              uses best practises to provide secure, resilient, and scalable
              Digital solution services to startups, SMEs, and businesses.
            </p>
            <p className="common_text_1 pr_100 text-start">
              With the competent delivery of creative, tailor-made Digital
              Solutions, our design and development company helps businesses
              transform and achieve a competitive edge.
            </p>
            <Link to="/Contact" className="btn btn_1 rounded-pill fw-bold mt-4 mx-auto mx-lg-0 btn_shadow">Contact Us</Link>
          </Col>
          <Col lg={5}>
            <div className="about_banner_img service_banner_img">
              <div className="banner_setting">
                <img src="images3/settings.png" alt="setting" className="set set_1" />
                <img src="images3/settings.png" alt="setting" className="set set_2" />
              </div>
              <img src="images3/banner.svg" alt="banner" />
            </div>
          </Col>
        </Row>
      </section>

      {/* ========= Solutions for Businesses ========= */}
      <section className="container-fluid px-5 margin_top solution solution_design scrollreveal media_remove_sol">
        <div className="common_text weight_800 text-md-center text-start mb-5 media_34 media_26">
          <span className="me-2">Solutions for</span>
          <span className="bg_color_2 rounded-3 px-3">Businesses</span>
        </div>
        <div className="d-flex justify-content-center">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active fw-bold" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                Technology Stack
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fw-bold" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                Full Stack
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fw-bold" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                Database
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fw-bold" id="pills-apps-tab" data-bs-toggle="pill" data-bs-target="#pills-apps" type="button" role="tab" aria-controls="pills-apps" aria-selected="false">
                Mobile Apps
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <Row className=" margin_top">
              <Col xl={3} md={6} >
                <div className="shadow solution_card">
                  <img src="images3/php.svg" className="img-fluid solution_img work_img" alt="php" />
                  <div className="text_24 weight_800 mb-3">PHP</div>
                  <p className="weight_500">
                    PHP stands for Hypertext Preprocessor and is an open-source server-side programming language. It is the most extensively used programming language for server-side scripting. PHP is utilised on approximately 25 million pages and is supported by over a million web servers. PHP is best suited for displaying dynamic web page content on the server side. The main benefit of PHP is that it is a lightweight and open source programming language that does not increase the cost of the product due to the lack of a licensing fee.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6} >
                <div className="shadow solution_card">
                  <img src="images3/laravel.svg" className="img-fluid solution_img work_img" alt="Laravel" />
                  <div className="text_24 weight_800 mb-3">Laravel</div>
                  <p className="weight_500">
                    Beauty and performance, combined with scalability and security, that’s the power of Laravel. Our team has extensive experience creating customised applications for enterprises of all sizes, based on the Laravel architecture.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/wordpress.svg" className="img-fluid solution_img work_img" alt="Wordpress" />
                  <div className="text_24 weight_800 mb-3">Wordpress</div>
                  <p className="weight_500">
                    Wordpress is the most popular blogging platform and a robust content management system that helps businesses, professionals, and bloggers to create gorgeous websites. WordPress is a robust website management software that allows for extensive customisation.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/magento.svg" className="img-fluid solution_img work_img" alt="Magento" />
                  <div className="text_24 weight_800 mb-3">Magento</div>
                  <p className="weight_500">
                    Magento is, by far, the most impressive open source E-commerce development platform. The Magento platform is used to create scalable web stores because of its MVC architecture. Magento is without a doubt one of the most popular e-commerce platforms available today. A Magento online store is the most important item you need if you want to drastically increase your sales.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <Row className=" margin_top">
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/node-js.svg" className="img-fluid solution_img work_img" alt="Node.js" />
                  <div className="text_24 weight_800 mb-3">Node.js</div>
                  <p className="weight_500">
                    Node.js is a cross-platform, open-source back-end JavaScript runtime environment that uses the V8 engine to execute JavaScript code outside of a web browser. Because of its single-threaded nature, Node. js is best suited for non-blocking, event-driven servers. It was created with real-time, push-based architectures in mind and is utilised for standard web sites and back-end API applications.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/react-js.svg" className="img-fluid solution_img work_img" alt="React.js" />
                  <div className="text_24 weight_800 mb-3">React.js</div>
                  <p className="weight_500">
                    ReactJS comes with a lot of benefits and being an open-source JavaScript library, ReactJS allows building strong online applications. It aids the development of fast, high-performing, and scalable single-page apps with its reusable UI components and reloading features. We are a reputable ReactJS development company dedicated to meeting the technological needs of clients all around the world.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/mern-stack.svg" className="img-fluid solution_img work_img" alt="MERN Stack" />
                  <div className="text_24 weight_800 mb-3">MERN Stack</div>
                  <p className="weight_500">
                    MERN Stack is a Javascript stack that makes full-stack web application deployment easier and faster. MongoDB, Express, React, and Node. js are the four technologies that make up the MERN Stack. It’s intended to make the development process go more smoothly.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/net.svg" className="img-fluid solution_img work_img" alt=".NET" />
                  <div className="text_24 weight_800 mb-3">.NET</div>
                  <p className="weight_500">
                    .Net is an open-source, cross-platform framework that was first released in the early 2000s. It has gone through multiple modifications since its debut and has evolved as one of the most versatile frameworks for building robust, functional, and dynamic web applications and websites. Because of its ease of use, security, and scalability, it has become the framework of choice for developers working on everything from simple websites to highly complex web-based systems.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <Row className=" margin_top">
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/Mysql.svg" className="img-fluid solution_img work_img" alt="Mysql" />
                  <div className="text_24 weight_800 mb-3">Mysql</div>
                  <p className="weight_500">
                    MySQL is now owned by Oracle.The database is open source and free, however there is a commercial licence available. MySQL has one significant advantage: it is free, is commonly included in shared hosting packages, and is simple to set up in a Linux, Unix, or Windows environment. If a web application requires more than a database, load balancing or sharding may be required.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/MongoDB.svg" className="img-fluid solution_img work_img" alt="MongoDB" />
                  <div className="text_24 weight_800 mb-3">MongoDB</div>
                  <p className="weight_500">
                    MogoDB is a document-oriented database that is free to use. It is once again the most popular noSQL database. MongoDB enables cross-platform functionality. The Apache open source licence governs its distribution. It employs a json-like schema with dynamic schemas to store the data. MongoDB supports sharding, which is the practice of storing data across multiple servers to enable very big data sets. It nevertheless provides enough read and write throughput even with massive amounts of data.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/DynamoDB.svg" className="img-fluid solution_img work_img" alt="DynamoDB" />
                  <div className="text_24 weight_800 mb-3">DynamoDB</div>
                  <p className="weight_500">
                    DynamoDB is an Amazon Web Services database system that enables key-valued cloud services and data structures. Users can use DynamoDB to benefit from auto-scaling, in-memory caching, backup, and restoration options for all of their internet-scale applications. DynamoDB manages data via hashing and B-trees. Data is first divided into different partitions by hashing the partition key upon arrival.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/ms-sql.svg" className="img-fluid solution_img work_img" alt="MS SQL Server" />
                  <div className="text_24 weight_800 mb-3">MS SQL Server</div>
                  <p className="weight_500">
                    SQL Server is a relational database management system developed by Microsoft (RDBMS). It is a full-featured database that is primarily intended to compete with Oracle Database (DB) and MySQL. IDS Logic knows how to grasp MS SQL Server and the applications it delivers better than the competition. We have successfully provided high-end Business Intelligence solutions based on Microsoft SQL Server data-warehouses to a number of enterprises throughout the world.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="tab-pane fade" id="pills-apps" role="tabpanel" aria-labelledby="pills-apps-tab">
            <Row className=" margin_top">
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/google-flutter.svg" className="img-fluid solution_img work_img" alt="Google Flutter" />
                  <div className="text_24 weight_800 mb-3">Google Flutter</div>
                  <p className="weight_500">
                    Flutter is a flexible, dynamic, and inventive framework for rapidly developing next-generation apps for platforms such as Android and iOS using a single code base. Flutter can be seen in apps that leverage the camera, geolocation, network, and third-party SDKs. All of these qualities are associated with the most recent cross-platform development standards, as demonstrated by the flutter application development framework.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/react-js.svg" className="img-fluid solution_img work_img" alt="React Native" />
                  <div className="text_24 weight_800 mb-3">React Native</div>
                  <p className="weight_500">
                    React Native Development is simple, quick, and effective, with a strong emphasis on the user interface, allowing applications to load quickly and smoothly. Facebook created the React Native framework. It’s one of the most popular open-source projects on Facebook. Although you aren’t creating a “mobile app” or even a “hybrid app” with React Native, you may create actual mobile applications that are comparable to those created with Swift or Java.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/ios.svg" className="img-fluid solution_img work_img" alt="Native IOS" />
                  <div className="text_24 weight_800 mb-3">Native IOS ( Swift Ui &amp; Obj. C)</div>
                  <p className="weight_500">
                    Native mobile app development entails creating apps for specific mobile operating systems, which customers can download from specialised app stores (such as the App Store or Google Play). If you want to make an app for iOS, you’ll need to use the programming languages Objective-C or Swift. Developing on Android, on the other hand, necessitates the use of Java or Kotlin.
                  </p>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className="shadow solution_card">
                  <img src="images3/android.svg" className="img-fluid solution_img work_img" alt="Native Android" />
                  <div className="text_24 weight_800 mb-3">Native Android ( JAVA &amp; Kotlin )</div>
                  <p className="weight_500">
                    The term “native app development” refers to the creation of a mobile app that is designed specifically for a single platform. The application was created using platform-specific programming languages and tools. The most straightforward way to construct a native Android app is to utilise Java or Kotlin, while C or C++ can also be used for Android development if you have an unique need.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* ========= Transforming Industries ========= */}
      <section className="digital_space margin_top bg_color_1 scrollreveal">
        <div className="container-fluid">
          <Row className=" text-center text-lg-start">
            <Col md={6} className=" mb-5 pt-3 pb-5">
              <div className="digital_imgbox">
                <div className="digi_dot digi_dot1" />
                <div className="digi_dot digi_dot2" />
                <div className="digi_dot digi_dot3" />
                <div className="digital_bgimg" />
                <img src="images2/digital-img.png" alt="our partner" />
              </div>
            </Col>
            <Col md={6} className="digital_text_space pt-5">
              <div className="common_text weight_800 media_34 media_26 text-start">
                <span className="me-0">Our Next-Gen Solutions are Transforming</span>
                <span className="bg_color_2 rounded-3 px-3">Industries</span>
              </div>
              <p className="common_text_1 my-4 padding_right_100 me-3 text-start">
                Our custom web and app development firm in India services all major sectors and offers the best solutions for their unique business requirements. We cover a wide range of industries as a leading Web and APp development company in India, including retail, eLearning, tour and travel, logistics, media &amp; entertainment, healthcare apps, CRM systems, and many others.
              </p>
              <Link to="/About" className="btn btn_1 rounded-pill fw-bold mt-2 mx-auto mx-lg-0 btn_shadow">Know More</Link>
            </Col>
          </Row>
        </div>
      </section>

      {/* ========= Working Process ========= */}
      <section className="working_space scrollreveal">
        <Row className=" media_col_remove">
          <Col xl={4}>
            <div className="working_bg">
              <div className="bg_over">
                <div className="working_bg_text">
                  <p className="weight_700 text_18 mb-2">Our Agile Development Methodology</p>
                  <p className="weight_800 text_36 font_color2">Our Working Process</p>
                  <span className="weight_500 font_color2">
                    We use agile and DevOps-enabled practises at Xcodethemes to assure rapid delivery of bug-free applications that meet your specific business needs. We keep clients informed at every level of the Web and App development process to guarantee that the project is progressing according to their specific needs.
                  </span>
                  <Link to="/Contact" className="btn btn_1 rounded-pill fw-bold mt-4 mx-auto mx-lg-0 btn_2">Contact Us</Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <Row className=" ps-5 ms-4 working_border media_remove_working">
              <Col md={5} className="  working_box working_box_1">
                <p className="common_text_1 lh-sm text_36 weight_800 media_24">On-Boarding The Right Team &amp; Tech</p>
                <span className="common_text_1 media_15">
                  Handle everything for you, from vetting to selecting the best team members and technology preferred.
                </span>
                <div className="working_no">
                  <img src="images3/one.png" alt="one" />
                </div>
              </Col>
              <Col md={5} className="  working_box working_box_2">
                <p className="common_text_1 lh-sm text_36 weight_800 media_24">Sprint Planning</p>
                <span className="common_text_1">
                  A Sprint Roadmap is the collective group effort where the core team works together to clarify issues and ensure a common understanding.
                </span>
                <div className="working_no">
                  <img src="images3/two.png" alt="two" />
                </div>
              </Col>
              <Col md={5} className="  working_box working_box_1">
                <p className="common_text_1 lh-sm text_36 weight_800 media_24">Tech <br /> Architecture</p>
                <span className="common_text_1">
                  Decoupling the code to allow your offshore development team to operate more quickly and independently.
                </span>
                <div className="working_no">
                  <img src="images3/three.png" alt="three" />
                </div>
              </Col>
              <Col md={5} className="  working_box working_box_2">
                <p className="common_text_1 lh-sm text_36 weight_800 media_24">Code Reviews, Demos and Standups</p>
                <span className="common_text_1">
                  Weekly reviews, demos, and standups ensure that team members and the client are in sync
                </span>
                <div className="working_no">
                  <img src="images3/four.png" alt="four" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      
      {/* ========= Discuss Project ========= */}
      <section className="bg_color_1 scrollreveal">
        <div className="discuss_space">
          <div className="common_text weight_800 mb-3 media_34 media_26">
            <span>Let's Discuss your</span>
            <span className="bg_color_2 rounded-3 px-3">Project</span>
          </div>
          <p className="common_text_1">
            Our Sales Specialists will contact you within 24 hours of receiving this form. They will then lead you in the right direction
          </p>
          <Link to="/Contact" className="btn btn_1 rounded-pill fw-bold mt-4 mx-auto mx-lg-0 btn_shadow">Contact Us</Link>
          <div className="discuss_bg">
            <div className="discuss_img" />
          </div>
        </div>
      </section>
    </div>

  )
}

export default Services
