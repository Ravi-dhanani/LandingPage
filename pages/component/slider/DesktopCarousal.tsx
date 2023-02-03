import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const lstCarousal = [
  {
    img: "https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Desktop_Banners_20_1665x.progressive.png.jpg?v=1666952645",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Desktop_Banners_5_da73a887-b4d5-4deb-aa56-54ef1307b90c_1665x.progressive.png.jpg?v=1672222983",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Desktop_Banners_18_1665x.progressive.png.jpg?v=1666952517",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Desktop_Banners_6_3ee68add-9004-4c5a-a205-1a6abd432cfd_1665x.progressive.png.jpg?v=1675145915",
  },
];

export default function DesktopCarousal() {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {lstCarousal.map((item: any) => (
          <SwiperSlide>
            <div className="flex md:h-full">
              <img
                src={item.img}
                className="h-full w-full sm:object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
