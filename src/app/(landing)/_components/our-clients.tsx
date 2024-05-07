"use client"

import { useRef, type RefObject } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

const OurClients = () => {
  const inViewRef = useRef(null)
  const isInView = useInView(inViewRef as RefObject<Element>, {
    margin: "-35%",
    once: true,
  })
  return (
    <section
      ref={inViewRef}
      id="our-clients"
      className="our-clients flex min-h-[80vh] flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-7xl font-extrabold uppercase"
      >
        Our Clients
      </motion.h2>
      <div className="container my-8">
        <div className="grid w-full grid-cols-2 [clip-path:inset(2px_0_0_2px)] *:border-l *:border-t *:border-gray-300 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }, (_, index) => index + 1).map((i) => (
            <motion.div
              key={i}
              className={cn("flex items-center justify-center ")}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src={`/assets/clients/client-${i}.png`}
                alt="client"
                width={163}
                className="h-auto w-36"
                height={163}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
OurClients.displayName = "OurClients"

export default OurClients
