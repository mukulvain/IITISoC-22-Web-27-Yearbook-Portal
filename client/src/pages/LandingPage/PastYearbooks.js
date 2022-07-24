import { Swiper, SwiperSlide } from "swiper/react";
import YearbookCard from "../../components/YearbookCard";
import JsonData from "../../data/cards.json";
import "../../fonts.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";

const PastYearbooks = () => {
  return (
    <>
      <div id="pastyearbooks">
        <h1
          className="text-center my-5"
          style={{
            color: "grey",
            fontFamily: "Proza Libre, sans-serif",
          }}
        >
          Yearbooks
        </h1>
        <Swiper
          // slidesPerView={4}
          // spaceBetween={30}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {JsonData.map((d) => (
            <SwiperSlide className="d-flex justify-content-center align-items-center">
              <YearbookCard data={d} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PastYearbooks;
