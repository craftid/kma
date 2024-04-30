"use client"

import React, { useEffect, useRef } from "react"
import { isBrowser, motion } from "framer-motion"

import useEvent from "@/hooks/useEvent"

const Marquee = ({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode
  speed?: number
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const currentTranslation = 0
  const directionRef = useRef(true)
  const scrollTopRef = useRef(0)
  const metric = 100
  const isHovered = useRef(false)

  const lerp = {
    current: currentTranslation,
    target: currentTranslation,
    factor: 0.2,
  }

  useEvent(isBrowser ? window : null, "scroll", () => {
    let direction = window.scrollY || document.documentElement.scrollTop
    if (direction > scrollTopRef.current) {
      directionRef.current = true
      lerp.target += speed * 5
    } else {
      directionRef.current = false
      lerp.target -= speed * 5
    }
    scrollTopRef.current = direction <= 0 ? 0 : direction
  })

  const goForward = () => {
    lerp.target += speed
    if (lerp.target > metric) {
      lerp.current -= metric * 2
      lerp.target -= metric * 2
    }
  }

  const goBackwards = () => {
    lerp.target -= speed
    if (lerp.target < -metric) {
      lerp.current -= -metric * 2
      lerp.target -= -metric * 2
    }
  }

  const update = () => {
    if (elementRef.current === null) return
    directionRef.current ? goForward() : goBackwards()
    lerp.current = lerp.current * (1 - lerp.factor) + lerp.target * lerp.factor
    elementRef.current.style.transform = `translateX(${lerp.current}%)`
  }

  const renderLoop = () => {
    update()
    requestAnimationFrame(renderLoop)
  }

  const handleMouseEnter = () => {
    isHovered.current = true
    lerp.factor = 0
  }

  const handleMouseLeave = () => {
    isHovered.current = false
    lerp.factor = 0.2
  }

  useEffect(() => {
    if (isHovered.current) return
    renderLoop()
  }, [])

  // if children width is less than 100% repeat children
  // if children width is greater than 100% do not repeat children

  const repeatChildrenIfNeeded = (
    children: React.ReactNode
  ): React.ReactNode => {
    const containerWidth = elementRef.current?.offsetWidth
    const childrenWidth = elementRef.current?.scrollWidth

    if (childrenWidth && containerWidth && childrenWidth <= containerWidth) {
      const repeatCount = Math.ceil(containerWidth / childrenWidth) + 1
      console.log(
        repeatCount,
        Math.ceil(containerWidth / childrenWidth),
        childrenWidth,
        containerWidth
      )
      const repeatedChildren = Array.from({ length: repeatCount }).map(
        (_, index) => <React.Fragment key={index}>{children}</React.Fragment>
      )

      return repeatedChildren
    }

    return children
  }

  return (
    <motion.div
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex"
    >
      {repeatChildrenIfNeeded(children)}
    </motion.div>
  )
}

export default Marquee
