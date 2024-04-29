"use client"

import React from "react"
import { AnimationPlaybackControls, useAnimate, useInView } from "framer-motion"

const TICKER_DIRECTION_LEFT = -1
const TICKER_DIRECTION_RIGHT = 1

type TickerProps = {
  children: JSX.Element[]
  duration?: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  isPlaying?: boolean
  direction?: number
}

const noop = () => {}

const Ticker: React.FunctionComponent<TickerProps> = (props: TickerProps) => {
  const {
    children,
    duration = 10,
    onMouseEnter = noop,
    onMouseLeave = noop,
    isPlaying = true,
    direction = TICKER_DIRECTION_LEFT,
  } = props
  const tickerRef = React.useRef<HTMLDivElement>(null)
  const [tickerUUID, setTickerUUID] = React.useState<string>("")
  const [tickerContentWidth, setTickerContentWidth] = React.useState<
    number | null
  >(0)
  const [numDupes, setNumDupes] = React.useState<number>(1)
  const [scope, animate] = useAnimate()
  const [animationControls, setAnimationControls] = React.useState<
    AnimationPlaybackControls | undefined
  >(undefined)
  const isInView = useInView(scope)

  React.useEffect(() => {
    setTickerUUID(
      Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5)
    )
  }, [])

  React.useEffect(() => {
    let contentWidth = 0

    for (let index = 0; index < children.length; index++) {
      const element = document.getElementById(
        tickerUUID + "_" + index
      )?.clientWidth
      if (element) {
        contentWidth += element
      }
    }

    setTickerContentWidth(contentWidth)
  }, [tickerUUID, children])

  React.useEffect(() => {
    if (tickerRef.current && tickerContentWidth) {
      setNumDupes(
        Math.max(
          Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth),
          1
        )
      )
    }
  }, [tickerContentWidth])

  React.useEffect(() => {
    if (isInView && !animationControls) {
      const controls = animate(
        scope.current,
        { x: tickerContentWidth ? tickerContentWidth * direction : 0 },
        { ease: "linear", duration, repeat: Infinity }
      )
      controls.play()
      setAnimationControls(controls)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  React.useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying) {
        animationControls.pause()
      } else {
        animationControls.play()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, isPlaying])

  return (
    <div
      className="FMT__container"
      ref={tickerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={scope}
        className=""
        // initial={false}
        // animate={{ x: tickerContentWidth * direction }}
        // transition={{ ease: 'linear', duration, repeat: Infinity }}
        style={{ display: "flex" }}
      >
        {children.map((item, index) => (
          <div key={index} id={`${tickerUUID}_${index}`}>
            {item}
          </div>
        ))}
        {[...Array(numDupes)].map((_) =>
          children.map((item, index) => <div key={index}>{item}</div>)
        )}
      </div>
    </div>
  )
}

export default Ticker

export { TICKER_DIRECTION_LEFT, TICKER_DIRECTION_RIGHT }
