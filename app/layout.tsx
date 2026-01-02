import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "United States of Africa Youth Parliament",
  description: "A continental Youth Governance Platform for Africa's Present and Future",
    generator: 'United States of Africa Youth Parliament'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background">
        <MainNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
