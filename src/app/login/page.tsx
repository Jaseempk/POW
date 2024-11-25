"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/auth";
import { Wallet, Mail, Building2 } from "lucide-react";
import { useAccount } from "wagmi";

export default function LoginPage() {
  const router = useRouter();
  const { setAuth, setUserRole } = useAuthStore();
  const [selectedRole, setSelectedRole] = useState<
    "user" | "admin" | "third-party"
  >("user");
  const { isConnected, address } = useAccount();

  const handleLogin = async () => {
    setAuth(true);
    setUserRole(selectedRole);
    router.push("/dashboard");
  };

  if (!isConnected) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="glass-card p-8 rounded-2xl">
          <div className="text-center">
            <h2 className="mt-2 text-3xl font-bold text-white">
              Choose Your Role
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Connected as {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => setSelectedRole("user")}
                className={`relative w-full flex items-center justify-center px-4 py-4 rounded-xl transition-all duration-200 ${
                  selectedRole === "user"
                    ? "bg-blue-600 text-white"
                    : "glass-card text-gray-300 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
                }`}
              >
                <Wallet className="h-6 w-6 mr-2" />
                <span>Regular User</span>
              </button>

              <button
                onClick={() => setSelectedRole("admin")}
                className={`relative w-full flex items-center justify-center px-4 py-4 rounded-xl transition-all duration-200 ${
                  selectedRole === "admin"
                    ? "bg-blue-600 text-white"
                    : "glass-card text-gray-300 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
                }`}
              >
                <Building2 className="h-6 w-6 mr-2" />
                <span>Company Admin</span>
              </button>

              <button
                onClick={() => setSelectedRole("third-party")}
                className={`relative w-full flex items-center justify-center px-4 py-4 rounded-xl transition-all duration-200 ${
                  selectedRole === "third-party"
                    ? "bg-blue-600 text-white"
                    : "glass-card text-gray-300 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
                }`}
              >
                <Mail className="h-6 w-6 mr-2" />
                <span>Third Party Verifier</span>
              </button>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="w-full flex justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
