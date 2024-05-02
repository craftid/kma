import { MoveUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute z-0 object-contain",
          "left-1/2 top-1/2",
          "transform",
          "translate-x-1/2",
          "translate-y-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "blur-lg"
        )}
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <path
            fill="url(#blob1)"
            filter="url(#noiseFilter)"
            d="M61.6,-47.2C77,-29.9,84.7,-4.4,76.8,12.4C68.8,29.2,45.4,37.4,23.6,47.2C1.7,57.1,-18.5,68.7,-31.3,63.2C-44.1,57.7,-49.6,35.1,-49.2,17C-48.7,-1.2,-42.4,-15,-33.3,-31C-24.1,-46.9,-12,-65,5.5,-69.4C23.1,-73.8,46.2,-64.6,61.6,-47.2Z"
            transform="translate(100 100)"
          />
          <defs>
            <linearGradient id="blob1" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="hsla(264, 100%, 95%, 1)"></stop>
              <stop offset="30%" stopColor="hsla(24, 93%, 73%, 1)"></stop>
              <stop offset="67%" stopColor="hsla(8, 73%, 60%, 1)"></stop>
              <stop offset="100%" stopColor="hsla(265, 53%, 29%, 1)"></stop>
            </linearGradient>
          </defs>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="2"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix
              in="colorNoise"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
            ></feColorMatrix>
            <feComposite
              operator="in"
              in2="SourceGraphic"
              result="monoNoise"
            ></feComposite>
            <feBlend in="SourceGraphic" in2="monoNoise" mode="screen"></feBlend>
          </filter>
        </svg>
      </div>
      <div className="container relative z-10 max-w-screen-xl py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex  flex-shrink-0 flex-col">
            <div className="flex ">
              <DecorativeText text="Strategy" direction="top" />
              <div className="flex flex-grow-0 basis-3/12 items-end">
                <Button
                  className={cn(
                    "relative z-10 -mb-4 flex h-36 w-36 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600"
                  )}
                  type="button"
                  variant="glass"
                >
                  <MoveUpRight />
                  <span>See HOW</span>
                </Button>
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow-0 basis-3/12">
                <p className="mt-4 text-xl font-medium uppercase text-neutral-500">
                  From experiential events to creative excellence,{" "}
                  <span className="text-orange-500">
                    our strategic approach
                  </span>{" "}
                  leads to winning results all achieved in a collaborative way
                </p>
              </div>
              <DecorativeText text="Redefined" direction="bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DecorativeText = ({
  text,
  direction,
}: {
  text: string
  direction: "top" | "bottom"
}) => {
  return (
    <div
      className={cn(
        "relative inline-flex items-center text-[164px] font-bold uppercase leading-none",
        direction === "top" ? "pt-14" : "pb-14"
      )}
    >
      <div
        className={cn(
          "absolute left-0 inline-flex h-3 overflow-hidden text-neutral-400/20",
          direction === "top" ? "top-0 align-text-top" : "bottom-0 items-end"
        )}
      >
        <span className="-mb-12 ">{text}</span>
      </div>
      <div
        className={cn(
          "absolute left-0 inline-flex h-4 overflow-hidden text-neutral-400/30",
          direction === "top" ? "top-4 align-text-top" : "bottom-4 items-end"
        )}
      >
        <span className="-mb-12 ">{text}</span>
      </div>
      <div
        className={cn(
          "absolute left-0 inline-flex h-5 overflow-hidden text-neutral-400/50",
          direction === "top" ? "top-9 align-text-top" : "bottom-9 items-end"
        )}
      >
        <span className="-mb-12 ">{text}</span>
      </div>
      <p className="-mb-10">{text}</p>
    </div>
  )
}
