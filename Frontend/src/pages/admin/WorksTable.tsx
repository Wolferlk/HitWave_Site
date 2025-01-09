import { Button } from '@/components/ui/button';  // Make sure the correct path is used
import { Pencil, Trash } from 'lucide-react'; // Import the necessary icons

const works = [
  { id: 1, title: 'Work Title 1', description: 'Description of work 1' },
  { id: 2, title: 'Work Title 2', description: 'Description of work 2' },
];

const WorksTable = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Manage Works</h2>
      <div className="space-y-4">
        {works.map((work) => (
          <div key={work.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div>
              <p className="font-semibold">{work.title}</p>
              <p className="text-sm text-gray-500">{work.description}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="text-blue-500">
                <Pencil className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="text-red-500">
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-6" size="lg">
        Add New Work
      </Button>
    </div>
  );
};

export default WorksTable;
