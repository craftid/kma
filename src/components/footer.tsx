import { Copyright, MoveUpRight, Send } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import ScrollToTop from "@/components/ui/scroll-to-top"

import Marquee from "./common/keep-in-touch-marquee"

export default function Footer(
  props: Readonly<{
    className?: string
  }>
) {
  return (
    <footer
      className={cn(
        "relative flex flex-col items-stretch justify-center overflow-x-hidden overflow-y-visible pt-24",
        props.className
      )}
    >
      <Marquee />
      <div className=" bg-zinc-950 pt-28 text-white">
        <div className="container flex flex-col">
          <div className="grid gap-28 lg:grid-cols-2">
            <div className="border-b border-neutral-500 pb-4">
              <h2 className="text-2xl font-extrabold uppercase">
                Emails you’ll actually want to read
              </h2>
              <p className="mt-6 font-poppins text-neutral-400">
                Looking for communications, creative & events tips & tricks?
                Subscribe to our newsletter!
              </p>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-neutral-400">Can we have your email?</p>
                <Button
                  className={cn("ml-4 rounded-full text-primary")}
                  type="button"
                  variant="ghost"
                  size="icon"
                >
                  <Send className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="columns-2 border-b border-neutral-500 pb-4">
              <Address
                city="Indy"
                address="200 S Meridian Street | Suite 510 Indianapolis, IN 46225"
                phone="317.964.0648"
              />
              <Address
                city="Tampa"
                address="1646 W Snow Avenue | #206 Tampa, FL 33606"
                phone="317.964.0648"
              />
            </div>
          </div>
          <div className="flex pb-8 pt-24">
            <div className="mr-16 mt-10 flex-1 border-t border-neutral-500  pt-4">
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
      </div>
    </footer>
  )
}

const Address = ({
  address,
  city,
  phone,
}: {
  address: string
  city: string
  phone: string
}) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-extrabold uppercase">{city}</h2>
      <p className="mb-4 font-poppins text-neutral-400">{address}</p>
      <p className="text-neutral-400 ">{phone}</p>
    </div>
  )
}
