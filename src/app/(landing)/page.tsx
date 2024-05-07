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
      <div className="relative my-8 flex  w-full flex-col justify-center gap-6 overflow-hidden xl:my-32">
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
      <div className="container pb-14" id="services">
        <NumberedCarousel />
      </div>
      <div className="w-full" id="clients">
        <OurClients />
      </div>
      <div className="container" id="portfolio">
        <Portfolio />
      </div>
      <div className="container my-14" id="mission">
        <MissionStatement />
      </div>
      <div className="w-full" id="awards">
        <AwardCards />
      </div>
    </main>
  )
}
