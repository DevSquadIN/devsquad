"use client"

import Link from "next/link"
import { useSignOut } from "@nhost/react"

import { siteConfig } from "@/config/site"

import { MainNavIcons } from "./icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const UserMenu = () => {
  const { signOut } = useSignOut()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="" alt="" />
          <AvatarFallback>
            <MainNavIcons.avatar className="text-indigo-800 md:h-8 md:w-8" />
            <span className="sr-only">User</span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 w-60 font-sans">
        <DropdownMenuLabel>
          <div className="flex items-center gap-2">
            <div>
              <MainNavIcons.avatar className="h-8 w-8 text-indigo-800/80" />
              <span className="sr-only">User</span>
            </div>
            <div className="flex flex-col text-[0px] leading-none">
              <span className="text-[14px] font-semibold">username</span>
              <span className="text-[14px] font-medium text-gray-600">
                name
              </span>
            </div>
          </div>
          <div className="mt-1 sm:hidden">
            <Link href="#">Points</Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="md:hidden">
          {siteConfig.mainNav.map((item, index) => (
            <DropdownMenuItem key={index} className="font-sans">
              <Link href={item.href}>{item.title}</Link>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator className="md:hidden" />
        {siteConfig.userMenuMd.map((item, index) => (
          <DropdownMenuItem key={index} className="font-sans">
            <Link href={item.href}>{item.title}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem asChild className="font-sans">
          <button
            className="w-full hover:cursor-pointer"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
