import React from "react";
import "./about.css";
import AboutImage from "../../assets/alt2.jpeg";
import CV from "../../assets/Document1.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImage} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veniam
            magni porro eius sit architecto fugiat, in accusantium magnam, fugit
            laborum consectetur nostrum tenetur vel!
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV &nbsp;
            <i className="bx bx-file"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
