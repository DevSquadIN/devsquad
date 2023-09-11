"use client"

import Link from "next/link"
import { useAuthenticationStatus, useProviderLink } from "@nhost/react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { SecondaryNavIcons } from "./icons"
import Logo from "./logo"

const LoginButton = () => {
  const { github } = useProviderLink()

  const { isAuthenticated } = useAuthenticationStatus()

  return (
    <>
      {isAuthenticated ? (
        <Button
          asChild
          className="font-sans text-base font-semibold text-gray-700 antialiased hover:bg-indigo-100 hover:text-indigo-700"
          variant="ghost"
        >
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="font-sans text-base font-semibold text-gray-700 antialiased hover:bg-indigo-100 hover:text-indigo-700">
              Login
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-20 flex justify-center font-sans antialiased">
                {/* logo */}
                <Logo />
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4 flex justify-center">
              <DialogClose asChild>
                <Link
                  href={github}
                  className="mb-4 inline-flex items-center gap-4 rounded-md border border-gray-300 bg-white px-6 py-2 font-sans font-semibold text-gray-700 antialiased shadow-lg transition-all ease-in-out hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-1"
                >
                  <SecondaryNavIcons.gitHub className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                  <p className="">Sign in with GitHub</p>
                </Link>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default LoginButton
