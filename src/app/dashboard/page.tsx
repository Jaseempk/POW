"use client";

import { UserDashboard } from "@/components/dashboard/UserDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { ThirdPartyDashboard } from "@/components/dashboard/ThirdPartyDashboard";
import { useAuthStore } from "@/lib/store/auth";

export default function DashboardPage() {
  const { userRole } = useAuthStore();

  return (
    <div className="container mx-auto px-4 py-8">
      {userRole === "user" && <UserDashboard />}
      {userRole === "admin" && <AdminDashboard />}
      {userRole === "third-party" && <ThirdPartyDashboard />}
    </div>
  );
}
