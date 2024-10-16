import { client, urlFor } from "@/lib/sanity"
import Image from "next/image"
import Link from "next/link"

async function getLogo() {
  const query = `*[_type == "Header"][0] {
  logo {
    asset->{
      url
    }
  },
}
`
  return await client.fetch(query)
}

export default async function Header() {
  const data = await getLogo()

  return (
    <nav className="fixed w-full bg-[#090d19] border-effect px-16 py-6 flex items-center justify-between overflow-hidden">
      <Image src={urlFor(data.logo).url()} alt="Company Logo" width={120} height={45} />
      <div className="flex gap-10">
        <Link href="#">Qui je suis</Link>
        <Link href="#">Notre accompagnement</Link>
        <Link href="#">Avis clients</Link>
      </div>
      <button className="custom-btn">Prendre rdv</button>
    </nav>
  )
}
