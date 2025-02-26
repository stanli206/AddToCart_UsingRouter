import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";

function CurrentOffers() {
  const images = [
    "/Clearance_Store._CB542298117_.jpg",
    "/1400x800_today_live._CB549732867_.gif",
    "/Deals_on_1_lakh_styles._CB542298117_.jpg",
    "/1500x300._CB550956210_.gif",
    "/Amazon_JanBAU_Gaming2_1400x800._SX1242_QL85_.jpg",
    "/Coupons._CB542298117_.jpg",
  ];

  return (
    <div className="pt-18">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              className="w-full h-96 object-contain"
              alt={`Loading..`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CurrentOffers;

// <div className="flex pt-25 sm:pt-16 md:pt-18">
//   <img
//     src="/pc_unrec._CB568620391_.gif"
//     className="h-40 w-full "
//     alt=""
//   />
// </div>
