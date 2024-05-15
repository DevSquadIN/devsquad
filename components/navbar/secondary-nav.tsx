"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"

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
        </div>
      )}
    </>
  )
}

export default SecondaryNav
