import { Animation } from "./_components/animation"
import Header from "./_components/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col">
      <Header>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </Header>

      <section className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold">Welcome to Mayabytes</h1>
        <p className="text-center text-lg">
          A starter template for <span className="underline">Mayabytes</span>
        </p>
      </section>

      <Animation />
    </main>
  )
}
