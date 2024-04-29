"use client"

import { forwardRef, HTMLAttributes, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

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
import { useCursor } from "@/components/animated-cursor-provider"

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
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
        <Link href="/" ref={logoRef}>
          <Image
            src="/assets/logo.png"
            alt="KM&A logo"
            width={158}
            height={58}
          />
        </Link>
        <NavigationMenu
          className="hidden md:block
        "
        >
          <NavigationMenuList
            className={cn(
              "first:*pl-0 last:*pr-0 divide-x divide-slate-300 *:px-4"
            )}
          >
            {navItems.map(({ label, href }) => (
              <NavigationMenuItem key={href}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-bold uppercase text-neutral-500"
                    )}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            {children}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <Button
            asChild
            variant="default"
            className={cn("bg-orange-500 px-8 py-6")}
          >
            <Link href="/about">317-964-0648</Link>
          </Button>
        </div>
      </header>
    )
  }
)
Header.displayName = "Header"

export default Header
