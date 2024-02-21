/* eslint-disable no-unused-vars */
import Items from "./Items";
import List from "./List";
import "./portfolio.css";
import { projects } from "../../Data";
import { useState } from "react";
import shapeOne from "../../assets/shape-1.png";
import { AnimatePresence } from "framer-motion";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

function Portfolio() {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = function (category) {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }

    const newProjectItem = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItem);
  };

  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Cases</span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Portfolio</span>
      </div>
    </section>
  );
}

export default Portfolio;
