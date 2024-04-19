import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import "./globals.css"

import { cn } from "@/lib/utils"

import { AnimatedCursorProvider } from "@/components/animated-cursor-provider"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  weight: ["400"],
  style: ["normal", "italic"],
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
      <body className={cn(poppins.className, "min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedCursorProvider>{children}</AnimatedCursorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
