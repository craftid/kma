import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import ArrowRight from "@/components/common/arrow-right"

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
        <div className="flex">
          <div
            className={cn(
              "mission-statement text-wrap bg-clip-text font-extrabold uppercase text-transparent",
              "bg-gradient-to-r from-white via-violet-300 to-pink-500",
              "text-xl sm:text-5xl lg:text-7xl"
            )}
          >
            <div className="mission-shape float-right flex h-full items-end object-contain object-bottom">
              <div className="mb-3 flex w-44 justify-end border-b border-neutral-400 pb-5 sm:pb-10 lg:mb-4 lg:w-72 ">
                <Button
                  className={cn(
                    "h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-32 lg:w-32",
                    "flex flex-col rounded-full border uppercase text-white",
                    "border-orange-500 hover:border-orange-600"
                  )}
                  type="button"
                  variant="glass"
                >
                  <ArrowRight className="h-4 w-4 sm:h-8 sm:w-8" />
                  <span className="text-xs">Let&apos;s Talk</span>
                </Button>
              </div>
            </div>
            Guided by creative, events & marketing, we provide bold & innovative
            marketing strategies that drive our clients to achieve breakthrough
            results.
          </div>
        </div>
      </div>
    </div>
  )
}
