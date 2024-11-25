"use client";

import { ArrowRight, Briefcase, Shield } from "lucide-react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

export function Hero() {
  const { isConnected } = useAccount();

  const handleNavigate = (path: string) => {
    if (
      typeof window !== "undefined" &&
      (window as any).navigateWithTransition
    ) {
      (window as any).navigateWithTransition(path);
    }
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Verify Your Professional Journey{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                On-Chain
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Secure, verifiable Proof-Of-Work experience on Base
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
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
                    className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-all duration-200 hover:shadow-blue-500/25 flex items-center"
                  >
                    {isConnected ? (
                      <>
                        Continue as {address?.slice(0, 6)}...
                        {address?.slice(-4)}{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </ConnectKitButton.Custom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
