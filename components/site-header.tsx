import MainNav from "./navbar/main-nav"
import SecondaryNav from "./navbar/secondary-nav"

const SiteHeader = () => {
  return (
    <header>
      {/* Conditionally renders on /index and other pages */}
      <MainNav />
    </header>
  )
}

export default SiteHeader
