import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
 import { Swiper, SwiperSlide } from "swiper/react";
 import SwiperCore, { Autoplay, Pagination } from "swiper";
import { RiArrowRightDownLine } from "react-icons/ri";
// import parlanteImg from "../../assets/images/spikerpro.png";
// import radioImg from "../../assets/images/oldradio.png";
// import fireImg from "../../assets/images/fire.png";


import "./homesection.css";

import { Link } from "react-router-dom";
import  Spinner  from "../../components/Spinner";



SwiperCore.use([Autoplay, Pagination]);

const HomeSection = () => {

 

  const { apiURL, apiUrlImg } = useContext(Context);
  const [items, setItems] = useState([]);
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchItemHome = async () => {
      const res = await axios.get(apiURL + "/createitemhome");
      setItems(res.data);

  
      setIsLoading(false);
    };
    fetchItemHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    {
      isLoading ?  ( <Spinner />) : (
        // <!--==================== HOME ====================-->
        <section className="home" id="home">
      <Swiper
        className="home__container container grid"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
    
      >
          {items.map((item) => (
         
         <SwiperSlide key={item._id} className={`swiperclass ${item.reverse && "reverse"}`}>
           <img
             src={apiUrlImg + "home/" + item.photo}
             alt=""
             className="home__img"
           />

           <div className="home__data">
             <div className="home__text-home">
               <h1 className="home__title">{item.title}</h1>
               <p className="home__description">{item.description}</p>
             </div>
             
             { 
             item.button ? 
             item.linkbtn.includes("http") ? (
               <a href={item.linkbtn} target="_blank" rel="noreferrer noopener" className="button button--flex">
                 link <RiArrowRightDownLine className="button__icon" />
               </a>
             ) : (
               <Link to={item.linkbtn} className="button button--flex">
                 Explore <RiArrowRightDownLine className="button__icon" />
               </Link>
             ) : ""}
           </div>
         </SwiperSlide>
       ))}
      
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
      )
    }
    <div className="box">
          <div className="box-sm red"></div>
          <div className="box-sm orange"></div>
          <div className="box-sm yellow "></div>
          <div className="box-sm green "></div>
          <div className="box-sm blue "></div>
          <div className="box-sm purple"></div>
        </div>

  </>
   )
};

export default HomeSection;
