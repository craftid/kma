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
  cursorStyles?: CursorStyleProps
}

interface CursorStyleProps {
  fill: string
  dimensions: number | { width: number; height: number }
}

interface UseCursorProps {
  targets: string[]
  cursorStyles: CursorStyleProps
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
  cursorStyles = {
    fill: "currentColor",
    dimensions: 20,
  },
  children,
}: AnimatedCursorProviderProps) => {
  const containerRef = useRef(null)
  const cursorRef = useRef<SVGSVGElement>(null)
  const elementsRef = useRef(targets)
  const [cursorText, setCursorText] = useState("")
  const [cursorVariant, setCursorVariant] = useState("default")

  const mouse = useMouse(containerRef, {
    fps: 60,
    enterDelay: 100,
    leaveDelay: 100,
  })

  // const mouse = useEvent(containerRef, "mousemove", (event: MouseEvent) => {
  //   return {
  //     x: event.clientX,
  //     y: event.clientY,
  //   }
  // })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.x
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.y
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition - 5,
      y: mouseYPosition - 5,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    // project: {
    //   opacity: 1,
    //   // backgroundColor: "rgba(255, 255, 255, 0.6)",
    //   backgroundColor: "#fff",
    //   color: "#000",
    //   height: 80,
    //   width: 80,
    //   fontSize: "18px",
    //   x: mouseXPosition - 32,
    //   y: mouseYPosition - 32,
    // },
    // contact: {
    //   opacity: 1,
    //   backgroundColor: "#FFBCBC",
    //   color: "#000",
    //   height: 64,
    //   width: 64,
    //   fontSize: "32px",
    //   x: mouseXPosition - 48,
    //   y: mouseYPosition - 48,
    // },
  }

  useEffect(() => {
    const currentElements = elementsRef.current
    const handleMouseEnter = (event: MouseEvent) => {
      console.log("Mouse entered:", (event.target as HTMLElement).tagName)
    }

    const handleMouseLeave = (event: MouseEvent) => {
      console.log("Mouse left:", (event.target as HTMLElement).tagName)
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

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  }

  const providerValue = useMemo(
    () => ({ targets, cursorStyles }),
    [targets, cursorStyles]
  )

  return (
    <AnimatedCursorContext.Provider value={providerValue}>
      <div id="cursor-scope" ref={containerRef}>
        <motion.div
          variants={variants}
          className="bo pointer-events-none fixed left-0 top-0 z-[100000] rounded-full bg-primary"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
        {/* <motion.svg
          ref={cursorRef}
          className="pointer-events-none"
          width={cursorStyles.dimensions.toString()}
          height={cursorStyles.dimensions.toString()}
          viewBox={`0 0 ${cursorStyles.dimensions} ${cursorStyles.dimensions}`}
          animate={cursorVariant}
          transition={spring}
        >
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            {cursorText}
          </text>
          <circle cx="0" cy="0" r="10" fill="currentColor" />
        </motion.svg> */}

        <ul>
          {/* show li with each keys and their values of mouse  */}
          {Object.entries(mouse).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>

        {/* show current variant and its values */}
        <ul>
          <li>{variants.default.x}</li>
          <li>{variants.default.y}</li>
        </ul>

        {children}
      </div>
    </AnimatedCursorContext.Provider>
  )
}
