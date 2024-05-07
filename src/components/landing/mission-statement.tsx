import { MoveUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

export default function MissionStatement(props: {
  children?: React.ReactNode
}) {
  return (
    <div className="mt-10 rounded-md bg-neutral-950 text-neutral-50">
      <div className="p-4 md:p-8 lg:p-14 xl:px-16 xl:py-14">
        <div className="relative flex items-center py-5 pb-6">
          <h2 className="uppercase text-neutral-50">Mission Statement</h2>
          <div className="ml-2 flex-grow border-t text-neutral-400"></div>
        </div>
        <div>
          <div className="flex text-wrap bg-gradient-to-r  from-violet-200 to-pink-200 bg-clip-text text-7xl uppercase text-transparent">
            Guided by creative, events & marketing, we provide bold & innovative
            marketing strategies that drive our clients to achieve breakthrough
            results.
            <div className="self-end">
              <div className=" flex w-56  justify-end border-b border-neutral-400 pb-10 ">
                <Button
                  className={cn(
                    "flex h-24 w-24 flex-col rounded-full border border-orange-500 uppercase text-white hover:border-orange-600"
                  )}
                  type="button"
                  variant="glass"
                >
                  <MoveUpRight />
                  <span>Let&apos;s Talk</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
