import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Map from "./Map/Map";
import { Button, message } from "antd";
import "./Contact.scss";

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [contactVal, setContactval] = useState();
  const [messaged, setMessaged] = useState();

  const locations = [
    { lat: 37.7749, lng: -122.4194, title: "San Francisco" },
    { lat: 34.0522, lng: -118.2437, title: "Los Angeles" },
  ];

  const handlechange = (e) => {
    const { name, value } = e.target;
    setContactval((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

//   const handleAutoReply = () => {
//     emailjs
//       .send(
//         "service_u36tjyf",
//         "template_cbml9kb",
//         contactVal,
//         "bgx70Mnzn7E3YkLDa"
//       )
//       .then((response) => {
//         console.log("Auto-reply email sent successfully:", response);
//       })
//       .catch((error) => {
//         console.error("Error sending auto-reply email:", error);
//       });
//   };

  const handlesubmit = (e) => {
    if (
      contactVal &&
      contactVal.name &&
      contactVal.email &&
      contactVal.message
    ) {
      setMessaged(true);

      e.preventDefault();
      emailjs
        .send(
          "service_u36tjyf",
          "template_cbml9kb",
          contactVal,
          "bgx70Mnzn7E3YkLDa"
        )
        .then(
          (result) => {
            messageApi.open({
              type: "success",
              content: "Message is submitted successfully",
            });
            // handleAutoReply();
          },
          (error) => {
            messageApi.open({
              type: "error",
              content: error,
            });
          }
        );
    } else {
      messageApi.open({
        type: "error",
        content: "Please fill all fields",
      });
      setMessaged(false);
    }
  };

  return (
    <div className="main_contact">
      {contextHolder}
      <div className="container">
        <div className="top_contact">
          <div className="left_contact">
            <div className="port">- LET'S CONNECT</div>
            <div className="port_title">Get in touch</div>
            <div className="cont_para">
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want to run past me. You
              can contact anytime at 24/7
            </div>
            <div className="main_number">
              <div className="number">+92 320 41 70775</div>
              <div className="number">arslanghaffar21@gmail.com</div>
              <div className="number">Muslim Town, Lahore Pakistan</div>
            </div>
          </div>
          <div className="right_contact">
            <input
              style={{ borderColor: messaged === false ? "red" : "" }}
              name="name"
              placeholder="Enter your name"
              onChange={(e) => handlechange(e)}
            />
            <input
              style={{ borderColor: messaged === false ? "red" : "" }}
              name="email"
              placeholder="Enter email"
              onChange={(e) => handlechange(e)}
            />
            <textarea
              style={{ borderColor: messaged === false ? "red" : "" }}
              name="message"
              placeholder="Write something..."
              onChange={(e) => handlechange(e)}
            />
            <button className="primary_btn" onClick={handlesubmit}>
              Submit now
            </button>
          </div>
        </div>
        <div className="bottom_contact">
          <Map locations={locations} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
