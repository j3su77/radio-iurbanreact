import { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../context/Context";

import { RiLeafLine, RiCloseLine, RiMoonFill, RiSunFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { GiColombianStatue } from "react-icons/gi";

import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
//  import '../assets/js/main';
const Navbar = () => {
  const { user, apiUrlImg, dispatch } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [openUser, setOpenUser] = useState(false);
  const container = useRef(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("selected-theme") || "light"
  );
  const [scrolledTrue, setScrolledTrue] = useState(false);

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
    if (scrolled > 80) {
      setScrolledTrue(true);
    } else if (scrolled <= 80) {
      setScrolledTrue(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  const handleButtonClick = () => {
    setOpenUser(!openUser);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setOpenUser(false);
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <header
        className={`header ${scrolledTrue && "scroll-header"}`}
        id="header"
      >
        <nav className="nav container">

         

              {openUser && (
                <div class="nav__user-dropdown"  ref={container}>
                  <ul>
                    <div className="nav__user-content-username">
                      {user.username}
                    </div>
                    <div  className=
                        "nav__user-item">

                    <Link to="/editcarousel" className={"nav__user-item"}>
                      Nuevo post
                    </Link>
                    </div>

                    <div
                      onClick={handleLogout}
                      className={
                        "nav__user-item"
                      }
                    >
                       Cerrar sesión
                    </div>
                  </ul>
                </div>
              )}
            
        

          <div className={`nav__menu  ${open && "show-menu"} `} id="nav-menu">
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

            </ul>

            {open && (
              <div className="nav__close" id="nav-close">
                <RiCloseLine onClick={handleClick} />
              </div>
            )}
          </div>

          {/* -----------item 1------------- */}
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
          </div>

           {/* -----------item 2------------- */}
           <div className="nav__content-userandlogo">
          <Link to="/" className="nav__logo">
            {/* <RiLeafLine classNameName="nav__logo-icon" /> */}
            <GiColombianStatue className="nav__logo-icon" />
            iUrban Radio
          </Link>

          {user && (
            <div className="nav__user">
              <img
                onClick={handleButtonClick}
                className="nav__user-img"
                src={
                  // user && user.profilePic
                  //   ? apiUrlImg + user.profilePic
                  //   : 
                  "https://www.uic.mx/posgrados/files/2018/05/default-user.png"
                }
                alt=""
              />
        
          </div>)}
          </div>


          {/* -----------item 3------------- */}
          <div className="nav__toggle" id="nav-toggle">
              <FaBars onClick={handleClick} />
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
