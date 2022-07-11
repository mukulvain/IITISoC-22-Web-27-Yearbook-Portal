import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/img1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img3.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img4.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img7.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/img1.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
