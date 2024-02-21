/* eslint-disable no-unused-vars */
import "./pricing.css";
import shapeTwo from "../../assets/shape-2.png";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";

function Pricing() {
  return (
    <section className="pricing section" id="section">
      <h2 className="section__title text-cs">Pricing</h2>
      <p className="section__subtitle">
        My <span>Price Board</span>
      </p>

      <div className="pricing__container container grid">
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Hourley Basis</span>
          <h3 className="pricing__price">
            39 <span>$</span> <em>Hour</em>
          </h3>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            tempora vero recusandae iure quibusdam soluta et eveniet! Similique
            aut minus, minima earum eaque possimus ullam doloremque dolorum
            facere. Laboriosam, temporibus.
          </p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Brand Design</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>
            </li>

            <li className="list__item">
              <del>Advertising</del>
            </li>

            <li className="list__item">
              <del>Photography</del>
            </li>
          </ul>
          <a className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
          <img src={shapeTwo} className="shape c__shape"></img>
        </div>

        <div className="pricing__item-wrapper">
          <span className="pricing__label text-cs">Popular</span>
          <div className="pricing__item card card-one">
            <span className="pricing__subtitle text-cs">Freelancing</span>
            <h3 className="pricing__price">
              259 <span>$</span> <em>Week</em>
            </h3>
            <p className="pricing__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              tempora vero recusandae iure quibusdam soluta et eveniet!
              Similique aut minus, minima earum eaque possimus ullam doloremque
              dolorum facere. Laboriosam, temporibus.
            </p>
            <ul className="pricing__list">
              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Brand Design</span>
              </li>

              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Web Development</span>
              </li>

              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Advertising</span>
              </li>

              <li className="list__item">
                <del>Photography</del>
              </li>
            </ul>
            <a className="btn pricing__btn text-cs">
              Start Project
              <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
            </a>
            <img src={shapeTwo} className="shape c__shape"></img>
          </div>
        </div>

        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Full Time</span>
          <h3 className="pricing__price">
            1,249 <span>$</span> <em>Month</em>
          </h3>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            tempora vero recusandae iure quibusdam soluta et eveniet! Similique
            aut minus, minima earum eaque possimus ullam doloremque dolorum
            facere. Laboriosam, temporibus.
          </p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Brand Design</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Advertising</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Photography</span>
            </li>
          </ul>
          <a className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
          <img src={shapeTwo} className="shape c__shape"></img>
        </div>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Pricing</span>
      </div>
    </section>
  );
}

export default Pricing;
