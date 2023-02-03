import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const lstCarousal = [
  {
    img: "https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Mobile_Banners_3_35e2b00f-7989-4a9e-9742-84e46480fefe_786x.progressive.png.jpg?v=1675145919",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Mobile_Banners_14_786x.progressive.png.jpg?v=1666952519",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Mobile_Banners_2_786x.progressive.png.jpg?v=1672636925",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Mobile_Banners_15_786x.progressive.png.jpg?v=1666952651",
  },
];
export default function MobileViewCarousal() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper top-7"
      >
        {lstCarousal.map((item: any) => (
          <SwiperSlide>
            <div className="flex">
              <img src={item.img} className="h-full w-full object-center" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
