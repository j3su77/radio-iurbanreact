import { useState, useEffect } from "react";
import { RiLeafLine, RiCloseLine, RiMoonFill, RiSunFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { GiColombianStatue } from "react-icons/gi";

import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
//  import '../assets/js/main';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("selected-theme") || "light"
  );
  const [scrolledTrue, setScrolledTrue] = useState(false)

  /*=============== OPEN/CLOSE MENU PHONE ===============*/
  const handleClick = () => {
    setOpen(!open);
  };

  /*=============== CHANGE THEME DARK/LIGHT ===============*/
  const changeTheme = () => {
    console.log(theme);
    setDark(!dark);

    localStorage.setItem("selected-theme", theme);
  };
  useEffect(() => {
    if (theme === "light") {
      setTheme("dark-theme");
      localStorage.setItem("selected-theme", theme);
      document.body.classList.add(theme);
      document.body.classList.remove("dark-theme");
    } else {
      setTheme("light");
      localStorage.setItem("selected-theme", theme);
      document.body.classList.add(theme);
      document.body.classList.remove("light");
    }
  }, [dark]);

/*=============== SCROLL NAV VIEW SHADOW ===============*/
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 80){
          setScrolledTrue(true)
        } 
        else if (scrolled <= 80){
          setScrolledTrue(false)
        }
      };
      window.addEventListener('scroll', toggleVisible);


      




  return (
    <>
      <header className={`header ${scrolledTrue && "scroll-header"}`} id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            {/* <RiLeafLine classNameName="nav__logo-icon" /> */}
            <GiColombianStatue classNameName="nav__logo-icon" />
            iUrban Radio
          </Link>

          <div className={`nav__menu ${open && "show-menu"} `} id="nav-menu">
            <ul className="nav__list" onClick={handleClick}>
              {/* <!-- _____home______ --> */}
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              {/* <!-- _____About______ --> */}
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              {/* <!-- _____Products______ --> */}
              <li className="nav__item">
                <a href="#products" className="nav__link">
                  Products
                </a>
              </li>
              {/* <!-- _____FAQs______ --> */}
              <li className="nav__item">
                <a href="#faqs" className="nav__link">
                  FAQs
                </a>
              </li>
              {/* <!-- _____Contact______ --> */}
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact Us
                </a>
              </li>
            </ul>

            {open && (
              <div className="nav__close" id="nav-close">
                <RiCloseLine onClick={handleClick} />
              </div>
            )}
          </div>

          <div className="nav__btns">
            {/* <!-- Theme change button --> */}
            {theme !== "light" ? (
              <RiMoonFill
                onClick={changeTheme}
                className="change-theme"
                id="theme-button"
                name="theme-button"
              />
            ) : (
              <RiSunFill
                onClick={changeTheme}
                className="change-theme"
                id="theme-button"
                name="theme-button"
              />
            )}

            <div className="nav__toggle" id="nav-toggle">
              <FaBars onClick={handleClick} />
            </div>
          </div>
        </nav>
      </header>

      {/* <Helmet>
        <script src="../assets/js/main.js"></script>
        
      </Helmet> */}
    </>
  );
};

export default Navbar;
