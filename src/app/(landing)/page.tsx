import Marquee from "@/components/common/marquee"
import MissionStatement from "@/components/landing/mission-statement"
import NumberedCarousel from "@/components/landing/numbered-carousel"
import Portfolio from "@/components/landing/portfolio"

import { Animation } from "@/app/_components/animation"

import Hero from "./_components/hero"
import OurClients from "./_components/our-clients"

export default function Home() {
  return (
    <main className="flex w-full flex-1  flex-col">
      <Hero />
      <OurClients />
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
    </main>
  )
}
