import Link from "next/link"

import { siteConfig } from "@/config/site"

const MainNav = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between py-6">
      {/* logo */}
      <Link href="/" className="font-sans text-3xl font-medium text-indigo-800">
        <div className="flex flex-col">
          <p className="flex">
            <span>{siteConfig.name}</span>
            <span className="ml-0.5 text-xs font-extralight">beta</span>
          </p>
          <span className="text-xs font-extralight tracking-[0.23em]">
            collab.build.learn
          </span>
        </div>
      </Link>
    </div>
  )
}

export default MainNav
