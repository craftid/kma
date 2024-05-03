"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export default function NumberedCarouselItem(props: {
  title: string
  description: string
  action: JSX.Element
  image: string
  collapsed?: boolean
  onClick?: () => void
  children?: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const firstUpdate = useRef(true)

  // useEffect(() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false
  //     return
  //   }
  //   if (ref.current && !props.collapsed && typeof window !== "undefined") {
  //     setTimeout(() => {
  //       ref.current?.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //       })
  //     }, 300)
  //   }
  // })

  return (
    <div
      ref={ref}
      onClick={props.onClick}
      className="rounded-lg bg-neutral-950"
    >
      <div className={cn("p-6", props.collapsed ? "cursor-pointer" : "")}>
        <h3 className="text-lg font-bold uppercase text-neutral-50 lg:text-2xl">
          {props.title}
        </h3>
      </div>
      <motion.div
        initial={props.collapsed ? { height: 0 } : { height: "auto" }}
        animate={props.collapsed ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.3 }}
        className="space-y-4 overflow-hidden"
      >
        <motion.div
          initial={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
          animate={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-between p-6 lg:flex-row"
        >
          <div className="lg:basis-1/3">
            <motion.p
              initial={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
              animate={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-neutral-500"
            >
              {props.description}
            </motion.p>
          </div>
          <motion.div
            initial={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
            animate={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center"
          >
            {props.action}
          </motion.div>
        </motion.div>

        <motion.div
          initial={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
          animate={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
          transition={{ delay: 1 }}
          className="px-6"
        >
          {props.image && (
            <Image
              key={props.title}
              src={props.image}
              alt={props.title}
              width={600}
              height={400}
              className="h-auto w-full max-w-full rounded-lg"
            />
          )}
        </motion.div>

        <motion.div
          initial={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
          animate={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="p-6"
        >
          {props.children}
        </motion.div>
      </motion.div>
    </div>
  )
}
