import Link from "next/link"
import { Copyright, Minus, Send } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import ScrollToTop from "@/components/ui/scroll-to-top"

import ArrowRight from "./common/arrow-right"
import Marquee from "./common/marquee"

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
      <Marquee baseVelocity={1.2} className="-mb-12">
        <div className="flex whitespace-nowrap xl:pt-10">
          <span className="inline-block whitespace-nowrap align-bottom text-7xl font-extrabold uppercase  leading-none lg:text-[10rem]">
            Keep in touch
          </span>
          <div className="self-center">
            <Button
              className={cn(
                "flex h-24 w-24 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600 xl:-mt-8 xl:h-40 xl:w-40"
              )}
              type="button"
              variant="glass"
            >
              <ArrowRight className="h-10 w-10" />

              <span>Let&apos;s Talk</span>
            </Button>
          </div>
        </div>
      </Marquee>
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
                  className={cn("ml-4 rounded-full text-orange-700")}
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
          <div className="grid gap-28 lg:grid-cols-2 ">
            <div className="grid gap-28 lg:grid-cols-2 ">
              <ul className="my-10 flex flex-col gap-4">
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Blog
                  </Link>
                </li>
              </ul>
              <ul className="my-10 flex flex-col gap-4">
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Chat
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid gap-28 lg:grid-cols-2 ">
              <ul className="my-10 flex flex-col gap-4">
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Twitter
                  </Link>
                </li>
              </ul>
              <ul className="my-10 flex flex-col gap-4">
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-4 text-neutral-400">
                    <Minus className="stroke-orange-700" /> Instagram
                  </Link>
                </li>
              </ul>
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
