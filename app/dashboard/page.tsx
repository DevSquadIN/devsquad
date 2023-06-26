import Link from "next/link"

import { siteConfig } from "@/config/site"

const Dashboard = () => {
  return (
    <div className="border-t border-indigo-200/60 bg-gradient-to-b from-indigo-50 pt-6 font-sans antialiased">
      <div className="mx-auto flex w-full max-w-[1450px] px-4 sm:px-6">
        <section className="lg:w-3/5">
          <div className="max-w-4xl">
            <div className="mb-6 md:mb-8">
              <h2 className="my-2 text-5xl font-semibold text-gray-700 md:my-4 md:text-7xl">
                Welcome!
              </h2>
              <p className="text-lg font-medium leading-snug text-gray-700/80">
                Solidify your concepts and gradually take steps towards
                contributing to OSS and learning from mentors and peers.
              </p>
            </div>
            <div className="mb-6 md:mb-8">
              <h3 className="my-2 text-3xl font-semibold text-gray-700 md:my-3.5 md:text-4xl">
                Your pathway...
              </h3>
              <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:gap-0 md:rounded-md md:bg-white md:shadow-md md:shadow-indigo-200">
                {siteConfig.pathways.map((pathway, index) => (
                  <div
                    key={index}
                    className="flex h-24 items-center justify-center rounded-md  bg-white shadow-md shadow-indigo-200 md:my-4 md:h-28 md:flex-1 md:rounded-none md:border-x md:border-indigo-200/30 md:bg-transparent md:shadow-none lg:my-6"
                  >
                    <Link
                      href={pathway.href}
                      className="font-medium text-gray-600 decoration-indigo-600/70 decoration-2 transition-colors duration-300 ease-in hover:text-gray-700 hover:underline md:w-2/3 md:text-center xl:text-lg"
                    >
                      <div>
                        <span>{pathway.title}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6 md:mb-8">
              <h3 className="my-2 text-3xl font-semibold text-gray-700 md:my-3.5 md:text-4xl">
                Community Posts
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
                <div className="h-80 rounded-md bg-white shadow-md shadow-indigo-200">
                  community post
                </div>
                <div className="h-80 rounded-md bg-white shadow-md shadow-indigo-200">
                  community posts component
                </div>
                <div className="h-80 rounded-md bg-white shadow-md shadow-indigo-200">
                  community posts component
                </div>
              </div>
            </div>
            <div className="mb-6 md:mb-8">
              <h3 className="my-2 text-3xl font-semibold text-gray-700 md:my-3.5 md:text-4xl">
                Latest from devsquad
              </h3>
              <div>github component</div>
            </div>
          </div>
        </section>
        <section className="hidden lg:flex lg:w-2/5 lg:flex-col lg:items-end lg:gap-8">
          <div className="h-96 w-11/12 rounded-lg bg-white p-4 shadow-lg shadow-indigo-300">
            Achievements
          </div>
          <div className="h-72 w-11/12 rounded-lg bg-indigo-800 p-4 text-white shadow-lg shadow-indigo-300">
            Upcoming events
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
