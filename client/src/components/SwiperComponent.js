import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const SwiperComp = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay:2500,
          disableOnInteraction: false
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="logo192.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="logo512.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="logo192.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="logo512.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="logo192.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="logo512.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="logo192.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="logo512.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="logo192.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComp