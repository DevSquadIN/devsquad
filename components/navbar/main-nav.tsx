"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import LoginButton from "../login-button"
import Logo from "../logo"

const MainNav = () => {
  const router = usePathname()
  return (
    <div className="mx-auto flex max-w-[1450px] items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-4 py-6 ">
        {/* logo */}
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {router === "/" ? <LoginButton /> : null}
    </div>
  )
}

export default MainNav
