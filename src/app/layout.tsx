import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

import { cn } from "@/lib/utils"

import { AnimatedCursorProvider } from "@/components/animated-cursor-provider"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const punta = localFont({
  src: [
    {
      path: "../../public/fonts/punta/Punta Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/punta/Punta Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/punta/Punta Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/punta/Punta Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  weight: "400",
  variable: "--font-punta",
})

const puntaFlat = localFont({
  src: [
    {
      path: "../../public/fonts/punta/Punta Flat Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/punta/Punta Flat Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/punta/Punta Flat Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/punta/Punta Flat Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  weight: "400",
  variable: "--font-punta-flat",
})

export const metadata: Metadata = {
  title: "Mayabytes starter template",
  description: "this is a starter template for mayabytes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.variable,
          punta.variable,
          puntaFlat.variable,
          "min-h-screen bg-gradient-to-b from-zinc-200 to-white"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedCursorProvider>{children}</AnimatedCursorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
