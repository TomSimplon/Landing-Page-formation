"use client"
import { useEffect, useState } from "react"
import { BlockText } from "@/types/queryTypes"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules"
import { Swiper as SwiperClass } from "swiper/types"

export default function SwiperContent(data: { data: BlockText[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(null)

  useEffect(() => {
    if (thumbsSwiper && controlledSwiper) {
      thumbsSwiper.controller.control = controlledSwiper
      controlledSwiper.controller.control = thumbsSwiper
    }
  }, [thumbsSwiper, controlledSwiper])

  return (
    <div className="w-full mt-14 hidden xl:block">
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="swiperC"
        navigation={true}
        grabCursor={true}
      >
        {data.data.map((item, index) => (
          <SwiperSlide key={index} className="!flex justify-center number">
            <span></span>
            <div>{index + 1}</div>
            <span></span>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="mySwiper2 mt-8 w-[90%] mx-auto"
        slidesPerView={3}
        grabCursor={true}
        onSwiper={setControlledSwiper}
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
