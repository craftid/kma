"use client"

import { motion } from "framer-motion"
import { MoveUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "absolute z-0 h-full w-full object-cover",
          "left-1/2 top-1/2",
          "transform",
          "translate-x-1/2",
          "translate-y-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "blur-md"
        )}
      >
        <motion.svg
          className="h-full w-full scale-125"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <motion.path
            fill="url(#gradient)"
            initial={{
              d: "M43.9,-62.9C53.7,-53.4,56.1,-36.2,60.5,-20.2C64.9,-4.3,71.3,10.5,70.9,26.6C70.6,42.7,63.5,60.2,50.6,64C37.6,67.8,18.8,57.9,4.3,52C-10.3,46.2,-20.6,44.3,-35.1,41C-49.5,37.7,-68.2,33,-78.3,20.9C-88.5,8.8,-90.3,-10.5,-82.5,-24.5C-74.8,-38.4,-57.6,-47,-42.2,-54.7C-26.9,-62.4,-13.4,-69.3,1.8,-71.8C17.1,-74.3,34.2,-72.4,43.9,-62.9Z",
            }}
            animate={{
              d: [
                "M43.9,-62.9C53.7,-53.4,56.1,-36.2,60.5,-20.2C64.9,-4.3,71.3,10.5,70.9,26.6C70.6,42.7,63.5,60.2,50.6,64C37.6,67.8,18.8,57.9,4.3,52C-10.3,46.2,-20.6,44.3,-35.1,41C-49.5,37.7,-68.2,33,-78.3,20.9C-88.5,8.8,-90.3,-10.5,-82.5,-24.5C-74.8,-38.4,-57.6,-47,-42.2,-54.7C-26.9,-62.4,-13.4,-69.3,1.8,-71.8C17.1,-74.3,34.2,-72.4,43.9,-62.9Z",
                "M37.8,-47.6C53.2,-40.9,72.7,-35.4,82.2,-22.8C91.8,-10.1,91.5,9.8,82,22.8C72.5,35.8,53.7,42,38.6,45.2C23.4,48.5,11.7,48.7,-3.1,53C-17.8,57.2,-35.7,65.4,-49.2,61.7C-62.8,57.9,-72.1,42.2,-70.7,27.5C-69.2,12.7,-57.1,-0.9,-49.5,-13.6C-41.9,-26.2,-38.9,-37.7,-31.4,-47C-23.9,-56.2,-11.9,-63.2,-0.3,-62.7C11.2,-62.3,22.5,-54.3,37.8,-47.6Z",
                "M29.4,-37C41.7,-31.5,57.9,-27.8,65.2,-18.1C72.6,-8.5,71.1,7.1,63.4,17.5C55.8,27.9,41.9,33.3,30.3,39.2C18.7,45.1,9.3,51.6,-2.6,55.2C-14.5,58.7,-29,59.3,-37.9,52.5C-46.8,45.7,-50,31.5,-54.3,17.8C-58.6,4,-63.9,-9.2,-61.7,-21.3C-59.5,-33.4,-49.8,-44.3,-38.3,-50.1C-26.7,-55.9,-13.4,-56.6,-2.4,-53.3C8.5,-49.9,17,-42.6,29.4,-37Z",
                "M43.9,-62.9C53.7,-53.4,56.1,-36.2,60.5,-20.2C64.9,-4.3,71.3,10.5,70.9,26.6C70.6,42.7,63.5,60.2,50.6,64C37.6,67.8,18.8,57.9,4.3,52C-10.3,46.2,-20.6,44.3,-35.1,41C-49.5,37.7,-68.2,33,-78.3,20.9C-88.5,8.8,-90.3,-10.5,-82.5,-24.5C-74.8,-38.4,-57.6,-47,-42.2,-54.7C-26.9,-62.4,-13.4,-69.3,1.8,-71.8C17.1,-74.3,34.2,-72.4,43.9,-62.9Z",
              ],
            }}
            filter="url(#noiseFilter)"
            transition={{
              duration: 5,
              repeat: Infinity,
              yoyo: Infinity,
              ease: "easeInOut",
            }}
            transform="translate(100 100)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="hsla(264, 100%, 95%, 1)"></stop>
              <stop offset="30%" stopColor="hsla(24, 93%, 73%, 1)"></stop>
              <stop offset="67%" stopColor="hsla(8, 73%, 60%, 1)"></stop>
              <stop offset="100%" stopColor="hsla(265, 53%, 29%, 1)"></stop>
            </linearGradient>
          </defs>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="3"
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
        </motion.svg>
      </div>
      <div className="container relative z-10 max-w-screen-xl py-28">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <div className="flex">
              <DecorativeText text="Strategy" direction="top" />
              <div className="flex flex-grow-0  basis-72 items-end">
                <Button
                  className={cn(
                    "relative z-10 -mb-4 flex h-36 w-36 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600 xl:-mb-4"
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
              <div className="flex-grow-0 basis-72">
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
        "relative inline-flex items-center font-bold uppercase leading-none lg:text-9xl  xl:text-[164px]",
        direction === "top" ? "pt-14" : "pb-14"
      )}
    >
      <div
        className={cn(
          "absolute left-0 inline-flex h-3 overflow-hidden text-neutral-500/10",
          direction === "top" ? "top-0 align-text-top" : "bottom-0 items-end"
        )}
      >
        <span className="-mb-12 ">{text}</span>
      </div>
      <div
        className={cn(
          "absolute left-0 inline-flex h-4 overflow-hidden text-neutral-500/20",
          direction === "top" ? "top-4 align-text-top" : "bottom-4 items-end"
        )}
      >
        <span className="-mb-12 ">{text}</span>
      </div>
      <div
        className={cn(
          "absolute left-0 inline-flex h-5 overflow-hidden text-neutral-500/30",
          direction === "top" ? "top-9 align-text-top" : "bottom-9 items-end"
        )}
      >
        <span className="-mb-12 ">{text}</span>
      </div>
      <p className="lg:-mb-10">{text}</p>
    </div>
  )
}
