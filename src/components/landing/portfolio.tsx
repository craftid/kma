export default function Portfolio(props: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="py-6">
        <h2 className="text-5xl font-bold uppercase">our portfolio</h2>
      </div>
      <div className="flex border-t border-neutral-300">
        <div className="basis-1/4 p-4">
          <div>
            <h3>project 1</h3>
            <p>description</p>
          </div>
        </div>
        <div className="flex-grow">
          <div className="h-[596px] object-contain"></div>
        </div>
      </div>
    </div>
  )
}
