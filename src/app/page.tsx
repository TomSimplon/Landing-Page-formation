import { firstQuery } from "@/lib/sanity.query"
import { urlFor } from "@/lib/sanity"
import Image from "next/image"
import { sanityFetch } from "@/lib/sanity.client"
import { FirstData } from "@/types/queryTypes"

export default async function Home() {
  const data = (await sanityFetch({
    query: firstQuery,
    tags: ["First"],
  })) as FirstData

  console.log(`data.iaGallery`, data.iaGallery[0].asset.url)
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
            <Image src={urlFor(data.clientsImage).url()} alt="Clients Image" width={120} height={25} />
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
            className="absolute w-[150px] h-[210px] object-cover origin-top-left rotate-3 z-20 -bottom-[20px] left-[610px]"
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
    </div>
  )
}
