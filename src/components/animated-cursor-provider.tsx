"use client"

import type { PropsWithChildren } from "react"
import { createContext, useContext, useMemo, useRef, useState } from "react"
import { LayoutGroup, motion } from "framer-motion"

import useEvent from "@/hooks/useEvent"
import useMouse, { initialState } from "@/hooks/useMouse"

interface AnimatedCursorProviderProps extends PropsWithChildren {
  setCursorText?: (text: string) => void
  setCursorVariant?: (variant: string) => void
  mouse?: ReturnType<typeof useMouse>
}

interface UseCursorProps {
  setCursorText?: (text: string) => void
  setCursorVariant?: (variant: string) => void
  mouse: ReturnType<typeof useMouse>
}

const defaultContext: AnimatedCursorProviderProps = {
  children: null,
  mouse: initialState,
}

const AnimatedCursorContext = createContext<UseCursorProps | undefined>(
  undefined
)

export const useCursor = () =>
  useContext(AnimatedCursorContext) ?? defaultContext

export const AnimatedCursorProvider = (props: AnimatedCursorProviderProps) => {
  const context = useContext(AnimatedCursorContext)

  if (context) return props.children
  return <Cursor {...props} />
}

const Cursor = ({ children }: AnimatedCursorProviderProps) => {
  const containerRef = useRef(null)
  const cursorRef = useRef(null)
  const [cursorText, setCursorText] = useState("")
  const [cursorVariant, setCursorVariant] = useState("default")

  const mouse = useMouse(containerRef, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 60,
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null && mouse.clientX !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.y !== null && mouse.clientY !== null) {
    mouseYPosition = mouse.clientY
  }

  useEvent(containerRef, "mouseenter", () => {
    setCursorVariant("hover")
  })

  useEvent(containerRef, "mouseleave", () => {
    setCursorText("")
    setCursorVariant("default")
  })

  const variants = {
    default: {
      x: mouseXPosition - 4,
      y: mouseYPosition - 4,
      scale: 1,
    },
    hover: {
      x: mouseXPosition - 4,
      y: mouseYPosition - 4,
      scale: 1.5,
    },
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  }

  const providerValue = useMemo(
    () => ({ setCursorText, setCursorVariant, mouse }),
    [setCursorText, setCursorVariant, mouse]
  )

  return (
    <AnimatedCursorContext.Provider value={providerValue}>
      <div id="cursor-scope" ref={containerRef}>
        <LayoutGroup id="cursor">
          <motion.div
            ref={cursorRef}
            variants={variants}
            animate={cursorVariant}
            className="pointer-events-none fixed z-[9999] flex h-2 w-2 items-stretch justify-center rounded-full bg-orange-500 text-center text-xs font-bold leading-5 text-white"
            transition={spring}
            layout
            layoutId="cursor"
          >
            <span className="cursorText">{cursorText}</span>
          </motion.div>
        </LayoutGroup>
        {children}
      </div>
    </AnimatedCursorContext.Provider>
  )
}
