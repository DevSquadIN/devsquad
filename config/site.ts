export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "devsquad",
  description: "collaborate, build and learn",
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Mentors",
      href: "/mentors",
    },
    {
      title: "Community",
      href: "/community",
    },
  ],

  userMenuMd: [
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Settings",
      href: "/settings",
    },
  ],
}
