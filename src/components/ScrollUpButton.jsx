import { useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";
import "../assets/css/scrollupbutton.css";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <a className={`scrollup ${visible && "show-scroll"}`} id="scroll-up">
      <RiArrowUpLine className="scrollup__icon" />
    </a>
  );
};

export default ScrollUpButton;
