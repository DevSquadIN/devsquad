"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuthenticationStatus } from "@nhost/react"

import { siteConfig } from "@/config/site"

import { MainNavIcons } from "../icons"
import LoginButton from "../login-button"
import Logo from "../logo"
import UserMenu from "../user-menu"

const MainNav = () => {
  const { isAuthenticated } = useAuthenticationStatus()

  const router = usePathname()
  return (
    <div className="mx-auto flex max-w-[1450px] items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-4 py-6 ">
        {/* logo */}
        <Link href="/">
          <Logo />
        </Link>
        {/* menu items */}
        {isAuthenticated && router !== "/" && (
          <div className=" hidden gap-4 font-sans text-lg font-medium text-gray-700 md:flex md:gap-6">
            {siteConfig.mainNav.map((item, index) => (
              <Link
                className="underline-offset-1 transition-all duration-300 ease-in hover:text-indigo-700 active:text-indigo-700"
                href={item.href}
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {router === "/" ? (
        <LoginButton />
      ) : (
        isAuthenticated && (
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:block">points</div>
            <div className="rounded-md p-1 shadow-md">
              <MainNavIcons.notification className="text-indigo-800 md:h-8 md:w-8" />
              <span className="sr-only">Notification</span>
            </div>
            <div>
              <UserMenu />
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default MainNav
