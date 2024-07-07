/* eslint-disable no-unused-vars */
import "./vol.css";
import { vol } from "../../Data";
import shapeOne from "../../assets/shape-1.png";

function Vol() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs">Volunteering</h2>
      <p className="section__subtitle">
        My <span>Volunteering Experiences</span>
      </p>

      <div className="skills__container container grid">
        {vol.map(({ name, percentage, description }, index) => {
          return (
            <div className="skills__item" key={index}>
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <p className="skills__description">{description}</p>
              </div>

              
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                >
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Skills</span>
      </div>
    </section>
  );
}

export default Vol;
