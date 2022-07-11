import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import Slides from "./Slides";

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
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
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
