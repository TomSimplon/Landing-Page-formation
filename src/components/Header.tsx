import { client, urlFor } from "@/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    <nav className="fixed w-full bg-[#090d19] border-effect px-4 xl:px-16 py-6 flex items-center justify-between overflow-hidden">
      <Image src={urlFor(data.logo).url()} alt="Company Logo" width={120} height={45} />
      <div className="hidden xl:flex gap-10 ">
        <Link href="#whoami">Qui je suis</Link>
        <Link href="#program">Notre accompagnement</Link>
        <Link href="#reviews">Avis clients</Link>
      </div>
      <Link href="#pricing">
        <button className="hidden xl:flex custom-btn">Vos visuels en un clic avec l&apos;IA</button>
      </Link>
      <div className="xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src="/icons/burger.svg" alt="Menu" width={24} height={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href="#whoami">Qui je suis</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="#program">Notre accompagnement</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="#reviews">Avis clients</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
