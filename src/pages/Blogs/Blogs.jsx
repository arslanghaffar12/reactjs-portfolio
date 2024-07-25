import React, { useState } from "react";
import { Pagination } from "antd";
import "./Blogs.scss";
import { Link } from "react-router-dom";

const cardsData = [
  {
    imageUrl:
      "https://images.pexels.com/photos/18817905/pexels-photo-18817905/free-photo-of-nice-food-table-with-bread-basket.jpeg",
    heading: "The taste of bread in Turkey.",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10964383/pexels-photo-10964383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Some days with nature of Neelum.",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/7675398/pexels-photo-7675398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Want a Good laptop for coding?",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/14754582/pexels-photo-14754582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Cold coffee is good in summer?",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/18132119/pexels-photo-18132119/free-photo-of-panorama-from-skypoint-observation-deck-gold-coast-queensland-australia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Karachi is the symbol of romance.",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/19596239/pexels-photo-19596239/free-photo-of-alpha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Blacks is always kings of Jazz Records.",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/18515152/pexels-photo-18515152/free-photo-of-ripe-peaches-against-a-pastel-colored-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Peaches are good for healthy skin.",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/19590358/pexels-photo-19590358/free-photo-of-hot-air-balloons-floating-over-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Is Turkey is a hub of air baloons?",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/14927639/pexels-photo-14927639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "And finally 2023 is over how was it?",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/15352329/pexels-photo-15352329/free-photo-of-farfalloni.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Salad for weight loss is good enough?",
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/19467250/pexels-photo-19467250/free-photo-of-hand-over-table-with-cappuccino-and-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: 'Discussion of "My Care" in Gloria Jeans?',
    link:"/blogdetail"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/18821950/pexels-photo-18821950/free-photo-of-herd-of-horses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Horse riding experience in Yemen.",
    link:"/blogdetail"
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 8;

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;

  const currentData = cardsData.slice(startIdx, endIdx);

  return (
    <div className="main_blogs">
      <div className="container">
        <div className="left_port">
          <div className="port">- PROJECTS</div>
          <div className="port_title">Recent completed works</div>
        </div>
        <section className="main_blog_cards">
          {currentData.map((e, index) => {
            return (
              <Link to={e.link} style={{textDecoration:"none",color:"unset"}}>
                <article className="blog_card" key={index}>
                  <div
                    className="card__img"
                    style={{ backgroundImage: `url(${e.imageUrl})` }}
                  />
                  <a className="card_link">
                    <div
                      className="card__img--hover"
                      style={{ backgroundImage: `url(${e.imageUrl})` }}
                    />
                  </a>
                  <div className="card__info">
                    <span className="card__category">Blog Post</span>
                    <h3 className="card__title">{e.heading}</h3>
                    <span className="card__by">
                      by
                      <a className="card__author" title="author">
                        Shahzaib Ali
                      </a>
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
        {/* <Pagination defaultCurrent={1} total={50} /> */}
        <Pagination
          current={currentPage}
          total={cardsData.length}
          pageSize={pageSize}
          onChange={onChangePage}
          style={{ marginTop: "16px", textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default Blogs;
