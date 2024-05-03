import Image from "next/image"
import Link from "next/link"

import Marquee from "../common/marquee"

export default function AwardCards(props: { children?: React.ReactNode }) {
  return (
    <div className="relative my-14 flex flex-col overflow-hidden">
      <div className="pointer-events-auto absolute inset-0 flex-col gap-8">
        <Marquee baseVelocity={1} className="h-40">
          <div className="flex gap-4 px-4">
            <h2 className="text-5xl font-bold uppercase text-neutral-400">
              our awards
            </h2>
            <h2 className="text-5xl font-bold uppercase text-background drop-shadow-[0_1.2px_1.2px_rgba(163,163,163,0.8)]">
              our awards
            </h2>
          </div>
        </Marquee>
        <Marquee baseVelocity={-1} className="h-40">
          <div className="flex gap-4 px-4">
            <h2 className="text-5xl font-bold uppercase text-neutral-400">
              our awards
            </h2>
            <h2 className="text-5xl font-bold uppercase text-background drop-shadow-[0_1.2px_1.2px_rgba(163,163,163,0.8)]">
              our awards
            </h2>
          </div>
        </Marquee>
        <Marquee baseVelocity={1} className="h-40">
          <div className="flex gap-4 px-4">
            <h2 className="text-5xl font-bold uppercase text-neutral-400">
              our awards
            </h2>
            <h2 className="text-5xl font-bold uppercase text-background drop-shadow-[0_1.2px_1.2px_rgba(163,163,163,0.8)]">
              our awards
            </h2>
          </div>
        </Marquee>
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-3 gap-16">
          {[
            {
              title: "Digital Marketing | Content Marketing White Paper | 2021",
              description: "How 2020 Shaped Consumer Trends",
              link: "#",
            },
            {
              title:
                "Digital Marketing | Content Marketing Blog Single Post | 2021",
              description: "6 Ways to Keep a Presentation Engaging & Effective",
              link: "#",
            },
            {
              title:
                "Digital Marketing | Marketing, Digital COVID-19 Digital Response | 2021",
              description: "Dallara: Pursuit of Health",
              link: "#",
            },
          ].map((i, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-neutral-200 py-7"
            >
              <Image
                src={`/assets/awards/${index % 2 === 0 ? "gold-awards" : "platinum-awards"}.png`}
                width={300}
                height={300}
                alt="award"
                className="h-auto w-36"
              />
              <p className="text-neutral-500">{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
