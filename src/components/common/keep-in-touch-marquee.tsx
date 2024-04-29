"use client"

import { motion } from "framer-motion"
import { MoveUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

const Marquee = (props: { children?: React.ReactNode }) => {
  return (
    <motion.div
      animate={{
        x: [0, -2300],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        },
      }}
      className="absolute -left-0 top-0 flex gap-4 "
    >
      <div className="flex whitespace-nowrap">
        <span className="-ml-3 inline-block whitespace-nowrap align-bottom text-[10rem] font-extrabold  uppercase leading-none">
          Keep in touch
        </span>
        <div className="self-center">
          <Button
            className={cn(
              "flex h-24 w-24 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600"
            )}
            type="button"
            variant="glass"
          >
            <MoveUpRight />
            <span>Let&apos;s Talk</span>
          </Button>
        </div>
      </div>
      <div className="flex whitespace-nowrap">
        <span className="-ml-3 inline-block whitespace-nowrap align-bottom text-[10rem] font-extrabold  uppercase leading-none">
          Keep in touch
        </span>
        <div className="self-center">
          <Button
            className={cn(
              "flex h-24 w-24 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600"
            )}
            type="button"
            variant="glass"
          >
            <MoveUpRight />
            <span>Let&apos;s Talk</span>
          </Button>
        </div>
      </div>
      <div className="flex whitespace-nowrap">
        <span className="-ml-3 inline-block whitespace-nowrap align-bottom text-[10rem] font-extrabold  uppercase leading-none">
          Keep in touch
        </span>
        <div className="self-center">
          <Button
            className={cn(
              "flex h-24 w-24 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600"
            )}
            type="button"
            variant="glass"
          >
            <MoveUpRight />
            <span>Let&apos;s Talk</span>
          </Button>
        </div>
      </div>
      <div className="flex whitespace-nowrap">
        <span className="-ml-3 inline-block whitespace-nowrap align-bottom text-[10rem] font-extrabold  uppercase leading-none">
          Keep in touch
        </span>
        <div className="self-center">
          <Button
            className={cn(
              "flex h-24 w-24 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600"
            )}
            type="button"
            variant="glass"
          >
            <MoveUpRight />
            <span>Let&apos;s Talk</span>
          </Button>
        </div>
      </div>
      <div className="flex whitespace-nowrap">
        <span className="-ml-3 inline-block whitespace-nowrap align-bottom text-[10rem] font-extrabold  uppercase leading-none">
          Keep in touch
        </span>
        <div className="self-center">
          <Button
            className={cn(
              "flex h-24 w-24 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600"
            )}
            type="button"
            variant="glass"
          >
            <MoveUpRight />
            <span>Let&apos;s Talk</span>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default Marquee
