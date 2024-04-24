import { Copyright, MoveUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import ScrollToTop from "@/components/ui/scroll-to-top"

export default function Footer(
  props: Readonly<{
    className?: string
  }>
) {
  return (
    <footer
      className={cn(
        "relative flex flex-col items-stretch justify-center bg-zinc-950 text-white",
        props.className
      )}
    >
      <div className="container flex flex-col">
        <div>
          <div>
            <span>Keep in touch</span>
            <Button
              className={cn(
                "text-uppercase flex h-24 w-24 flex-col rounded-full"
              )}
              type="button"
              variant="glass"
            >
              <MoveUpRight />
              <span>Let&apos;s Talk</span>
            </Button>
          </div>
        </div>
        <div className="flex py-8">
          <div className="mr-16 mt-10 flex-1 border-t border-neutral-400  pt-4">
            <p className="inline-flex gap-2 align-baseline text-neutral-400">
              <Copyright className="mt-[2px] h-4 w-4" />{" "}
              {new Date().getFullYear()} KM&A. All rights reserved.
            </p>
          </div>
          <div>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  )
}
