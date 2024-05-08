"use client"

import { RefObject, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

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
  const isInView = useInView(ref as RefObject<Element>, {
    margin: "-15%",
  })
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
    <motion.div
      ref={ref}
      onClick={props.onClick}
      className="rounded-lg  bg-neutral-950 xl:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn("p-6", props.collapsed ? "cursor-pointer" : "")}>
        <h3 className="text-lg font-bold uppercase text-neutral-50 lg:text-2xl xl:text-6xl">
          {props.title}
        </h3>
      </div>
      <motion.div
        initial={props.collapsed ? { height: 0 } : { height: "auto" }}
        animate={props.collapsed ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.3 }}
        className={cn(
          "space-y-4 overflow-hidden",
          !props.collapsed ? " p-6" : ""
        )}
      >
        <motion.div
          initial={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
          animate={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-between border-t border-neutral-400 py-6 lg:flex-row"
        >
          <div className="lg:basis-2/6">
            <motion.p
              initial={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
              animate={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-neutral-400"
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
        {props.children && (
          <motion.div
            initial={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
            animate={props.collapsed ? { opacity: 0 } : { opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="p-6"
          >
            {props.children}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
