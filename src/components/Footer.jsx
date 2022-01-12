import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import "../assets/css/footer.css";
import IurbanSvg from "./svg/IurbanSvg";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__content-logo container">
        <a href="!#" className="footer__logo">
        <IurbanSvg className="nav__logo-icon" />
          iUrban Radio
        </a>

        <div className="box">
          <div className="box-sm red"></div>
          <div className="box-sm orange"></div>
          <div className="box-sm yellow "></div>
          <div className="box-sm green "></div>
          <div className="box-sm blue "></div>
          <div className="box-sm purple"></div>
        </div>
      </div>
      <div className="footer__container container grid">
        <div className="footer__content">
          <h3 className="footer__title">Our Address</h3>

          <ul className="footer__data">
            <li className="footer__information">Soledad - Atlantico</li>
            <li className="footer__information">La Libertad - 43210</li>
            <li className="footer__information">123-456-789</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contactanos</h3>

          <ul className="footer__data">
            <li className="footer__information">+999 888 777</li>

            <div className="footer__social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home__social-link"
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.instagram.com"
                rel="noreferrer noopener"
                className="home__social-link"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home__social-link"
              >
                <RiTwitterFill />
              </a>
            </div>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Lorem ipsum, dolor sit amet consectetur adipisicing.</h3>

          {/* <div className="footer__cards">
            <img src="assets/img/card1.png" alt="" className="footer__card" />
            <img src="assets/img/card2.png" alt="" className="footer__card" />
            <img src="assets/img/card3.png" alt="" className="footer__card" />
            <img src="assets/img/card4.png" alt="" className="footer__card" />
          </div> */}
        </div>
      </div>

      <p className="footer__copy">&#169; {new Date().getFullYear()} J3su. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
