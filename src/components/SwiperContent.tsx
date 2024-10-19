"use client"
import { BlockText } from "@/types/queryTypes"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function SwiperContent(data: { data: BlockText[] }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }
  console.log(`data`, data)
  return (
    <div className="mb-80 w-full">
      <Swiper
        pagination={pagination}
        modules={[Pagination, Navigation]}
        className="mySwiper !pt-20"
        slidesPerView={3}
        grabCursor={true}
      >
        {data.data.map((item, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            <div className="w-[305px] swiper-item-custom">
              <h3 className="text-2xl text-center font-medium">{item.title}</h3>
              <p className="text-center mt-4 text-[#ffffffcc]">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
