import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { Autoplay, EffectFade } from "swiper/modules";

import Img1 from "../../../../images/rooms/1-lg.png";
import Img2 from "../../../../images/rooms/2-lg.png";
import Img3 from "../../../../images/rooms/3-lg.png";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "Room & Suites",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "Room & Suites",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "Room & Suites",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      effect="fade"
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      modules={[Autoplay, EffectFade]}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="h-full relative">
            <div className="absolute inset-0 z-10">
              <img
                className="w-full h-full object-cover"
                src={slide.bg}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 text-center px-4">
              <div className="text-sm uppercase tracking-[4px] mb-8 lg:mb-5">
                Just Enjoy and Relax
              </div>
              <h1 className="text-[24px] md:text-[32px] lg:text-[48px] xl:text-[64px] uppercase font-serif tracking-wide max-w-[80%] md:max-w-[60%] leading-tight">
                {slide.title}
              </h1>
              <Link to={"/rooms"}>
                {" "}
                <button className="mt-8 lg:mt-4 px-8 py-3 btn-primary text-white rounded-lg shadow-lg">
                  {slide.btnText}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
