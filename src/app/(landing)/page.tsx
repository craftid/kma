"use client"

import type { MousePosition } from "@/hooks/useMouse"

import { useCursor } from "@/components/animated-cursor-provider"

import { Animation } from "@/app/_components/animation"

export default function Home() {
  const { mouse } = useCursor()
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold">Welcome to Mayabytes</h1>
        <p className="text-center text-lg">
          A starter template for <span className="underline">Mayabytes</span>
        </p>

        <ul>
          {mouse &&
            Object.keys(mouse).map((key) => (
              <li key={key}>
                {key}: {(mouse as any)[key] ?? "null"}
              </li>
            ))}
        </ul>

        <div className="my-10 flex py-10">
          <Animation />
        </div>
      </section>
    </main>
  )
}
