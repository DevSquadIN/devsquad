"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"

import { Logo } from "../icons"
import LoginButton from "../login-button"

const MainNav = () => {
  const router = usePathname()
  return (
    <div className="mx-auto flex max-w-[1450px] items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-4 py-6 ">
        {/* logo */}
        <Link
          href="/"
          className="font-sans text-3xl font-medium text-indigo-800"
        >
          <div className="flex">
            <Logo.devsquad className="h-10 w-10" />
            <span className="sr-only">devsquad logo</span>
            <div className="flex flex-col">
              <p className="flex">
                <span>{siteConfig.name}</span>
                <span className="ml-0.5 text-xs font-extralight">beta</span>
              </p>
              <span className="text-xs font-extralight tracking-[0.23em]">
                collab.build.learn
              </span>
            </div>
          </div>
        </Link>
        {/* menu items */}
      </div>
      {router === "/" ? <LoginButton /> : null}
    </div>
  )
}

export default MainNav
