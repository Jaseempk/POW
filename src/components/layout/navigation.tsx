"use client";

import { useState } from "react";
import { useAuthStore } from "@/lib/store/auth";
import { Menu, X, User, LogOut } from "lucide-react";
import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/navigation";
import { useDisconnect } from "wagmi";

interface NavigationProps {
  orbitronFont: string;
}

export function Navigation({ orbitronFont }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, userRole, logout } = useAuthStore();
  const router = useRouter();
  const { disconnect } = useDisconnect();

  const handleNavigate = (path: string) => {
    if (
      typeof window !== "undefined" &&
      (window as any).navigateWithTransition
    ) {
      (window as any).navigateWithTransition(path);
    }
  };

  const handleLogout = () => {
    logout();
    disconnect();
    handleNavigate("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass-card backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button
                onClick={() => handleNavigate("/")}
                className="flex items-center"
              >
                <span
                  className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 ${orbitronFont}`}
                >
                  POW
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => handleNavigate("/dashboard")}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <ConnectKitButton.Custom>
                  {({ show, isConnected, address }) => (
                    <button
                      onClick={() => {
                        if (isConnected) {
                          handleNavigate("/login");
                        } else {
                          show();
                        }
                      }}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-200"
                    >
                      <User className="h-5 w-5" />
                      <span>
                        {isConnected
                          ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                          : "Connect"}
                      </span>
                    </button>
                  )}
                </ConnectKitButton.Custom>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass-card">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => handleNavigate("/dashboard")}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 transition-colors w-full text-left"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <ConnectKitButton.Custom>
                  {({ show, isConnected, address }) => (
                    <button
                      onClick={() => {
                        if (isConnected) {
                          handleNavigate("/login");
                        } else {
                          show();
                        }
                      }}
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 transition-colors"
                    >
                      {isConnected
                        ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                        : "Connect"}
                    </button>
                  )}
                </ConnectKitButton.Custom>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
