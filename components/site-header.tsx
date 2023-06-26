import MainNav from "./navbar/main-nav"
import SecondaryNav from "./navbar/secondary-nav"

const SiteHeader = () => {
  return (
    <header>
      {/* Conditionally renders on /index and other pages */}
      <MainNav />
      {/* Only present in /dashboard */}
      <SecondaryNav />
    </header>
  )
}

export default SiteHeader
