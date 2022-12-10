import { Swiper, SwiperSlide } from "swiper/react";
// import { useState, useEffect } from "react";
import JsonData from "../data/quotes.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import Slides from "./Slides";

const SwiperComponent = () => {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   setData(JsonData);
  // }, []);
  // console.log(data);

  return (
    <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {JsonData.map((d) => (
          <SwiperSlide className="d-flex justify-content-center align-items-center">
            <Slides data={d} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
