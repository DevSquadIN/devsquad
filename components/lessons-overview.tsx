import { GeneralIcons } from "./icons"

const LessonsOverview = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 pt-4 md:pt-6">
      <div className="mx-auto flex max-w-[1450px] justify-between px-4 sm:px-6">
        <section className="lg:w-3/5">
          <div className="sm:max-w-4xl">
            <h3 className="mb-2 text-3xl font-semibold text-indigo-700 md:mb-3.5 md:text-4xl">
              Overview
            </h3>
            <div className="rounded-md bg-white px-4 py-6 shadow-md shadow-indigo-200">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg font-medium text-gray-700 md:text-xl">
                  You have completed 5% of the OSS track.{" "}
                  <span>Keep it up!</span>
                </h3>
              </div>
              <div className="grid grid-cols-10 gap-5 sm:flex sm:flex-wrap">
                <GeneralIcons.check className="h-7 w-7 rounded-full bg-green-300 p-1 text-green-800" />
                <GeneralIcons.check className="h-7 w-7 rounded-full bg-green-300 p-1 text-green-800" />
                <GeneralIcons.check className="h-7 w-7 rounded-full bg-green-300 p-1 text-green-800" />
                <GeneralIcons.lock className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
                <GeneralIcons.lightBulb className="h-7 w-7 rounded-full bg-gray-100 p-1 text-gray-500" />
              </div>
            </div>
            <div className="mb-6 md:mb-8">
              <h3 className="my-2 text-3xl font-semibold text-indigo-700 md:my-3.5 md:text-4xl">
                Resources
              </h3>
              <div className="rounded-md bg-white px-4 py-6 shadow-md shadow-indigo-200">
                <ul>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <GeneralIcons.chevronsRight className="h-4 w-4" />
                    <a
                      className="decoration-indigo-500 decoration-1 transition-colors duration-200 hover:underline"
                      href="#"
                    >
                      How to contribute to open source
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* revision cards */}
        <section className="hidden lg:flex lg:w-2/5 lg:flex-col lg:items-end lg:gap-8">
          <div className="h-96 w-11/12 rounded-lg bg-white p-4 shadow-md shadow-indigo-200">
            Revision
          </div>
        </section>
      </div>
    </div>
  )
}

export default LessonsOverview
