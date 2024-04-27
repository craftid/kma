import Image from "next/image"

const OurClients = () => {
  return (
    <section id="our-clients" className="our-clients">
      <div className="container">
        <div className="row">
          <h2 className="text-center text-5xl font-extrabold uppercase">
            Our Clients
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 10 }, (_, index) => index + 1).map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <p>{i}</p>
                  <Image
                    src={`/assets/clients/client-${i}.png`}
                    alt="client"
                    width={163}
                    className="h-auto w-36"
                    height={163}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
OurClients.displayName = "OurClients"

export default OurClients
