import React from "react";
import "./Everything.scss";

const Everything = () => {
  const experiencecard = [
    {
      date: "-2024 - Present",
      place: "-Phish Rod",
      title: "React js Developer",
      para: "Website development is the process of building, programming, coding and maintaining websites and web applications.",
    },
    {
      date: "-2023 - 2024",
      place: "-Adlytic AI",
      title: "MERN Stack Developer",
      para: "Website development is the process of building, programming, coding and maintaining websites and web applications.",
    },
    {
      date: "-2022 - 2022",
      place: "-Adlytic AI",
      title: "Software Developer",
      para: "Website development is the process of building, programming, coding and maintaining websites and web applications.",
    },
    {
      date: "-2020 - 2021",
      place: "-Adlytic AI.",
      title: "Developer",
      para: "Website development is the process of building, programming, coding and maintaining websites and web applications.",
    },
  ];

  return (
    <div className="main_everything">
      <div className="container">
        <div className="exper">- EXPERIENCE</div>

        <div className="exper_title">Everything about me!</div>

        <div className="experCard_main">
          {experiencecard.map((e, index) => {
            return (
              <div className="expercard" key={index}>
                <div className="short">
                  <div className="job">
                    <span className="yellowColor">{e.date}</span>
                    <h3>{e.title}</h3>
                  </div>
                  <div className="place">
                    <span>{e.place}</span>
                  </div>
                </div>
                <div className="text">
                  <p>{e.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Everything;
