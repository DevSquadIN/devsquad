import Link from "next/link"

import { siteConfig } from "@/config/site"

import { SecondaryNavIcons } from "./icons"
import Logo from "./logo"

const About = () => {
  return (
    <section className="mt-6 border-t-8 border-indigo-300 bg-gradient-to-b from-white from-5% via-indigo-50 to-indigo-200/80 pt-6">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-1 md:col-span-2 lg:col-span-1">
          <Logo />
          <div className="space-y-3">
            <p className="text-2xl text-indigo-600">
              An open-source project made with ❤️ by team{" "}
              <span className="font-medium">ReactPlay</span> and{" "}
              <span className="inline-flex font-medium text-indigo-700">
                <span className="mr-0.5 font-extrabold text-orange-400">:</span>
                <span className="text-xl font-extrabold text-amber-300">/</span>
                <span className="text-xl font-extrabold text-indigo-700">
                  /
                </span>
                devsquad
              </span>
            </p>
            <div>
              <p className="mb-2 font-medium text-gray-700">Connect with us:</p>
              <div className="flex gap-2 sm:gap-3">
                <Link
                  href={siteConfig.externalLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SecondaryNavIcons.gitHub className="h-6 w-6 md:h-7 md:w-7" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href={siteConfig.externalLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SecondaryNavIcons.discord className="h-6 w-6 md:h-7 md:w-7" />
                  <span className="sr-only">Discord</span>
                </Link>
                <Link
                  href={siteConfig.externalLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SecondaryNavIcons.twitter className="h-6 w-6 md:h-7 md:w-7" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-2 font-medium text-gray-700">Email us:</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-medium text-gray-700">About</h3>
          <div className="max-w-md space-y-1">
            <p className="text-base text-gray-600">
              <span className="inline-flex text-lg font-medium text-indigo-700">
                <span className="mr-0.5 font-extrabold text-orange-400">:</span>
                <span className="text-base font-extrabold text-amber-300">
                  /
                </span>
                <span className="text-base font-extrabold text-indigo-700">
                  /
                </span>
                devsquad
              </span>{" "}
              is an open-source platform dedicated to make learning ReactJS more
              efficient, fun and engaging.
            </p>
            <p className="text-base text-gray-600">
              As our tagline goes, in devsquad you collaborate with peers and
              mentors to build exciting projects and learn in the process.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-medium text-gray-700">
            Spread the word
          </h3>
          <div className="space-y-1">
            <p className="text-base text-gray-600">
              Feeling a sense of accomplishment learning through devsquad? Help
              us spread the word by talking about devsquad in your favorite
              social media platform.
            </p>
            <p className="text-base text-gray-600">Share </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
