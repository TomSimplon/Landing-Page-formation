"use client"
import { Avis } from "@/types/queryTypes"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"

export default function SwiperReview(data: { data: Avis[] }) {
  const half = Math.ceil(data.data.length / 2)
  const firstHalf = data.data.slice(0, half)
  const secondHalf = data.data.slice(half)
  console.log(`firstHalf, secondHalf`, firstHalf, secondHalf)
  return (
    <div className="relative flex gap-[30px] items-center justify-center">
      <img className="absolute" src="/blur/avisBlur.png" alt="blur" />
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className="verticalSwiper"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        speed={10000}
      >
        {firstHalf.map((item, index) => (
          <SwiperSlide key={index} className="swiper-review-card rounded-2xl !w-[300px] p-6 h-fit">
            <div className="flex flex-col items-start">
              <img src="/icons/stars.svg" alt="5 etoiles" />
              <p className="text-[#FFFFFFCC] my-3.5">{item.Contenu}</p>
              <div className="flex items-center gap-2">
                <Image src={item.authorImage.asset.url} width={32} height={32} alt="Auteur" />
                <div>
                  <p className="text-sm">{item.authorName}</p>
                  <p className="text-xs">{item.roleAuthor}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className="verticalSwiper"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={9000}
        modules={[Autoplay, Navigation]}
      >
        {secondHalf.map((item, index) => (
          <SwiperSlide key={index} className="swiper-review-card rounded-2xl !w-[300px] p-6 h-fit">
            <div className="flex flex-col items-start">
              <img src="/icons/stars.svg" alt="5 etoiles" />
              <p className="text-[#FFFFFFCC] my-3.5">{item.Contenu}</p>
              <div className="flex items-center gap-2">
                <Image src={item.authorImage.asset.url} width={32} height={32} alt="Auteur" />
                <div>
                  <p className="text-sm">{item.authorName}</p>
                  <p className="text-xs">{item.roleAuthor}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
