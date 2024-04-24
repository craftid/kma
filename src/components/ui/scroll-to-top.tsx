"use client"

import { MoveUp } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <Button
      className={cn("text-uppercase flex h-24 w-24 flex-col rounded-full")}
      type="button"
      variant="default"
      onClick={scrollToTop}
    >
      <MoveUp strokeWidth={1} className="h-10 w-10" />
    </Button>
  )
}
ScrollToTop.displayName = "ScrollToTop"

export default ScrollToTop
