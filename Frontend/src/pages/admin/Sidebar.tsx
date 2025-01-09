import { Pencil, Users, Settings, PlusCircle } from 'lucide-react';

interface SidebarProps {
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ setSelectedTab }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="flex flex-col h-full">
        <div className="py-6 px-4 text-2xl font-semibold">Admin Dashboard</div>
        <div className="flex-1">
          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedTab('visitors')}
                  className="w-full text-left py-2 px-4 hover:bg-gray-700"
                >
                  <Users className="w-5 h-5 inline-block mr-2" /> View Visitors
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedTab('works')}
                  className="w-full text-left py-2 px-4 hover:bg-gray-700"
                >
                  <Pencil className="w-5 h-5 inline-block mr-2" /> Manage Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedTab('pricing')}
                  className="w-full text-left py-2 px-4 hover:bg-gray-700"
                >
                  <Settings className="w-5 h-5 inline-block mr-2" /> Pricing Details
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedTab('addProduction')}
                  className="w-full text-left py-2 px-4 hover:bg-gray-700"
                >
                  <PlusCircle className="w-5 h-5 inline-block mr-2" /> Add Production
                </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
};

export default Sidebar;
