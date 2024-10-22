import type { Metadata } from "next"
import "./globals.css"
import { Roboto } from "next/font/google"
import Header from "@/components/Header"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tom Pustel",
  description: "Des Visuels d'Impact en un Clin d'Œil grâce à l'IA\n",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
