import { siteConfig } from "@/config/site"

const Logo = () => {
  return (
    <div className="font-sans text-3xl font-medium text-indigo-700 antialiased">
      <div className="flex">
        <div className="mr-1 font-extrabold">
          <span className="mr-0.5 text-orange-400">:</span>
          <span className="text-amber-300">/</span>
          <span className="text-indigo-700">/</span>
        </div>
        <div className="flex flex-col">
          <p className="flex">
            <span>{siteConfig.name}</span>
            <span className="ml-0.5 text-xs font-extralight">beta</span>
          </p>
          <span className="text-xs font-extralight tracking-[0.23em]">
            collab.build.learn
          </span>
        </div>
      </div>
    </div>
  )
}

export default Logo
