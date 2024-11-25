"use client";

import { useState } from "react";
import { Search, Eye, Shield } from "lucide-react";

export function ThirdPartyDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">
        Credential Verification Portal
      </h1>

      {/* Search Section */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Search Credentials
        </h2>
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Enter wallet address or ENS name"
              className="w-full p-2 pr-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-200">
            Search
          </button>
        </div>
      </div>

      {/* Verification Results */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Verification Results
        </h2>
        <div className="space-y-4">
          {/* Sample Result */}
          <div className="glass-card p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">
                  Senior Developer SBT
                </h3>
                <p className="text-sm text-gray-400">Verified by XYZ Corp</p>
                <p className="text-sm text-gray-400">Issue Date: 2024-02-28</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded transition-colors">
                  <Eye className="h-6 w-6" />
                </button>
                <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded transition-colors">
                  <Shield className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Trail */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Verification History
        </h2>
        <div className="space-y-2">
          {/* Sample Audit Entry */}
          <div className="text-gray-400">
            <span className="font-semibold text-gray-300">
              2024-02-28 14:30
            </span>{" "}
            - Credential verified by HR Department
          </div>
          <div className="text-gray-400">
            <span className="font-semibold text-gray-300">
              2024-02-28 14:25
            </span>{" "}
            - Document submitted for verification
          </div>
        </div>
      </div>
    </div>
  );
}
