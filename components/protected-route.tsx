"use client";

import { useAuthenticationStatus } from "@nhost/react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!isAuthenticated) {
    router.push("/");
    return null;
  }

  return children;
};

export default ProtectedRoute;
