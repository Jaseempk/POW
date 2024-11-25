"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Mail, Award } from "lucide-react";

export function UserDashboard() {
  const [documents, setDocuments] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (files) => {
      // Handle document upload
    },
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">
        Your Professional Profile
      </h1>

      {/* Document Upload Section */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Upload Documents
        </h2>
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-all duration-200"
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-gray-300">
            Drag & drop files here, or click to select files
          </p>
        </div>
      </div>

      {/* Email Verification Section */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Email Verification
        </h2>
        <div className="flex items-center space-x-4">
          <Mail className="h-6 w-6 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-200">
            Verify
          </button>
        </div>
      </div>

      {/* SBTs Section */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold mb-4 text-white">Your SBTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample SBT Card */}
          <div className="glass-card p-4 rounded-lg">
            <Award className="h-8 w-8 mb-2 text-blue-400" />
            <h3 className="font-semibold text-white">Senior Developer</h3>
            <p className="text-sm text-gray-400">Verified by Company XYZ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
