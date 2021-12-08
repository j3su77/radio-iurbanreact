import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLeafLine,
} from "react-icons/ri";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer class="footer section">
      <div class="footer__content-logo container">
        <a href="#" class="footer__logo">
          <RiLeafLine classNameName="footer__logo-icon" />
          iUrban Radio
        </a>

        <div class="box">
          <div class="box-sm red"></div>
          <div class="box-sm orange"></div>
          <div class="box-sm yellow "></div>
          <div class="box-sm green "></div>
          <div class="box-sm blue "></div>
          <div class="box-sm purple"></div>
        </div>
      </div>
      <div class="footer__container container grid">
        <div class="footer__content">
          <h3 class="footer__title">Our Address</h3>

          <ul class="footer__data">
            <li class="footer__information">Soledad - Atlantico</li>
            <li class="footer__information">La Libertad - 43210</li>
            <li class="footer__information">123-456-789</li>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Contact Us</h3>

          <ul class="footer__data">
            <li class="footer__information">+999 888 777</li>

            <div class="footer__social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                class="home__social-link"
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                class="home__social-link"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                class="home__social-link"
              >
                <RiTwitterFill />
              </a>
            </div>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">We accept all credit cards</h3>

          <div class="footer__cards">
            <img src="assets/img/card1.png" alt="" class="footer__card" />
            <img src="assets/img/card2.png" alt="" class="footer__card" />
            <img src="assets/img/card3.png" alt="" class="footer__card" />
            <img src="assets/img/card4.png" alt="" class="footer__card" />
          </div>
        </div>
      </div>

      <p class="footer__copy">&#169; J3su. All rigths reserved</p>
    </footer>
  );
};

export default Footer;
