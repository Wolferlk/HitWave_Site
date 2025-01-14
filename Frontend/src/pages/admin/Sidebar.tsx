import { Pencil, Users, Settings, PlusCircle } from 'lucide-react';

interface SidebarProps {
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ setSelectedTab }: SidebarProps) => {
  return (
    <div className="w-64 bg-black text-white h-screen flex flex-col shadow-md border-r border-gray-800">
      <div className="py-6 px-4 text-2xl font-semibold border-b border-gray-700">
        Admin Dashboard
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setSelectedTab('visitors')}
                className="flex items-center py-3 px-4 w-full text-left rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out"
              >
                <Users className="w-5 h-5 mr-4" />
                <span className="text-lg font-medium">View Visitors</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedTab('works')}
                className="flex items-center py-3 px-4 w-full text-left rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out"
              >
                <Pencil className="w-5 h-5 mr-4" />
                <span className="text-lg font-medium">Manage Works</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedTab('pricing')}
                className="flex items-center py-3 px-4 w-full text-left rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out"
              >
                <Settings className="w-5 h-5 mr-4" />
                <span className="text-lg font-medium">Pricing Details</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedTab('addProduction')}
                className="flex items-center py-3 px-4 w-full text-left rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out"
              >
                <PlusCircle className="w-5 h-5 mr-4" />
                <span className="text-lg font-medium">Add Production</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
