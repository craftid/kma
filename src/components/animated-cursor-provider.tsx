"use client"

import type { PropsWithChildren } from "react"
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { motion } from "framer-motion"

import useMouse from "@/hooks/useMouse"

interface AnimatedCursorProviderProps extends PropsWithChildren {
  targets?: string[]
  targetStyles?: TarGetStylesProps
}

interface TarGetStylesProps {
  fill: string
  dimensions: number | { width: number; height: number }
}

interface UseCursorProps {
  targets: string[]
  targetStyles: TarGetStylesProps
}

const defaultContext: AnimatedCursorProviderProps = { targets: undefined }

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
const Cursor = ({
  targets = ["a, button", ".underline"],
  targetStyles = {
    fill: "currentColor",
    dimensions: 20,
  },
  children,
}: AnimatedCursorProviderProps) => {
  const containerRef = useRef(null)
  const cursorRef = useRef(null)
  const elementsRef = useRef(targets)
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

  useEffect(() => {
    const currentElements = elementsRef.current
    const handleMouseEnter = (event: MouseEvent) => {
      setCursorText((event.target as HTMLElement).tagName)
      setCursorVariant("hover")
    }

    const handleMouseLeave = (event: MouseEvent) => {
      setCursorText("")
      setCursorVariant("default")
    }

    currentElements.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(
          "mouseenter",
          handleMouseEnter as EventListener
        )
        element.addEventListener(
          "mouseleave",
          handleMouseLeave as EventListener
        )
      })
    })

    return () => {
      currentElements.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
          element.removeEventListener(
            "mouseenter",
            handleMouseEnter as EventListener
          )
          element.removeEventListener(
            "mouseleave",
            handleMouseLeave as EventListener
          )
        })
      })
    }
  }, [elementsRef]) // Update the effect when elementsRef changes

  const variants = {
    default: {
      x: mouseXPosition - 10,
      y: mouseYPosition - 10,
      scale: 1,
    },
    hover: {
      x: mouseXPosition - 10,
      y: mouseYPosition - 10,
      scale: 1.5,
    },
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  }

  const providerValue = useMemo(
    () => ({ targets, targetStyles }),
    [targets, targetStyles]
  )

  return (
    <AnimatedCursorContext.Provider value={providerValue}>
      <div id="cursor-scope" ref={containerRef}>
        <motion.div
          ref={cursorRef}
          variants={variants}
          animate={cursorVariant}
          className="pointer-events-none fixed z-[9999] h-5 w-5 rounded-full bg-rose-500"
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>

        {/* <motion.svg
          ref={cursorRef}
          variants={variants}
          className="cursor pointer-events-none fixed"
          width={
            typeof targetStyles.dimensions === "object"
              ? targetStyles.dimensions.width.toString()
              : targetStyles.dimensions.toString()
          }
          height={
            typeof targetStyles.dimensions === "object"
              ? targetStyles.dimensions.width.toString()
              : targetStyles.dimensions.toString()
          }
          viewBox={`0 0 ${typeof targetStyles.dimensions === "object" ? targetStyles.dimensions.width.toString() : targetStyles.dimensions.toString()} ${
            typeof targetStyles.dimensions === "object"
              ? targetStyles.dimensions.width.toString()
              : targetStyles.dimensions.toString()
          }`}
          animate={cursorVariant}
        >
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            {cursorText}
          </text>
          <circle cx="0" cy="0" r="10" fill="currentColor" />
        </motion.svg> */}
        {children}
      </div>
    </AnimatedCursorContext.Provider>
  )
}
