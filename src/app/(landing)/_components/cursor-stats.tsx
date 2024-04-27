"use client"

import { useCursor } from "@/components/animated-cursor-provider"

export default function CursorStats() {
  const { mouse } = useCursor()
  return (
    <ul>
      {mouse &&
        Object.keys(mouse).map((key) => (
          <li key={key}>
            {key}: {(mouse as any)[key] ?? "null"}
          </li>
        ))}
    </ul>
  )
}
