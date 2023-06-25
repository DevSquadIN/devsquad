import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Logo, SecondaryNavIcons } from "./icons"

const LoginButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="font-sans text-base font-semibold text-gray-700 antialiased hover:bg-indigo-100 hover:text-indigo-700"
          variant="ghost"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-20 flex justify-center font-sans antialiased">
            {/* logo */}
            <div className="text-4xl font-medium text-indigo-800">
              <div className="flex">
                <Logo.devsquad className="h-11 w-11" />
                <span className="sr-only">devsquad logo</span>
                <div className="flex flex-col">
                  <p>{siteConfig.name}</p>
                  <span className="text-sm font-extralight tracking-[0.23em]">
                    collab.build.learn
                  </span>
                </div>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
          <DialogClose asChild>
            <Link
              // href={github}
              href="#"
              className="mb-4 inline-flex items-center gap-4 rounded-md border border-gray-300 bg-white px-6 py-2 font-sans font-semibold text-gray-700 antialiased shadow-lg transition-all ease-in-out hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-1"
            >
              <SecondaryNavIcons.github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
              <p className="">Sign in with GitHub</p>
            </Link>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginButton
