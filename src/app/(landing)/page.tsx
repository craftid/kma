import Marquee from "@/components/common/marquee"
import MissionStatement from "@/components/landing/mission-statement"
import NumberedCarousel from "@/components/landing/numbered-carousel"
import Portfolio from "@/components/landing/portfolio"

import { Animation } from "@/app/_components/animation"

import CursorStats from "./_components/cursor-stats"
import Hero from "./_components/hero"
import OurClients from "./_components/our-clients"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex h-full w-full flex-col items-center">
        <Hero />
        <CursorStats />
        <OurClients />
        <div className="my-10 flex py-10">
          <Animation />
        </div>
        <div className="container">
          <Portfolio />
        </div>
        <div className="relative my-8  flex w-full flex-col justify-center overflow-hidden">
          <Marquee baseVelocity={2}>
            <h2 className="text-3xl font-bold">
              Interactive MarqueeLoopingElement
            </h2>
          </Marquee>
          <Marquee baseVelocity={-2}>
            <h2 className="text-3xl font-bold">
              Interactive MarqueeLoopingElement
            </h2>
          </Marquee>
        </div>
        <div className="container">
          <NumberedCarousel />
        </div>
        <div className="container my-6">
          <MissionStatement />
        </div>
      </section>
    </main>
  )
}
