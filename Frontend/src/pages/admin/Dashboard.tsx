import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState<string>('visitors');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setSelectedTab={setSelectedTab} />

      <div className="flex-1 p-8 overflow-auto">
        {/* Header Section */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-semibold text-gray-800">Admin Dashboard</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Logout
          </button>
        </header>

        {/* Content Section */}
        <DashboardContent selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default AdminDashboard;
