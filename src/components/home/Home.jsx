/* eslint-disable no-unused-vars */
import profileImg from "../../assets/naeema.jpg";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import "./home.css";
import { FaTwitter, FaDribbble, FaBehance, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>NAEEMA</span>
          </h1>
          <h1 className="home__title text-cs">
            ZIYAD
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Web Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                4 <b>+</b>
              </span>
              <span className="text-sm texs-cs">
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">330</span>
              <span className="text-sm texs-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} className="shape shape__1" />
            <img src={shapeTwo} className="shape shape__2" />
            <img src={shapeTwo} className="shape shape__3" />
          </div>

          <p className="home__text">
            
          </p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaLinkedin />
            </a>
            <a href="" className="home__social-link">
              <FaInstagram />
            </a>
            <a href="" className="home__social-link">
              <FaGithub />
            </a>
          </div>

          <div className="home__btns">
            <a href="" className="btn text-cs">
              Download CV
            </a>
            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Web Developer</span>
      </div>
    </section>
  );
}

export default Home;
