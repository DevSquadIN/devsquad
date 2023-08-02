import SecondaryNav from "@/components/navbar/secondary-nav"
import ProtectedRoute from "@/components/protected-route"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ProtectedRoute>
      <SecondaryNav />
      {children}
    </ProtectedRoute>
  )
}
