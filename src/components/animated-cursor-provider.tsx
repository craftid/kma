"use client"

import type { PropsWithChildren } from "react"
import { createContext, useContext, useMemo, useRef, useState } from "react"
import { LayoutGroup, motion } from "framer-motion"
import { Radius } from "lucide-react"

import { cn } from "@/lib/utils"
import useMouse, { initialState } from "@/hooks/useMouse"

interface AnimatedCursorProviderProps extends PropsWithChildren {
  setCursorText?: (text: string) => void
  setCursorVariant?: (variant: string) => void
  setCurrentBounds?: (bounds: DOMRect) => void
  mouse?: ReturnType<typeof useMouse>
}

interface UseCursorProps {
  setCursorText?: (text: string) => void
  setCurrentBounds?: (bounds: DOMRect) => void
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
/**
 * @example
 * ```tsx
 * const { setCursorText, setCursorVariant, setCurrentBounds, mouse } = useCursor();
 * ```
 */
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

  const [currentBounds, setCurrentBounds] = useState({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  })

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

  // useEvent(containerRef, "mouseenter", () => {
  //   setCursorVariant("hover")
  // })

  // useEvent(containerRef, "mouseleave", () => {
  //   setCursorText("")
  //   setCursorVariant("default")
  // })

  const variants = {
    default: {
      x: mouseXPosition - 4,
      y: mouseYPosition - 4,
      scale: 1,
      borderWidth: "0px",
    },
    hover: {
      x: mouseXPosition,
      y: mouseYPosition,
      scale: 1.5,
    },
    link: {
      x: currentBounds.x,
      y: currentBounds.y,
      width: currentBounds.width,
      height: currentBounds.height,
      borderWidth: "1px",
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    portfolioItem: {
      x: currentBounds.x,
      y: currentBounds.y - 4,
      width: currentBounds.width,
      height: currentBounds.height,
      borderWidth: "1px",
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    navHover: {
      x: currentBounds.x + 16,
      y: currentBounds.y + currentBounds.height / 2 - 4,
      backgroundColor: "rgb(2 132 199)",
    },
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  }

  const providerValue = useMemo(
    () => ({ setCursorText, setCursorVariant, setCurrentBounds, mouse }),
    [setCursorText, setCursorVariant, setCurrentBounds, mouse]
  )

  return (
    <AnimatedCursorContext.Provider value={providerValue}>
      <div id="cursor-scope" ref={containerRef}>
        <LayoutGroup id="cursor">
          <motion.div
            ref={cursorRef}
            variants={variants}
            animate={cursorVariant}
            className={cn(
              "pointer-events-none fixed z-[9999] hidden h-2 w-2 md:flex",
              "border-0 border-primary bg-primary",
              "text-center text-xs font-bold leading-5 text-white",
              "origin-center transform-gpu items-stretch justify-center rounded-full "
            )}
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
