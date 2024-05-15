"use client"

import {
  forwardRef,
  RefObject,
  useRef,
  useState,
  type HTMLAttributes,
} from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

import { cn } from "@/lib/utils"
import useEvent from "@/hooks/useEvent"

import { Button } from "@/components/ui/button"
import { useCursor } from "@/components/animated-cursor-provider"
import ArrowRight from "@/components/common/arrow-right"

const portfolioItems = [
  {
    title: "Raro A Brand Build",
    description:
      "When we were presented with the opportunity to build a brand from scratch, we were thrilled to get our hands dirty. Raro, a boutique travel company specializing in personalized experiences that focus on the local’s journey, approached us to develop the framework for all their branding.",
    imgUrl: "/assets/portfolio/2.png",
    category: "Design",
    url: "#",
  },
  {
    title: "Joe’s Butcher Shop Rebrand",
    description:
      "When our client, Joe’s Butcher Shop, came to us with the request of a refreshed look and feel, we couldn’t wait to put our design skills to the test to tell its story in a modern, yet classic way.",
    imgUrl: "/assets/portfolio/3.png",
    category: "Development",
    url: "#",
  },
  {
    title: "Myers Ag Services Brand Refresh",
    description:
      "Myers Ag Services, a fully independent crop and soil consultant run by Eric Myers in Kokomo, IN, was the type of brand we had in mind when we were developing our business booster package. In fact, our phased approach service, a procedure including mapping out business priorities and goals, solidifying a strong brand image, developing strategic marketing and creating a plan to connect with target audiences, was the perfect match for Myers Ag Services.",
    imgUrl: "/assets/portfolio/1.png",
    url: "#",
    category: "Branding",
  },
  {
    title: "Google Ads Joe’s Butcher Shop",
    description:
      "When our client, Joe’s Butcher Shop, a local one-stop-shop in Carmel, IN, reached out for help with its Thanksgiving turkey sales, we gobbled up the opportunity to help. Not only was the store facing challenges from COVID-19’s impact, but they were also facing environmental factors ... to be more specific, a pack of killer raccoons who hungered for turkeys (more on that here). In order to market Joe’s farm-fresh turkeys, we had to ask ourselves, what’s the best way to strategically target Thanksgiving turkey buyers in Carmel, IN as well as surrounding locations while also increasing in-store and online sales?",
    imgUrl: "/assets/portfolio/4.png",
    category: "Marketing",
    url: "#",
  },
  {
    title: "New Item 1",
    description: "This is a new item in the 'Branding' category.",
    imgUrl: "/assets/portfolio/1.png",
    category: "Branding",
    url: "#",
  },
  {
    title: "New Item 2",
    description: "This is a new item in the 'Design' category.",
    imgUrl: "/assets/portfolio/2.png",
    category: "Design",
    url: "#",
  },
  {
    title: "New Item 3",
    description: "This is a new item in the 'Development' category.",
    imgUrl: "/assets/portfolio/3.png",
    category: "Development",
    url: "#",
  },
  {
    title: "New Item 4",
    description: "This is a new item in the 'Marketing' category.",
    imgUrl: "/assets/portfolio/4.png",
    category: "Marketing",
    url: "#",
  },
  {
    title: "New Item 5",
    description: "This is a new item in the 'Branding' category.",
    imgUrl: "/assets/portfolio/1.png",
    category: "Branding",
    url: "#",
  },
  {
    title: "New Item 6",
    description: "This is a new item in the 'Design' category.",
    imgUrl: "/assets/portfolio/2.png",
    category: "Design",
    url: "#",
  },
  {
    title: "New Item 7",
    description: "This is a new item in the 'Development' category.",
    imgUrl: "/assets/portfolio/3.png",
    category: "Development",
    url: "#",
  },
  {
    title: "New Item 8",
    description: "This is a new item in the 'Marketing' category.",
    imgUrl: "/assets/portfolio/4.png",
    category: "Marketing",
    url: "#",
  },
]

const PortfolioButton = ({
  category,
  changeCategory,
  active,
}: {
  category: string
  changeCategory: (category: string) => () => void
  active: string
}) => {
  const { setCursorVariant, setCurrentBounds } = useCursor()
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <Button
      ref={ref}
      variant="ghost"
      onMouseEnter={(e) => {
        if (!setCursorVariant || !setCurrentBounds) return
        setCurrentBounds(e.currentTarget.getBoundingClientRect().toJSON())
        setCursorVariant("portfolioItem")
      }}
      onMouseLeave={() => {
        if (!setCursorVariant) return
        setCursorVariant("default")
      }}
      className={cn(
        "font-bold uppercase text-neutral-400/50 transition-all duration-300 hover:text-orange-500",
        active === category && "pointer-events-none text-orange-500"
      )}
      onClick={changeCategory(category)}
    >
      {category}
    </Button>
  )
}

export default function Portfolio(props: { children?: React.ReactNode }) {
  const ref = useRef(null)
  const [currentCategory, setCurrentCategory] = useState("All")

  const changeCategory = (category: string) => {
    return () => {
      setCurrentCategory(category)
    }
  }

  const getCurrentItems = () => {
    if (currentCategory === "All") return portfolioItems.slice(0, 4)
    return portfolioItems.filter((item) => item.category === currentCategory)
  }
  return (
    <div className="flex flex-col">
      <div className="py-6">
        <h2 className="text-5xl font-bold uppercase xl:text-7xl">
          our portfolio
        </h2>
      </div>

      <div className="flex flex-col border-t border-neutral-300 lg:flex-row ">
        <div className="w-full py-6  lg:w-2/6 lg:p-8">
          <ul className="mb-14 flex flex-col gap-4 md:p-6">
            <li>
              <PortfolioButton
                active={currentCategory}
                category="All"
                changeCategory={changeCategory}
              />
            </li>
            <li>
              <PortfolioButton
                active={currentCategory}
                category="Branding"
                changeCategory={changeCategory}
              />
            </li>
            <li>
              <PortfolioButton
                active={currentCategory}
                category="Development"
                changeCategory={changeCategory}
              />
            </li>
            <li>
              <PortfolioButton
                active={currentCategory}
                category="Design"
                changeCategory={changeCategory}
              />
            </li>
            <li>
              <PortfolioButton
                active={currentCategory}
                category="Marketing"
                changeCategory={changeCategory}
              />
            </li>
          </ul>

          <Button
            className={cn(
              "flex h-24 w-24 flex-col rounded-full border border-orange-500 uppercase hover:border-orange-600 hover:bg-orange-500 hover:text-white 2xl:h-36 2xl:w-36"
            )}
            type="button"
            variant="glass"
          >
            <ArrowRight className="h-8 w-8" />
            <span>Let&apos;s Talk</span>
          </Button>
        </div>
        <div className="w-full lg:w-4/5">
          {getCurrentItems().map((item, index) => (
            <Item
              ref={ref}
              key={index + item.title}
              index={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface PortfolioItem {
  title: string
  description: string
  imgUrl: string
  url: string
}

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  index: number
  item: PortfolioItem
}

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, index, item, ...props }, ref) => {
    const { setCursorVariant, setCurrentBounds } = useCursor()

    const inViewRef = useRef(null)
    const isInView = useInView(inViewRef as RefObject<Element>, {
      once: true,
    })

    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row",
          "group flex flex-col divide-x divide-neutral-300 border-b border-neutral-300"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : index % 2 === 0 ? -100 : 100,
          }}
          transition={{ duration: 0.5 }}
          className="basis-1/2 p-6"
        >
          <Image width={440} height={495} src={item.imgUrl} alt={item.title} />
        </motion.div>
        <motion.div
          key={index + item.title}
          ref={inViewRef}
          className="flex basis-1/2 flex-col justify-between px-8 lg:py-16"
        >
          <div className="flex">
            <div className="flex flex-grow flex-col">
              <i className="mb-4 h-4 w-4 rounded-full bg-orange-500"></i>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-72"
              >
                <h3 className="text-3xl font-extrabold uppercase">
                  {item.title}
                </h3>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="-mt-3 ml-4 flex-grow-0"
            >
              <Button
                asChild
                variant="ghost"
                key={index}
                onMouseEnter={(e) => {
                  if (!setCursorVariant || !setCurrentBounds) return
                  setCurrentBounds(
                    e.currentTarget.getBoundingClientRect().toJSON()
                  )
                  setCursorVariant("link")
                }}
                onMouseLeave={() => {
                  if (!setCursorVariant) return
                  setCursorVariant("default")
                }}
                className={cn("h-14 w-14")}
              >
                <Link
                  href={item.url}
                  className="flex items-center gap-2 transition-transform duration-300 hover:rotate-45 hover:bg-transparent hover:text-primary"
                >
                  <ArrowRight className="h-12 w-12" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-neutral-300 pt-6 font-poppins text-sm text-neutral-500"
          >
            <p>{item.description}</p>
          </motion.div>
        </motion.div>
      </div>
    )
  }
)

Item.displayName = "PortfolioItem"
