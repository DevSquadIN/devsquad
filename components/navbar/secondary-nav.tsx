"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MainNavIcons, SecondaryNavIcons } from "../icons"

const SecondaryNav = () => {
  const router = usePathname()
  return (
    <>
      {router === "/dashboard" && (
        <div className="border-t border-indigo-50">
          <div className="mx-auto flex max-w-[1450px] items-center justify-between p-4 font-sans sm:px-6 ">
            <div className="flex items-center gap-2 sm:gap-4">
              <MainNavIcons.avatar className="h-6 w-6 text-indigo-700 sm:h-8 sm:w-8" />
              <span className="sr-only">Avatar</span>
              <p className="font-medium text-indigo-800 sm:text-lg md:text-xl">
                Hello, Diana
              </p>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <Link
                href="https://github.com/DevSquadIN/devsquad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SecondaryNavIcons.github className="h-6 w-6 md:h-8 md:w-8" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SecondaryNavIcons.discord className="h-6 w-6 md:h-8 md:w-8" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SecondaryNavIcons.twitter className="h-6 w-6 md:h-8 md:w-8" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SecondaryNav
