import {
  firstQuery,
  secondQuery,
  thirdQuery,
  fourQuery,
  fiveQuery,
  pricingQuery,
  joinUsQuery,
  faqQuery,
} from "@/lib/sanity.query"
import { urlFor } from "@/lib/sanity"
import Image from "next/image"
import { sanityFetch } from "@/lib/sanity.client"
import {
  FirstData,
  SecondData,
  ThirdData,
  FourData,
  FiveData,
  PricingData,
  JoinUsData,
  FaqData,
} from "@/types/queryTypes"
import SwiperContent from "@/components/SwiperContent"
import SwiperReview from "@/components/SwiperReview"
import SwiperReviewResponsive from "@/components/SwiperReviewResponsive"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PortableText } from "@portabletext/react"
import Link from "next/link"

export default async function Home() {
  const data = (await sanityFetch({
    query: firstQuery,
    tags: ["First"],
  })) as FirstData

  const data2 = (await sanityFetch({
    query: secondQuery,
    tags: ["Second"],
  })) as SecondData

  const data3 = (await sanityFetch({
    query: thirdQuery,
    tags: ["Third"],
  })) as ThirdData

  const data4 = (await sanityFetch({
    query: fourQuery,
    tags: ["Four"],
  })) as FourData

  const data5 = (await sanityFetch({
    query: fiveQuery,
    tags: ["Five"],
  })) as FiveData

  const pricing = (await sanityFetch({
    query: pricingQuery,
    tags: ["Pricing"],
  })) as PricingData

  const joinsUs = (await sanityFetch({
    query: joinUsQuery,
    tags: ["JoinsUs"],
  })) as JoinUsData

  const faq = (await sanityFetch({
    query: faqQuery,
    tags: ["FAQ"],
  })) as FaqData

  const wordsData5 = data5.arrayText[3].title.split(" ")
  const lastWordData5 = wordsData5.pop()
  const titleWithoutLastWord5 = wordsData5.join(" ")

  return (
    <div className="pt-[50px] xl:pt-[100px]">
      <div className="flex-col xl:flex-row first relative flex justify-between h-[900px] xl:h-[700px] overflow-hidden">
        <div className="flex flex-col items-baseline px-[25px] xl:pl-[80px] pt-[90px]">
          <p className="class-span">{data?.text1}</p>
          <h1 className="text-center xl:text-start text-4xl mt-3 xl:mt-4 xl:text-6xl font-medium xl:w-[640px]">
            Des <span className="italic">Visuels</span> <span className="italic text-[#f5a622]">d&apos;Impact</span> en
            un <span className="italic text-[#f5a622]">Clin d&apos;Œil</span> grâce à{" "}
            <span className="italic text-[#f5a622]">l&apos;IA</span>
          </h1>
          <div className="text-center xl:text-start font mt-3 xl:mt-6 text-base xl:text-[18px] xl:w-[750px]">
            <PortableText value={data.richText2} />
          </div>
          <Link href="#pricing" className="w-full xl:w-fit">
            <button className="w-full xl:w-fit custom-btn mt-6 xl:mt-10 font-medium text-xl">{data.button1}</button>
          </Link>
          <div className="hidden xl:flex gap-2.5 items-center mt-6">
            <Image
              src={urlFor(data.clientsImage).url()}
              alt="Clients Image"
              width={120}
              height={25}
              className="!border-0"
            />
            <p className="text-sm">{data.clients}</p>
          </div>
          <video
            autoPlay
            muted
            loop
            className="absolute w-[350px] h-[200px] object-cover z-30 xl:z-10 -bottom-[20px] left-1/2 transform -translate-x-1/2 xl:w-[470px] xl:h-[225px] xl:origin-top-left xl:rotate-3 xl:-right-[15px] xl:translate-x-0 xl:left-auto"
            src={data.iaGallery[4].asset.url}
          ></video>
          <video
            autoPlay
            muted
            loop
            className="absolute w-[285px] xl:w-[360px] h-[170px] xl:h-[200px] object-cover origin-top-left -rotate-3 z-20 bottom-32 -right-3 xl:-bottom-[40px] xl:right-[450px]"
            src={data.iaGallery[5]?.asset.url}
          ></video>
          <Image
            className="block xl:hidden z-10 absolute bottom-52 -right-6 origin-top-left rotate-2 w-[160px] h-[230px] object-cover"
            src={data.iaGallery[0].asset.url}
            alt="IA Gallery"
            width={160}
            height={230}
          />
          <Image
            className="block xl:hidden z-20 absolute bottom-40 -right-2 origin-top-right -rotate-3 w-[95px] h-[135px] object-cover"
            src={data.iaGallery[1].asset.url}
            alt="IA Gallery"
            width={95}
            height={135}
          />
          <Image
            className="block xl:hidden z-40 absolute bottom-44 left-16 origin-top-right -rotate-12 w-[73px] h-[120px] object-cover"
            src={data.iaGallery[2].asset.url}
            alt="IA Gallery"
            width={73}
            height={120}
          />
          <Image
            className="block xl:hidden z-30 absolute bottom-44 left-2 origin-top-right -rotate-2 w-[73px] h-[120px] object-cover"
            src={data.iaGallery[3].asset.url}
            alt="IA Gallery"
            width={73}
            height={120}
          />
        </div>
        <div className="hidden xl:flex iaGrid relative w-full overflow-hidden">
          <Image
            className="overflow-hidden z-40 absolute -top-[20px] -right-6 origin-top-left rotate-6 w-[256px] h-[360px] object-cover"
            src={data.iaGallery[0].asset.url}
            alt="IA Gallery"
            width={256}
            height={360}
          />
          <Image
            className="z-30 absolute top-[40px] right-[200px] origin-top-right -rotate-6 w-[190px] h-[270px] object-cover"
            src={data.iaGallery[1].asset.url}
            alt="IA Gallery"
            width={200}
            height={270}
          />
          <Image
            className="z-40 absolute top-[310px] right-3 origin-top-right -rotate-2 w-[200px] h-[290px] object-cover"
            src={data.iaGallery[2].asset.url}
            alt="IA Gallery"
            width={200}
            height={290}
          />
          <Image
            className="z-20 absolute top-[250px] right-[170px] origin-top-left rotate-6 w-[210px] h-[300px] object-cover"
            src={data.iaGallery[3].asset.url}
            alt="IA Gallery"
            width={210}
            height={300}
          />
        </div>
      </div>
      <div className="mx-3 px-3 xl:px-7 py-9 xl:mx-16 my-6 xl:my-28 rounded-2xl bg-white text-black">
        <h3 className="text-3xl xl:text-5xl font-bold mb-6">{data.text2}</h3>
        <div className="flex-col gap-3 xl:gap-[32px] xl:flex-row flex justify-center">
          {data.text2tooltip.map((tooltip, index) => (
            <p
              className="rounded-full xl:rounded-2xl text-base xl:text-2xl font-bold w-fit px-3 py-2 xl:p-3.5 border border-black"
              key={index}
            >
              {tooltip}
            </p>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col justify-center px-3 xl:px-0 items-start xl:items-center mt-32 xl:mt-5">
        <img src="/blur/pbt.png" alt="blur" className="absolute top-0 left-0 h-[700px]" />
        <p className="mb-4 class-span">{data2.text1}</p>
        <div className="text-3xl xl:text-4xl">
          <PortableText value={data2.richText1} />
        </div>

        <div className="mb-24 xl:mb-44 flex xl:flex-row flex-col mt-12 gap-12 xl:gap-24">
          {data2.arrayText.map((block, index) => (
            <div key={index} className="flex flex-col items-center xl:items-start xl:w-[310px]">
              <Image src={block.icon.asset.url} alt="Icon" width={56} height={56} />
              <h3 className="text-xl font-medium mt-4 mb-2">{block.title}</h3>
              <p className="text-[#ffffffcc]">{block.text}</p>
            </div>
          ))}
        </div>
        <div
          id="whoami"
          className="mb-24 xl:mb-40 bg-white rounded-2xl text-black w-full px-3 py-8 xl:px-16 xl:py-14 flex flex-col xl:flex-row gap-10 xl:gap-16 justify-center"
        >
          <div>
            <p className="text-2xl font-bold xl:w-[530px]">{data2.heroTitle}</p>
            <div className="flex gap-4 mt-10">
              <div className="border-l border-black pl-5">
                <p className="text-3xl font-bold mb-2">{data2.heroStats1}</p>
                <p className="text-sm xl:text-xl xl:w-[300px]">{data2.heroDesc1}</p>
              </div>
              <div className="border-l border-black pl-5">
                <p className="text-3xl font-bold mb-2">{data2.heroStats2}</p>
                <p className="text-sm xl:text-xl xl:w-[300px]">{data2.heroDesc2}</p>
              </div>
            </div>
            <Link href="#pricing">
              <button className="custom-btn-unshadow mt-10 xl:mt-16">{data2.button1}</button>
            </Link>
          </div>
          <div>
            <Image
              src={data2.ctaImage.asset.url}
              className="w-[570px] h-[425px] object-cover rounded-tl-[50px] rounded-br-[50px]"
              alt="CTA Image"
              width={570}
              height={425}
            />
          </div>
        </div>
      </div>
      <div className="pb-5 relative flex flex-col items-start px-3 xl:px-0 xl:items-center text-dark">
        <img src="/blur/artLeft.png" alt="blur" className="absolute left-0 " />
        <img src="/blur/artRight.png" alt="blur" className="absolute right-0 " />
        <img src="/blur/artMiddle.png" alt="blur" className="hidden xl:block absolute -top-44" />
        <p className="class-span">{data3.text1}</p>
        <div className="text-3xl xl:text-4xl mt-4">
          <PortableText value={data3.richText1} />
        </div>
        <p className="text-[#FFFFFF99] xl:w-[640px] xl:text-center mt-3.5">{data3.text2}</p>
        <Link href="#pricing" className="w-full xl:w-fit ">
          <button className="w-full xl:w-fit custom-btn mt-4 text-base xl:text-xl xl:mt-10">{data3.button1}</button>
        </Link>
        <img className="hidden xl:block" src={data3.image1?.asset.url} alt="test" />
        <img className="xl:hidden my-32 mx-auto" src={data3.image2?.asset.url} alt="test" />
      </div>
      <div className="rounded-2xl xl:rounded-none flex flex-col items-start px-3 pb-14 xl:px-0 xl:items-center xl:mt-16 bg-white text-black">
        <p className="custom-btn-unshadow mt-14 !text-base">{data3.text3}</p>
        <div className="text-3xl xl:text-4xl mt-4 mb-12">
          <PortableText value={data3.richText2} />
        </div>
        <div className="flex xl:flex-row flex-col gap-[25pxp] xl:gap-[60px] xl:px-20">
          {data3.arrayText?.map((block, index) => (
            <div key={index} className="flex flex-col items-center xl:items-start mt-4 xl:mt-8">
              <Image src={block.icon.asset.url} alt="Icon" width={56} height={56} />
              <h3 className="text-lg xl:text-xl font-medium mb-2 mt-6">{block.title}</h3>
              <p className="text-sm xl:text-base">{block.text}</p>
            </div>
          ))}
        </div>
        <Link href="#pricing" className="w-full xl:w-fit ">
          <button className="mt-12 xl:mt-24 custom-btn-unshadow m-auto">{data3.button1}</button>
        </Link>
      </div>
      <div id="program" className="mt-44 flex flex-col items-center">
        <p className="class-span">{data4.text1}</p>
        <div className="text-4xl mt-4 xl:w-[650px] text-center">
          <PortableText value={data4.richText1} />
        </div>
        <SwiperContent data={data4.arrayText} />
        <div className="xl:hidden">
          {data4.arrayText.map((item, index) => (
            <div key={index} className="flex numberParent ">
              <div className="!flex justify-center number mr-[50px]">
                <span></span>
                <div>{index + 1}</div>
                <span></span>
              </div>

              <div className="flex flex-col items-center mt-8 swiper-item-custom !p-6 mr-3">
                <h3 className="text-base font-medium text-center">{item.title}</h3>
                <p className="text-[#ffffffcc] text-sm text-center mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-3 xl:px-0 mt-44 flex flex-col items-center">
        <p className="class-span">{data5.text1}</p>
        <div className="text-center xl:text-start my-3 xl:my-4 text-3xl xl:text-4xl">
          <PortableText value={data5.richText1} />
        </div>
        <p className="text-[#ffffff99] text-base xl:text-xl">{data5.text3}</p>
      </div>
      <div className="mt-3 xl:mt-20 mb-6 flex flex-col xl:flex-row justify-center xl:gap-6 gap-2">
        {data5.arrayText.slice(0, 3).map((block, index) => {
          const words = block.title.split(" ")
          const lastWord = words.pop()
          const titleWithoutLastWord = words.join(" ")

          return (
            <div
              key={index}
              className="mx-3 xl:mx-0 flex flex-col justify-between items-center xl:items-start mt-8 xl:w-[405px] rounded-2xl border border-[#ffffffcc] p-5"
            >
              <span className="mb-4 class-span flex items-center gap-1">
                <Image src="/icons/gift.png" alt="Gift" width={14} height={14} /> {index + 1}
              </span>
              <h3 className="text-2xl mb-2">
                {titleWithoutLastWord} <span className="text-[#FFB951] italic">{lastWord}</span>
              </h3>
              <p className="mb-2 text-[#ffffffcc]">{block.text}</p>
              <Image src={block.imageUrl} alt="Image" width={365} height={255} />
            </div>
          )
        })}
      </div>
      <div className="mx-3 flex flex-col xl:flex-row xl:m-auto border border-white items-center justify-between rounded-2xl xl:w-[1267px] p-5">
        <div className="flex flex-col items-start xl:w-[400px]">
          <span className="class-span flex items-center gap-1">
            <Image src="/icons/gift.png" alt="Gift" width={14} height={14} /> 4
          </span>
          <h3 className="text-2xl mb-2">
            {lastWordData5} <span className="text-[#FFB951] italic">{titleWithoutLastWord5}</span>
          </h3>
          <p className="mb-2 text-[#ffffffcc]">{data5.arrayText[3].text}</p>
        </div>
        <div>
          <Image src={data5.arrayText[3].imageUrl} alt="Image" width={700} height={400} />
        </div>
      </div>
      <div id="pricing"></div>
      <div className="px-3 xl:px-0 mt-24 xl:mt-44">
        <div className="text-3xl xl:text-4xl xl:text-center">
          <PortableText value={pricing.richText1} />
        </div>
        <div className="flex justify-center xl:gap-[120px] mt-8 xl:mt-14">
          <div className="hidden xl:flex flex-col items-center justify-between w-[10%]">
            {pricing.arrayHeros.slice(0, 3).map((hero, index) => (
              <div key={index} className={`w-full flex flex-col ${index === 1 ? "items-start" : "items-end"} gap-2`}>
                <Image
                  src={hero.pp.asset.url}
                  alt="PP"
                  width={70}
                  height={70}
                  className="border border-[#FFB951] rounded-full p-1"
                />
                <p className="text-xl mt-2 text-start">{hero.name}</p>
              </div>
            ))}
          </div>

          <div className="pricing-card p-6 flex flex-col items-start">
            <div className="flex justify-between items-center w-full">
              <p className="text-2xl font-medium">{pricing.text2}</p>
              <span className="class-span !text-xs">{pricing.text4}</span>
            </div>
            <p className="w-3/4 text-sm !text-start text-[#ffffffcc] mt-2">{pricing.text3}</p>
            <div className="flex items-center mt-4">
              <p className="text-5xl">{pricing.text5}</p>
              <p className="text-3xl text-[#FFFFFF99] line-through ml-4">{pricing.text6}</p>
            </div>
            <p className="pricing-places mt-3.5">{pricing.text7}</p>
            <span className="pricing-separator"></span>
            <p className="text-xl font-medium mb-3.5">{pricing.text8}</p>
            <div className="flex flex-col gap-3.5">
              {pricing.arrayAvantages.map((avantage, index) => (
                <p key={index} className="text-sm text-[#FFFFFFCC] flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.7131 3.29973C15.3598 5.94639 15.3131 10.2664 12.5798 12.8597C10.0531 15.253 5.95315 15.253 3.41981 12.8597C0.679812 10.2664 0.633137 5.94639 3.28647 3.29973C5.88647 0.69306 10.1131 0.69306 12.7131 3.29973Z"
                      stroke="white"
                      strokeOpacity="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.1665 7.99995L7.05317 9.88661L10.8332 6.11328"
                      stroke="white"
                      strokeOpacity="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {avantage.Avantage}
                </p>
              ))}
            </div>
            <Link target="_blank" href={pricing.paymentLink}>
              <button className="pricing-button">{pricing.button1}</button>
            </Link>
            <div className="flex gap-1 items-center">
              <Image src={pricing.ctaImage?.asset.url} alt="CTA Image" width={82} height={16} />
              <p className="text-xs">{pricing.text9}</p>
            </div>
          </div>
          <div className="hidden xl:flex flex-col items-center justify-between w-[10%]">
            {pricing.arrayHeros.slice(3, 6).map((hero, index) => (
              <div key={index} className={`w-full flex flex-col ${index !== 1 ? "items-start" : "items-end"} gap-2`}>
                <Image
                  src={hero.pp.asset.url}
                  alt="PP"
                  width={70}
                  height={70}
                  className="border border-[#FFB951] rounded-full p-1"
                />
                <p className="text-xl mt-2 text-start">{hero.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="reviews" className="rounded-2xl xl:rounded-none mt-44 py-6 xl:py-14 px-3 xl:px-6 bg-white">
        <div className="p-6 xl:p-0 bg-[#020518] rounded-2xl flex xl:flex-row flex-col items-center justify-around">
          <div className="flex flex-col items-start">
            <p className="class-span mb-6 !text-base">{joinsUs.text1}</p>
            <div className="text-3xl xl:text-4xl ">
              <PortableText value={joinsUs.richText1} />
            </div>
            <p className="text-[#ffffffcc] mt-4">{joinsUs.text3}</p>
            <Link href="#pricing" className="w-full xl:w-fit ">
              <button className="w-full xl:w-fit custom-btn mt-6 border border-white m-auto xl:mx-0 !px-12">
                {joinsUs.button1}
              </button>
            </Link>
          </div>
          <SwiperReview data={joinsUs.arrayAvis} />
          <SwiperReviewResponsive data={joinsUs.arrayAvis} />
        </div>
      </div>
      <div className="px-3 xl:px-0 mt-24 xl:mt-44 mb-24 xl:mb-44">
        <div className="text-3xl xl:text-4xl xl:text-center mb-3.5">
          <PortableText value={faq.richText1} />
        </div>
        <p className="xl:text-center text-base xl:text-xl text-[#FFFFFF99]">{faq.text2}</p>
        <div className="mt-12 xl:px-14 gap-4 xl:gap-14 flex flex-col xl:flex-row items-stretch justify-around">
          <div className="accordion rounded-2xl px-6 py-2 w-full">
            {faq.arrayFaq.map((faq, index) => (
              <Accordion type="single" collapsible key={index} className="accordion-border">
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-start text-sm xl:text-xl font-normal">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs xl:text-lg">{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="linkedin rounded-2xl px-6 flex flex-col justify-center items-center">
            <Image
              src={faq.image.asset.url}
              alt="LinkedIn"
              width={125}
              height={125}
              className="border border-[#FFB951] rounded-full p-1"
            />
            <p className="text-2xl font-medium mt-3">{faq.text3}</p>
            <p className="text-xl text-[#FFFFFFCC] text-center mt-3">{faq.text4}</p>
            <Link target="_blank" href={faq.urlLinkedin}>
              <button className="text-sm flex items-center gap-4 mt-5 bg-white rounded-full px-4 py-2 text-black font-medium">
                <img src="/icons/linkedin.svg" alt="" />
                {faq.button1}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#080d19] py-6 px-14">
        <div className="flex items-center gap-6 justify-center xl:justify-start">
          <Image src={faq.image.asset.url} alt="LinkedIn" width={52} height={52} />
          <p className="text-2xl font-medium">Tom Pustel</p>
        </div>
        <div className="flex xl:hidden flex-col items-center justify-center gap-4 mt-6">
          <p className="text-base text-[#FFFFFF99]">Expert en IA</p>
          <Link target="_blank" href={faq.urlLinkedin}>
            <Image src="/icons/linkedinFooter.svg" alt="LinkedIn" width={34} height={34} />
          </Link>
        </div>
      </div>
    </div>
  )
}
