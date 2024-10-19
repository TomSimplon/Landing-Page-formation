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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

  return (
    <div className="pt-[100px]">
      <div className="first relative flex justify-between h-[700px] overflow-hidden">
        <div className="flex flex-col items-baseline pl-[80px] pt-[90px]">
          <p className="class-span">{data?.text1}</p>
          <h1 className="mt-4 text-6xl font-medium w-[640px]">
            Des <span className="italic">Visuels</span> <span className="italic text-[#f5a622]">d&apos;Impact</span> en
            un <span className="italic text-[#f5a622]">Clin d&apos;Œil</span> grâce à{" "}
            <span className="italic text-[#f5a622]">l&apos;IA</span>
          </h1>
          <p className="mt-6 text-[18px] w-[750px]">
            Maîtrisez l&apos;art de générer des <strong className="font-semibold">images captivantes</strong> avec
            l&apos;IA et <strong>démarquez-vous</strong> en un temps record.{" "}
            <strong className="font-semibold">Apprenez à transformer</strong> vos idées en visuels puissants qui{" "}
            <strong className="font-semibold">séduiront vos clients.</strong>
          </p>
          <button className="custom-btn mt-10 font-medium text-xl">{data.button1}</button>
          <div className="flex gap-2.5 items-center mt-6">
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
            className="absolute w-[470px] h-[225px] object-cover origin-top-left rotate-3 z-10 -bottom-[20px] -right-[15px]"
            src={data.iaGallery[4].asset.url}
          ></video>
          <video
            autoPlay
            muted
            loop
            className="absolute w-[360px] h-[200px] object-cover origin-top-left -rotate-3 z-20 -bottom-[40px] right-[450px]"
            src={data.iaGallery[4].asset.url}
          ></video>
          <Image
            className="absolute w-[150px] h-[210px] object-cover origin-top-left rotate-3 z-20 -bottom-[20px] right-[800px]"
            src={data.iaGallery[3].asset.url}
            alt="IA Gallery"
            width={150}
            height={210}
          />
        </div>
        <div className="iaGrid relative w-full overflow-hidden">
          <Image
            className="overflow-hidden z-40 absolute -top-[20px] -right-6 origin-top-left rotate-6 w-[256px] h-[360px] object-cover"
            src={data.iaGallery[3].asset.url}
            alt="IA Gallery"
            width={256}
            height={360}
          />
          <Image
            className="z-30 absolute top-[40px] right-[200px] origin-top-right -rotate-6 w-[190px] h-[270px] object-cover"
            src={data.iaGallery[3].asset.url}
            alt="IA Gallery"
            width={200}
            height={270}
          />
          <Image
            className="z-40 absolute top-[310px] right-3 origin-top-right -rotate-2 w-[200px] h-[290px] object-cover"
            src={data.iaGallery[3].asset.url}
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
      <div className="px-7 py-9 mx-16 my-28 rounded-2xl bg-white text-black">
        <h3 className="text-5xl font-bold mb-6">{data.text2}</h3>
        <div className="flex justify-between">
          {data.text2tooltip.map((tooltip, index) => (
            <p className="rounded-2xl text-2xl font-bold p-3.5 border border-black" key={index}>
              {tooltip}
            </p>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center mt-5">
        <img src="/blur/pbt.png" alt="blur" className="absolute top-0 left-0 h-[700px]" />
        <p className="mb-4 class-span">{data2.text1}</p>
        <h2 className="text-4xl">
          Ce qui plombe <i className="font-medium">votre productivité</i>
        </h2>
        <div className="mb-44 flex mt-12 gap-24">
          {data2.arrayText.map((block, index) => (
            <div key={index} className="flex flex-col items-start w-[310px]">
              <Image src={block.icon.asset.url} alt="Icon" width={56} height={56} />
              <h3 className="text-xl font-medium mt-4 mb-2">{block.title}</h3>
              <p className="text-[#ffffffcc]">{block.text}</p>
            </div>
          ))}
        </div>
        <div className="mb-40 bg-white rounded-2xl text-black w-full px-16 py-14 flex gap-16 justify-between">
          <div>
            <p className="text-2xl font-bold w-[530px]">{data2.heroTitle}</p>
            <div className="flex gap-4 mt-10">
              <div className="border-l border-black pl-5">
                <p className="text-3xl font-bold mb-2">{data2.heroStats1}</p>
                <p className="text-xl w-[300px]">{data2.heroDesc2}</p>
              </div>
              <div className="border-l border-black pl-5">
                <p className="text-3xl font-bold mb-2">{data2.heroStats2}</p>
                <p className="text-xl w-[300px]">{data2.heroDesc2}</p>
              </div>
            </div>
            <button className="custom-btn-unshadow mt-16">{data2.button1}</button>
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
      <div className="relative flex flex-col items-center text-dark">
        <img src="/blur/artLeft.png" alt="blur" className="absolute left-0 " />
        <img src="/blur/artRight.png" alt="blur" className="absolute right-0 " />
        <img src="/blur/artMiddle.png" alt="blur" className="absolute -top-44" />
        <p className="class-span">{data3.text1}</p>
        <p className="text-4xl mt-4">
          Les outils que vous <i className="font-medium">allez maîtrister</i>
        </p>
        <p className="w-[640px] text-center mt-3.5">{data3.text2}</p>
        <button className="custom-btn mt-10">{data3.button1}</button>
        <img src="/outils.svg" alt="test" />
      </div>
      <div className="flex flex-col items-center mt-16 bg-white text-black">
        <p className="custom-btn-unshadow mt-10">{data3.text3}</p>
        <p className="text-4xl mt-4">
          Les compétences que vous <i className="font-medium">allez acquérir</i>
        </p>
        <div className="flex">
          {data3.arrayText?.map((block, index) => (
            <div key={index} className="flex flex-col items-start mt-8">
              <h3 className="text-xl font-bold mb-2">{block.title}</h3>
              <p className="">{block.text}</p>
            </div>
          ))}
        </div>
        <button className="mt-4">{data3.button2}</button>
      </div>
      <div className="mt-44 flex flex-col items-center">
        <p className="class-span">{data4.text1}</p>
        <p className="text-4xl mt-4 italic font-medium w-[650px] text-center">{data4.text2}</p>
        <SwiperContent data={data4.arrayText} />
      </div>
      <div className="mt-44 flex flex-col items-center">
        <p className="class-span">{data5.text1}</p>
        <h2 className="my-4 text-4xl italic font-medium">{data5.text2}</h2>
        <p className="text-[#ffffff99] text-xl">{data5.text3}</p>
      </div>
      <div className="mt-20 mb-6 flex justify-center gap-6">
        {data5.arrayText.slice(0, 3).map((block, index) => {
          const words = block.title.split(" ")
          const lastWord = words.pop()
          const titleWithoutLastWord = words.join(" ")

          return (
            <div
              key={index}
              className="flex flex-col justify-between items-start mt-8 w-[405px] rounded-2xl border border-[#ffffffcc] p-5"
            >
              <span className="mb-4 class-span flex items-center gap-1">
                <Image src="/icons/gift.png" alt="Gift" width={14} height={14} /> {index}
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
      <div className="flex m-auto border border-white items-center justify-between rounded-2xl w-[1267px] p-5">
        <div className="flex flex-col items-start w-[400px]">
          <span className="class-span flex items-center gap-1">
            <Image src="/icons/gift.png" alt="Gift" width={14} height={14} /> 4
          </span>
          <h3 className="text-2xl my-2">
            {data5.arrayText[3].title} <span className="text-[#FFB951] italic">word</span>
            <p className="text-[#ffffffcc] text-base">{data5.arrayText[3].text}</p>
          </h3>
        </div>
        <div>
          <Image src={data5.arrayText[3].imageUrl} alt="Image" width={700} height={400} />
        </div>
      </div>
      <div className="mt-44">
        <h2 className="text-4xl text-center font-medium">{pricing.text1}</h2>
        <div className="flex justify-center gap-[120px] mt-14">
          <div className="flex flex-col items-center justify-between w-[10%]">
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
            <p className="w-3/4 text-sm text-[#ffffffcc] mt-2">{pricing.text3}</p>
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
            <button className="pricing-button">{pricing.button1}</button>
            <div className="flex gap-1 items-center">
              <Image src={pricing.ctaImage?.asset.url} alt="CTA Image" width={82} height={16} />
              <p className="text-xs">{pricing.text9}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-[10%]">
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
      <div className="mt-44 py-14 px-6 bg-white">
        <div className="bg-[#020518] rounded-2xl flex items-center justify-around">
          <div className="flex flex-col items-start">
            <p className="class-span mb-6 !text-base">{joinsUs.text1}</p>
            <p className="text-4xl font-medium">{joinsUs.text2}</p>
            <p className="text-[#ffffffcc] mt-4">{joinsUs.text3}</p>
            <button className="custom-btn mt-6 border border-white">{joinsUs.button1}</button>
          </div>
          <SwiperReview data={joinsUs.arrayAvis} />
        </div>
      </div>
      <div className="mt-44 mb-44">
        <h2 className="text-4xl text-center mb-3.5">{faq.text1}</h2>
        <p className="text-center text-xl text-[#FFFFFF99]">{faq.text2}</p>
        <div className="mt-12 px-14 gap-14 flex items-stretch justify-around">
          <div className="accordion rounded-2xl px-6 py-2 w-full">
            {faq.arrayFaq.map((faq, index) => (
              <Accordion type="single" collapsible key={index} className="accordion-border">
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-normal">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
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
            <a href={faq.urlLinkedin}>
              <button className="text-sm flex items-center gap-4 mt-5 bg-white rounded-full px-4 py-2 text-black font-medium">
                <img src="/icons/linkedin.svg" alt="" />
                {faq.button1}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#080d19] py-6 px-14">
        <div className="flex items-center gap-6">
          <Image src={faq.image.asset.url} alt="LinkedIn" width={52} height={52} />
          <p className="text-2xl font-medium">Tom Pustel</p>
        </div>
      </div>
    </div>
  )
}
