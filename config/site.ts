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

  pathways: [
    {
      title: "Walk through",
      href: "/walk-through",
    },
    {
      title: "Foundation in OSS",
      href: "/oss",
    },
    {
      title: "Foundation in ReactJS",
      href: "/react",
    },

    {
      title: "Growth",
      href: "/growth",
    },
  ],
}
