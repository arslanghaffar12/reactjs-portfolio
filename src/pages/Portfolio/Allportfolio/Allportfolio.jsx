import React, { useState } from "react";
import pic1 from "../../../assets/shoe.jpg";
import pic2 from "../../../assets/house.jpg";
import pic3 from "../../../assets/boat.jpg";
import pic4 from "../../../assets/pic4.jpg";
import "./Allportfolio.scss";
import { Pagination } from "antd";

const Allportfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;

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

  const currentData = muportcard.slice(startIdx, endIdx);

  return (
    <div className="main_allportfolio">
      <div className="container">
        <div className="top_port">
          <div className="left_port">
            <div className="port">- PROJECTS</div>
            <div className="port_title">My completed works</div>
          </div>
        </div>
        <div className="main_allportcard">
          {currentData.map((e, index) => {
            return (
              <div className="portfolio_card" key={index}>
                <div className="porfolio_img">
                  <img src={e.img} alt="Image Error" />
                </div>
                <div className="sub_title">{e.subtitle}</div>
                <div className="portcard_title">{e.title}</div>
              </div>
            );
          })}
        </div>
        <Pagination
          current={currentPage}
          total={muportcard.length}
          pageSize={pageSize}
          onChange={onChangePage}
          style={{ marginTop: "16px", textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default Allportfolio;
