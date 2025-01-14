import { Button } from '@/components/ui/button'; // Ensure the correct path is used
import { Pencil, Trash } from 'lucide-react'; // Import the necessary icons

const works = [
  { id: 1, title: 'Work Title 1', description: 'Description of work 1' },
  { id: 2, title: 'Work Title 2', description: 'Description of work 2' },
];

const WorksTable = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Manage Works</h2>
      
      <div className="space-y-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="flex justify-between items-center bg-gradient-to-r from-indigo-100 via-green-100 to-yellow-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <div>
              <p className="text-xl font-semibold text-gray-800">{work.title}</p>
              <p className="text-lg text-gray-600">{work.description}</p>
            </div>

            <div className="flex space-x-4">
              {/* Edit Button */}
              <Button
                variant="outline"
                className="text-blue-500 hover:bg-blue-100 p-2 rounded-full transition-colors duration-300"
              >
                <Pencil className="w-5 h-5" />
              </Button>

              {/* Delete Button */}
              <Button
                variant="outline"
                className="text-red-500 hover:bg-red-100 p-2 rounded-full transition-colors duration-300"
              >
                <Trash className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Work Button */}
      <div className="flex justify-center mt-8">
        <Button
          size="lg"
          className="w-full max-w-xs py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-all duration-300"
        >
          Add New Work
        </Button>
      </div>
    </div>
  );
};

export default WorksTable;
