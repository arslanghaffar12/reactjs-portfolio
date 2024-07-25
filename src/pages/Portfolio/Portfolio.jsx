import React, { useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import pic1 from "../../assets/shoe.jpg";
import pic2 from "../../assets/house.jpg";
import pic3 from "../../assets/boat.jpg";
import pic4 from "../../assets/pic4.jpg";
import partner1 from "../../assets/1.png";
import partner2 from "../../assets/2.png";
import partner3 from "../../assets/3.png";
import partner4 from "../../assets/4.png";
import partner5 from "../../assets/5.png";
import partner6 from "../../assets/6.png";
import partner7 from "../../assets/7.png";
import partner8 from "../../assets/8.png";
import client1 from "../../assets/client1.jpg";
import Slider from "react-slick";
import "./Portfolio.scss";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const testisettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
ltr:true,
    responsive: [
      {
        breakpoint: 1282,
        settings: {
          slidesToShow: 2.8,
        }
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 2.6,
        }
      },
      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2.4,
        }
      },
      {
        breakpoint: 1074,
        settings: {
          slidesToShow: 2.3,
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint:958,
        settings: {
          slidesToShow:2.7,
        }
      },
      {
        breakpoint:872,
        settings: {
          slidesToShow:2.5,
        }
      },
      
      {
        breakpoint:816,
        settings: {
          slidesToShow:2.3,
        }
      },
      {
        breakpoint:750,
        settings: {
          slidesToShow:2.1,
        }
      },
      {
        breakpoint:680,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint:650,
        settings: {
          slidesToShow:1.7,
        }
      },
      {
        breakpoint:564,
        settings: {
          slidesToShow:1.4,
        }
      },
      {
        breakpoint:480,
        settings: {
          slidesToShow:1,
        }
      },
      
    ]


  };

  const muportcard = [
    {
      img: pic1,
      subtitle: "VIMEO",
      title: "Firogo Majestic Ltd.",
    },
    {
      img: pic2,
      subtitle: "Soundcloud",
      title: "Creative Building",
    },
    {
      img: pic3,
      subtitle: "Modalbox",
      title: "Beautiful Boat",
    },
    {
      img: pic4,
      subtitle: "YOUTUBE",
      title: "New Technology",
    },
  ];

  const partners = [
    { img: partner1 },
    { img: partner2 },
    { img: partner3 },
    { img: partner4 },
    { img: partner5 },
    { img: partner6 },
    { img: partner7 },
    { img: partner8 },
  ];

  const testimonial = [
    {
      clientimg: client1,
      comment:
        "   Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming but the Marketify team helped me successfully.",
      clientname: "Alan Walker",
      role: "Sales Manager at Vivaco Shop",
    },
    {
      clientimg: client1,
      comment:
        "   Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming but the Marketify team helped me successfully.",
      clientname: "Alan Walker",
      role: "Sales Manager at Vivaco Shop",
    },
    {
      clientimg: client1,
      comment:
        "   Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming but the Marketify team helped me successfully.",
      clientname: "Alan Walker",
      role: "Sales Manager at Vivaco Shop",
    },
  ];

  return (
    <div className="main_portfolio">
      <div className="container">
        <div className="top_port">
          <div className="left_port">
            <div className="port">- PROJECTS</div>
            <div className="port_title">Recent completed works</div>
          </div>

          <div className="right_port">
            <div className="icon" onClick={prevSlide}>
              <MdOutlineKeyboardArrowLeft size={22} />
            </div>
            <div className="icon" onClick={nextSlide}>
              <MdOutlineKeyboardArrowRight size={22} />
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {muportcard.map((e, index) => {
            return (
              <div className="portfolio_card" key={index}>
                <div className="card_content">
                <div className="porfolio_img">
                  <img src={e.img} alt="Image Error" />
                </div>
                <div className="sub_title">{e.subtitle}</div>
                <div className="portcard_title">{e.title}</div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="btn_sec">
          <Link to='/allprojects' style={{ textDecoration: "none", color: "unset" }} >
            <button className="primary_btn">View all projects</button>
          </Link>
        </div>
      
<div className="partner_main">
<div className="left_port">
          <div className="port">- CLIENTS</div>
          <div className="port_title">Customers & clients</div>
        </div>
        <div className="partners_inner">
       
          <ul>
            {partners.map((e, index) => {
              return (
                <li key={index}>
                  <div className="list_inner">
                    <img src={e.img} alt="Image Error" />
                    <a className="anchor_link" a href="#" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
</div>

        <div className="main_testimonial">
          <div className="testi_subtitle">- TESTIMONIAL</div>
          <div className="testi_title">What client's say?</div>

          <Slider {...testisettings}>
            {testimonial.map((e, index) => {
              return (
                <div className="test_1" key={index}>
                  <div className="comment">{e.comment}</div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url={e.clientimg}
                        style={{
                          backgroundImage: `url(${e.clientimg})`,
                        }}
                      />
                    </div>
                    <div className="detail">
                      <h3>{e.clientname}</h3>
                    </div>
                  </div>
                  <p className="job">{e.role}</p>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* <div className="elisc_tm_testimonials">
          <div className="elisc_tm_title" data-position="center">
            <span>- Testimonial</span>
            <h3>What client's say?</h3>
          </div>
          <div className="testimonials_list">
            <ul className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-3840px, 0px, 0px)",
                    transition: "all 0.25s ease 0s",
                    width: "6720px",
                  }}
                >
                  <div className="owl-item cloned" style={{ width: "960px" }}>
                    <li>
                      <div className="text">
                        <p>
                          Really the Code Quality, Customer Support, and design
                          are awesome and its good support they are giving. They
                          give an instant solution to our needs. Really awesome.
                          I will strongly recommend to my friends.
                        </p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/2.jpg"
                            style={{
                              backgroundImage: 'url("img/testimonials/2.jpg")',
                            }}
                          />
                        </div>
                        <div className="detail">
                          <h3>Keita Smith</h3>
                        </div>
                      </div>
                      <p className="job">Senior Designer at Behance</p>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "960px" }}>
                    <li>
                      <div className="text">
                        <p>
                          Loved the template design, documentation,
                          customizability and the customer support from
                          Marketify team! I am a noob in programming but the
                          Marketify team helped me successfully.
                        </p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/3.jpg"
                            style={{
                              backgroundImage: 'url("img/testimonials/3.jpg")',
                            }}
                          />
                        </div>
                        <div className="detail">
                          <h3>Alan Walker</h3>
                        </div>
                      </div>
                      <p className="job">Sales Manager at Vivaco Shop</p>
                    </li>
                  </div>
                  <div className="owl-item" style={{ width: "960px" }}>
                    <li>
                      <div className="text">
                        <p>
                          I rarely like to write reviews, but the Marketify team
                          truly deserve a standing ovation for their customer
                          support, customisation and most importantly,
                          friendliness and professionalism.
                        </p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/1.jpg"
                            style={{
                              backgroundImage: 'url("img/testimonials/1.jpg")',
                            }}
                          />
                        </div>
                        <div className="detail">
                          <h3>John Doe</h3>
                        </div>
                      </div>
                      <p className="job">User Interface Design at PCL Lab</p>
                    </li>
                  </div>
                </div>
              </div>
        
            
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
