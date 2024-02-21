/* eslint-disable no-unused-vars */
import "./services.css";
import { services } from "../../Data";
import { FaArrowRight } from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">Waht I Do</h2>
      <p className="section__subtitle">
        My <span>Services</span>
      </p>

      <Swiper
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper"
      >
        {services.map(({ name, title, description, id }, index) => {
          return (
            <SwiperSlide className="services__item card card-one" key={id}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <a href="#pricing" className="link">
                See Pricing <FaArrowRight className="link__icon"></FaArrowRight>
              </a>
              <img src={shapeTwo} className="shape c__shape"></img>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Services</span>
      </div>
    </section>
  );
}

export default Services;
