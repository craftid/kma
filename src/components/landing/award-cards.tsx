import Image from "next/image"
import Link from "next/link"
import { MoveUpRight } from "lucide-react"

import Marquee from "../common/marquee"
import { Button } from "../ui/button"

export default function AwardCards(props: { children?: React.ReactNode }) {
  return (
    <div className="relative my-14 flex flex-col overflow-hidden">
      <div className="pointer-events-auto absolute inset-0 flex flex-col justify-between gap-6 py-6">
        <Marquee baseVelocity={0.8} className="h-40">
          <div className="flex gap-4 px-4">
            <h2 className="text-5xl font-bold uppercase text-neutral-200">
              our awards
            </h2>
            <h2 className="text-5xl font-bold uppercase text-background drop-shadow-[0_1.2px_1.2px_rgba(163,163,163,0.7)]">
              our awards
            </h2>
          </div>
        </Marquee>
        <Marquee baseVelocity={-0.8} className="h-40">
          <div className="flex gap-4 px-4">
            <h2 className="text-5xl font-bold uppercase text-neutral-200">
              our awards
            </h2>
            <h2 className="text-5xl font-bold uppercase text-background drop-shadow-[0_1.2px_1.2px_rgba(163,163,163,0.7)]">
              our awards
            </h2>
          </div>
        </Marquee>
        <Marquee baseVelocity={0.8} className="h-40">
          <div className="flex gap-4 px-4">
            <h2 className="text-5xl font-bold uppercase text-neutral-200">
              our awards
            </h2>
            <h2 className="text-5xl font-bold uppercase text-background drop-shadow-[0_1.2px_1.2px_rgba(163,163,163,0.7)]">
              our awards
            </h2>
          </div>
        </Marquee>
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Digital Marketing | Content Marketing White Paper | 2021",
              description: "How 2020 Shaped Consumer Trends",
              link: {
                href: "#",
                cta: "Read More",
              },
            },
            {
              title:
                "Digital Marketing | Content Marketing Blog Single Post | 2021",
              description: "6 Ways to Keep a Presentation Engaging & Effective",
              link: {
                href: "#",
                cta: "Read More",
              },
            },
            {
              title:
                "Digital Marketing | Marketing, Digital COVID-19 Digital Response | 2021",
              description: "Dallara: Pursuit of Health",
              link: {
                href: "#",
                cta: "Download now",
              },
            },
          ].map((i, index) => (
            <div
              key={index}
              className="px6 flex flex-col items-center justify-between rounded-lg bg-stone-100 px-4 py-7 text-center"
            >
              <div>
                <h3 className="pb-6 text-2xl font-bold text-zinc-900">
                  {i.title}
                </h3>
              </div>
              <div>
                <Image
                  src={`/assets/awards/${index % 2 === 0 ? "gold-awards" : "platinum-awards"}.png`}
                  width={268}
                  height={260}
                  alt="award"
                  className="h-auto w-56 pb-6"
                />
              </div>
              <div>
                <p className="pb-6 font-poppins font-medium text-neutral-500">
                  {i.title}
                </p>
                <Button
                  variant="link"
                  asChild
                  className="text-lg text-orange-500"
                >
                  <Link href={i.link.href}>
                    {i.link.cta} <MoveUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
