import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , { Autoplay, Pagination} from 'swiper';
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiArrowRightDownLine } from "react-icons/ri"
import parlanteImg from "../../assets/images/spikerpro.png"
import radioImg from "../../assets/images/oldradio.png"
import fireImg from "../../assets/images/fire.png"

import "./homesection.css"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


SwiperCore.use([Autoplay, Pagination  ]);


const HomeSection = () => {
    return (
        // <!--==================== HOME ====================-->
        <section class="home" id="home">

            
            <Swiper className="home__container container grid"
             spaceBetween={50}
             slidesPerView={1}
             pagination={{ clickable: true, el: ".swiper-pagination", }}
             loop={true}
             autoplay={{
                 delay: 3000,
                 disableOnInteraction: false
             }}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
            >
                {/* ---------------- slide 1 ---------------- */}
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover'}} className="swiperclass">
                <img src={radioImg} alt="" className="home__img" />
                
                <div class="home__data">
                    <h1 class="home__title">
                        Plants will make <br /> your life better
                    </h1>
                    <p class="home__description">
                        Create incredible plant design for your offices or apastaments. 
                        Add fresness to your new ideas.
                    </p>
                    <a href="#products" class="button button--flex">
                        Explore <RiArrowRightDownLine  className="button__icon" />
                    </a>
                </div>

                <div class="home__social">
                    <span class="home__social-follow">
                        Follow Us
                    </span>

                    <div class="home__social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" class="home__social-link">
                            <RiFacebookFill />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" class="home__social-link">
                            < RiInstagramFill />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener" class="home__social-link">
                            < RiTwitterFill />
                        </a>
                    </div>
               
                </div>
                </SwiperSlide>
                {/* ---------------- slide 2 ---------------- */}

                <SwiperSlide  className="swiperclass">
                <img src={parlanteImg} alt="" className="home__img" />
                
                <div class="home__data">
                    <h1 class="home__title">
                        Plants will make <br /> your life better
                    </h1>
                    <p class="home__description">
                        Create incredible plant design for your offices or apastaments. 
                        Add fresness to your new ideas.
                    </p>
                    <a href="#products" class="button button--flex">
                        Explore <RiArrowRightDownLine  className="button__icon" />
                    </a>
                </div>
                </SwiperSlide>
                {/* ---------------- slide 3 ---------------- */}

                <SwiperSlide  className="swiperclass">
                <img src={fireImg} alt="" className="home__img" />
                
                <div class="home__data">
                    <h1 class="home__title">
                        Plants will make <br /> your life better
                    </h1>
                    <p class="home__description">
                        Create incredible plant design for your offices or apastaments. 
                        Add fresness to your new ideas.
                    </p>
                    <a href="#products" class="button button--flex">
                        Explore <RiArrowRightDownLine  className="button__icon" />
                    </a>
                </div>
                </SwiperSlide>
            

               
                <div class="swiper-pagination"></div>
            </Swiper>
            
        </section>
    )
}

export default HomeSection
