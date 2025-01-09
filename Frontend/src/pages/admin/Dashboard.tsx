// src/pages/admin/Dashboard.tsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState<string>('visitors');

  return (
    <div className="flex h-screen">
      <Sidebar setSelectedTab={setSelectedTab} />
      <div className="flex-1 p-6 overflow-auto">
        <DashboardContent selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default AdminDashboard;
