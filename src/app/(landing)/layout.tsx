import Footer from "@/components/footer"
import Header from "@/components/header"

export default function LandingLayout(
  props: Readonly<{
    children: React.ReactNode
  }>
) {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer />
    </>
  )
}
