import "./footer.css";

import { FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaInstagram />
          </a>
          <a href="" className="footer__social-link">
            <FaGithub />
          </a>
          <a href="" className="footer__social-link">
            <FaLinkedin />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>---</span>. All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>---</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
