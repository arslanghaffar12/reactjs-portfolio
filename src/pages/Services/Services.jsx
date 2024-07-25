import React, { useState } from "react";
import "./Services.scss";
import { GoArrowRight } from "react-icons/go";
import pic from "../../assets/videobg.jpg";
import { Button, Modal } from "antd";

const Services = () => {
    const [modal2Open, setModal2Open] = useState(false);

    const servicesCard = [
        {
            title: "Web Design",
            para: "Web development is the process of building, programming...",
        },
        {
            title: "UI/UX Design",
            para: "Web development is the process of building, programming...",
        },
        {
            title: "Mobile Application",
            para: "Web development is the process of building, programming...",
        },
        {
            title: "User Research",
            para: "Web development is the process of building, programming...",
        },
        {
            title: "Animation",
            para: "Web development is the process of building, programming...",
        },
        {
            title: "Game Development",
            para: "Web development is the process of building, programming...",
        },
    ];
    const okButtonProps = {
        className: 'ok_btn', 
      };
    
      const cancelButtonProps = {
        className: 'cancel_btn',
      };
    return (
        <div className="main_services">
            <div className="container">
                <Modal
                    centered
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}
                    okButtonProps={okButtonProps}
                    cancelButtonProps={cancelButtonProps}
                >
                    <iframe
                        width={"100%"}
                        height={340}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        frameborder="0"
                        allowfullscreen="true"
                        src="https://www.youtube.com/embed/Yuz55WqWvN0?showinfo=0"
                    ></iframe>
                </Modal>
                <div className="top_sec">
                    <div className="left_text">
                        <div className="page_title">- SERVICES</div>
                        <h3 className="services_title">My Services</h3>
                    </div>

                    <div className="email">arslanghaffar21@gmail.com</div>
                </div>

                <div className="service_cardMain">
                    {servicesCard.map((e, index) => {
                        return (
                            <div className="service_card" key={index}>
                                <div className="number">0{index + 1}</div>
                                <div className="card_title">{e.title}</div>
                                <div className="card_para">{e.para}</div>
                                <div className="read_more">
                                    Read More <GoArrowRight />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="video_bg">
                    <div className="overlay"></div>
                    <span onClick={() => setModal2Open(true)} className="play">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={18}
                            viewBox="0 0 15 18"
                            fill="none"
                            className="svg replaced-svg"
                        >
                            <path
                                d="M14.4462 10.6965C14.3614 10.7835 14.0414 11.1555 13.7433 11.4615C11.9956 13.386 7.43643 16.536 5.05017 17.4975C4.68777 17.652 3.77155 17.979 3.28203 18C2.81296 18 2.36581 17.892 1.93911 17.673C1.40721 17.367 0.980516 16.8855 0.746712 16.317C0.596201 15.9225 0.362397 14.742 0.362397 14.721C0.128592 13.4295 0 11.331 0 9.012C0 6.8025 0.128592 4.7895 0.320019 3.4785C0.341939 3.4575 0.575743 1.9905 0.831466 1.488C1.30054 0.57 2.21676 0 3.19727 0H3.28203C3.9206 0.0225 5.26352 0.5925 5.26352 0.6135C7.52119 1.5765 11.9752 4.572 13.7652 6.5625C13.7652 6.5625 14.2694 7.074 14.4886 7.3935C14.8305 7.8525 15 8.421 15 8.9895C15 9.624 14.8086 10.215 14.4462 10.6965"
                                fill="#5D3BEE"
                            />
                        </svg>
                    </span>
                    {/* <img src={pic} alt="Image Error" /> */}
                    {/* <div className="into" onClick={() => setModal2Open(true)}>
                        Intro Video
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Services;
