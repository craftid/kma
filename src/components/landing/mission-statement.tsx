export default function MissionStatement(props: {
  children?: React.ReactNode
}) {
  return (
    <div className="rounded-md bg-neutral-950 text-neutral-50">
      <div className="p-4 md:p-6">
        <div className="relative flex items-center py-5 pb-6">
          <h2 className="uppercase text-neutral-50">Mission Statement</h2>
          <div className="ml-2 flex-grow border-t text-neutral-400"></div>
        </div>
        <div>
          <p className="bg-gradient-to-r from-violet-200  to-pink-200 bg-clip-text text-7xl uppercase text-transparent">
            Guided by creative, events & marketing, we provide bold & innovative
            marketing strategies that drive our clients to achieve breakthrough
            results.
          </p>
        </div>
      </div>
    </div>
  )
}
