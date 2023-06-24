"use client"

import { NhostProvider } from "@nhost/nextjs"
import { NhostClient } from "@nhost/react"
import { NhostApolloProvider } from "@nhost/react-apollo"

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
})

type NhostWrapperProps = {
  children: React.ReactNode
}

export default function NhostWrapper({ children }: NhostWrapperProps) {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>{children}</NhostApolloProvider>
    </NhostProvider>
  )
}
