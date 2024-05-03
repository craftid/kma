"use client"

import { forwardRef, HTMLAttributes, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { HamIcon, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import useEvent from "@/hooks/useEvent"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCursor } from "@/components/animated-cursor-provider"

import ScrollTo from "./ui/scrollTo"

const navItems = [
  { label: "Services", href: "#", scrollTo: "services" },
  { label: "Clients", href: "#", scrollTo: "clients" },
  { label: "Portfolio", href: "#", scrollTo: "portfolio" },
  { label: "Mission", href: "#", scrollTo: "mission" },
  { label: "Awards", href: "#", scrollTo: "awards" },
]

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const logoRef = useRef(null)

    const { setCursorText, setCursorVariant } = useCursor()

    useEvent(logoRef, "mouseenter", () => {
      if (!setCursorText || !setCursorVariant) return
      setCursorText("Back to home")
      setCursorVariant("hover")
    })

    useEvent(logoRef, "mouseleave", () => {
      if (!setCursorText || !setCursorVariant) return
      setCursorText("")
      setCursorVariant("default")
    })
    return (
      <header
        ref={ref}
        className="mx-auto flex w-full items-center justify-between px-4 py-8"
      >
        <Link href="#" ref={logoRef}>
          <Image
            src="/assets/logo.png"
            alt="KM&A logo"
            width={158}
            height={58}
          />
        </Link>

        <NavigationMenu
          className="hidden lg:block
        "
        >
          <NavigationMenuList
            className={cn(
              "first:*pl-0 last:*pr-0 divide-x divide-slate-300 *:px-4"
            )}
          >
            {navItems.map(({ label, href, scrollTo }) => (
              <NavigationMenuItem key={href}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink asChild>
                    <ScrollTo
                      elementId={scrollTo}
                      variant="ghost"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-bold uppercase text-neutral-500"
                      )}
                    >
                      {label}
                    </ScrollTo>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            {children}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex justify-between gap-4">
          <Button
            asChild
            variant="default"
            className={cn("bg-orange-500", "lg:px-8")}
          >
            <Link href="#">132-465-789</Link>
          </Button>
          <Sheet>
            <SheetTrigger className="block lg:hidden" asChild>
              <Button variant="default" className={cn("bg-orange-500")}>
                <Menu className="text-white" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex w-full flex-col gap-6">
                <Link href="#" ref={logoRef}>
                  <Image
                    src="/assets/logo.png"
                    alt="KM&A logo"
                    width={158}
                    height={58}
                    className="w-40"
                  />
                </Link>
                <ul className={cn("first:*pt-0 last:*pb-0 grid *:py-2")}>
                  {navItems.map(({ label, href, scrollTo }) => (
                    <li key={href}>
                      <ScrollTo
                        elementId={scrollTo}
                        variant="link"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-bold uppercase text-neutral-500"
                        )}
                      >
                        {label}
                      </ScrollTo>
                    </li>
                  ))}
                  {children}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    )
  }
)
Header.displayName = "Header"

export default Header
