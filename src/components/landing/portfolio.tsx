"use client"

import { useRef } from "react"
import Link from "next/link"
import { MoveUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import useEvent from "@/hooks/useEvent"

import { useCursor } from "../animated-cursor-provider"
import { Button } from "../ui/button"

const portfolioItems = [
  {
    title: "Myers Ag Services Brand Refresh",
    description:
      "Myers Ag Services, a fully independent crop and soil consultant run by Eric Myers in Kokomo, IN, was the type of brand we had in mind when we were developing our business booster package. In fact, our phased approach service, a procedure including mapping out business priorities and goals, solidifying a strong brand image, developing strategic marketing and creating a plan to connect with target audiences, was the perfect match for Myers Ag Services.",
    imgUrl: "/assets/portfolio/1.png",
    url: "/portfolio/1",
  },
  {
    title: "Raro A Brand Build",
    description:
      "When we were presented with the opportunity to build a brand from scratch, we were thrilled to get our hands dirty. Raro, a boutique travel company specializing in personalized experiences that focus on the local’s journey, approached us to develop the framework for all their branding.",
    imgUrl: "/assets/portfolio/2.png",
    url: "/portfolio/2",
  },
  {
    title: "Joe’s Butcher Shop Rebrand",
    description:
      "When our client, Joe’s Butcher Shop, came to us with the request of a refreshed look and feel, we couldn’t wait to put our design skills to the test to tell its story in a modern, yet classic way.",
    imgUrl: "/assets/portfolio/3.png",
    url: "/portfolio/3",
  },
  {
    title: "Google Ads Joe’s Butcher Shop",
    description:
      "When our client, Joe’s Butcher Shop, a local one-stop-shop in Carmel, IN, reached out for help with its Thanksgiving turkey sales, we gobbled up the opportunity to help. Not only was the store facing challenges from COVID-19’s impact, but they were also facing environmental factors ... to be more specific, a pack of killer raccoons who hungered for turkeys (more on that here). In order to market Joe’s farm-fresh turkeys, we had to ask ourselves, what’s the best way to strategically target Thanksgiving turkey buyers in Carmel, IN as well as surrounding locations while also increasing in-store and online sales?",
    imgUrl: "/assets/portfolio/4.png",
    url: "/portfolio/4",
  },
]

export default function Portfolio(props: { children?: React.ReactNode }) {
  const { setCursorVariant, setCurrentBounds } = useCursor()

  return (
    <div className="flex flex-col">
      <div className="py-6">
        <h2 className="text-5xl font-bold uppercase">our portfolio</h2>
      </div>
      <div className="flex border-t border-neutral-300">
        <div className="basis-1/4 p-4 md:min-w-80">
          <div>
            <h3>project 1</h3>
            <p>description</p>
          </div>
        </div>
        <div className="flex-grow">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                "group flex border-b border-neutral-300"
              )}
            >
              <div className="basis-1/2 p-6">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <div className="flex basis-1/2 flex-col justify-between p-6">
                <div className="flex">
                  <div className="flex flex-grow">
                    <div className="max-w-72 ">
                      <h3 className="text-2xl font-extrabold uppercase">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="-mt-3 ml-4 flex-grow-0">
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
                    >
                      <Link
                        href={item.url}
                        className="flex h-14 w-14 items-center gap-2 transition-transform duration-300 hover:rotate-45 hover:bg-transparent hover:text-primary"
                      >
                        <MoveUpRight size={34} />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="border-t border-neutral-300 pt-6 font-poppins text-sm text-neutral-500">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
