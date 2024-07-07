/* eslint-disable no-unused-vars */

/////////////////////////////////////////////////////
//     Used google sheets and sheet.best as a DB
/////////////////////////////////////////////////////

import { useState } from "react";
import "./contact.css";
import {
  FaRegAddressBook,
  FaRegUser,
  FaRegMap,
  FaRegEnvelope,
} from "react-icons/fa";
import axios from "axios";
import shapeOne from "../../assets/shape-1.png";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    axios
      .post(
        "https://sheet.best/api/sheets/e169d09e-949a-437f-82b6-44290ee5e65b",
        form
      )
      .then((response) => {
        console.log(response);
        setForm({ name: "", email: "", subject: "", message: "" });
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me</h2>
      <p className="section__subtitle">
        Let&lsquo;s <span>Talk About Ideas</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__contect">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">-------------</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>
            <h3 className="contact__card-title">Freelance</h3>
            <p className="contact__card-data">Available Right Now</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">naeemaziyadk@gmail.com</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>
            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data">+91 97465 17082</p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="label contact__form-tag text-cs">
                Full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label className="label contact__form-tag text-cs">
                Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="contact__form-input"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <label className="label contact__form-tag text-cs">
              Subject <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="label contact__form-tag text-cs">
              Message <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="contact__form-input"
            ></textarea>
          </div>

          <div className="contact__submit">
            <p>* Accept the terms and conditions</p>
            <button type="submit" className="btn text-cs">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Contact Me</span>
      </div>
    </section>
  );
}

export default Contact;
