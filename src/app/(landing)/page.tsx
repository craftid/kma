import Ampersand from "@/components/common/ampersand"
import Marquee from "@/components/common/marquee"
import AwardCards from "@/components/landing/award-cards"
import MissionStatement from "@/components/landing/mission-statement"
import NumberedCarousel from "@/components/landing/numbered-carousel"
import Portfolio from "@/components/landing/portfolio"

import Hero from "./_components/hero"
import OurClients from "./_components/our-clients"

export default function Home() {
  return (
    <main className="flex w-full flex-1  flex-col">
      <Hero />
      <div className="relative my-8  flex w-full flex-col justify-center gap-6 overflow-hidden">
        <Marquee baseVelocity={1}>
          <div className="flex gap-6 text-6xl uppercase text-neutral-400">
            incentive trips <Ampersand className="h-10 w-10" /> AV management{" "}
            <Ampersand /> virtual events <Ampersand /> production services{" "}
            <Ampersand /> event design <Ampersand />
          </div>
        </Marquee>
        <Marquee baseVelocity={-1}>
          <div className="flex gap-6 text-6xl uppercase text-neutral-400">
            incentive trips <Ampersand className="h-10 w-10" /> AV management{" "}
            <Ampersand /> virtual events <Ampersand /> production services{" "}
            <Ampersand /> event design <Ampersand />
          </div>
        </Marquee>
      </div>
      <div className="container pb-14">
        <NumberedCarousel />
      </div>
      <OurClients />
      <div className="container">
        <Portfolio />
      </div>
      <div className="container my-6">
        <MissionStatement />
      </div>
      <AwardCards />
    </main>
  )
}
