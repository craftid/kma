import Marquee from "@/components/common/marquee"
import MissionStatement from "@/components/landing/mission-statement"
import NumberedCarousel from "@/components/landing/numbered-carousel"
import Portfolio from "@/components/landing/portfolio"

import { Animation } from "@/app/_components/animation"

import CursorStats from "./_components/cursor-stats"
import OurClients from "./_components/our-clients"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex h-full w-full flex-col items-center">
        <h1 className="text-center text-4xl font-bold">Welcome to Mayabytes</h1>
        <p className="text-center text-lg">
          A starter template for <span className="underline">Mayabytes</span>
        </p>

        <CursorStats />
        <OurClients />
        <div className="my-10 flex py-10">
          <Animation />
        </div>
        <div className="container">
          <Portfolio />
        </div>
        <div className="relative h-20 w-full overflow-hidden">
          <Marquee speed={0.08}>
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
