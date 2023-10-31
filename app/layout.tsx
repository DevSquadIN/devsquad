import { Metadata } from "next"

import { siteConfig } from "@/config/site"

import "../styles/globals.css"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import NhostWrapper from "@/components/nhost-wrapper"
import SiteHeader from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={cn("min-h-screen antialiased", fontSans.variable)}>
        <NhostWrapper>
          <SiteHeader />
          {children}
        </NhostWrapper>
        <TailwindIndicator />
      </body>
    </html>
  )
}
