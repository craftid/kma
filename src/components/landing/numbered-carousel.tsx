"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { Button } from "../ui/button"
import NumberedCarouselItem from "./numbered-carousel-item"

const carouselItems = [
  {
    title: "types of social media users",
    description:
      "This white paper explores the different types of social media users and provides insight on how brands can reach their target audience and created more effective marketing strategies",
    action: (
      <Button variant="ghost" className="text-zinc-50" size="sm">
        Download Now <ArrowUpRight className="ml-2" size={16} />
      </Button>
    ),
    image: "/assets/numbered-carousel/01.png",
  },
  {
    title: "engaging virtual event series",
    description:
      "This white paper explores the different types of social media users and provides insight on how brands can reach their target audience and created more effective marketing strategies",
    action: (
      <Button variant="ghost" className="text-zinc-50" size="sm">
        Download Now <ArrowUpRight className="ml-2" size={16} />
      </Button>
    ),
    image: "/assets/numbered-carousel/01.png",
  },
  {
    title: "how to keep email marketing relevant",
    description:
      "This white paper explores the different types of social media users and provides insight on how brands can reach their target audience and created more effective marketing strategies",
    action: (
      <Button variant="ghost" className="text-zinc-50" size="sm">
        Download Now <ArrowUpRight className="ml-2" size={16} />
      </Button>
    ),
    image: "/assets/numbered-carousel/01.png",
  },
]

export default function NumberedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <div>
          <span className="text-lg  text-zinc-900">
            {(activeIndex + 1).toString().padStart(2, "0")}
          </span>
          /
          <span className="text-lg  text-zinc-500">
            {carouselItems.length.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        {carouselItems.map((item, index) => (
          <NumberedCarouselItem
            collapsed={activeIndex !== index}
            onClick={() => setActiveIndex(index)}
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
