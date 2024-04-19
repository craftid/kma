"use client"

import { useRef, useState } from "react"
import useMouse from "@hooks/useMouse"
import { motion } from "framer-motion"

export default function Cursor({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  const [cursorText, setCursorText] = useState("")
  const [cursorVariant, setCursorVariant] = useState("default")

  const ref = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  }
  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
      {children}
    </div>
  )
}
