"use client";

import { useState } from "react";
import { CheckCircle, XCircle, UserCheck } from "lucide-react";

export function AdminDashboard() {
  const [pendingVerifications, setPendingVerifications] = useState([]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>

      {/* Verification Requests */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Pending Verifications
        </h2>
        <div className="space-y-4">
          {/* Sample Verification Request */}
          <div className="glass-card p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">John Doe</h3>
                <p className="text-sm text-gray-400">
                  Senior Developer Position
                </p>
                <p className="text-sm text-gray-400">Company: XYZ Corp</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-green-400 hover:bg-green-500/10 rounded transition-colors">
                  <CheckCircle className="h-6 w-6" />
                </button>
                <button className="p-2 text-red-400 hover:bg-red-500/10 rounded transition-colors">
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Management */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Company Management
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <div>
              <h3 className="font-semibold text-white">XYZ Corp</h3>
              <p className="text-sm text-gray-400">5 Verified Employees</p>
            </div>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <UserCheck className="h-5 w-5" />
              <span>Manage Access</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
