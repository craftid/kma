import React, { forwardRef } from "react"

interface ArrowRightProps {
  size?: string | number
  className?: string
}

const ArrowRight = forwardRef<SVGSVGElement, ArrowRightProps>(
  ({ size = 24, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 47 47"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        <path
          d="M14.3086 10.6911L35.691 10.6911L35.691 32.0735"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
        <path
          d="M10.6914 35.6912L35.3921 10.9906"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
)
ArrowRight.displayName = "ArrowRight"

export default ArrowRight
