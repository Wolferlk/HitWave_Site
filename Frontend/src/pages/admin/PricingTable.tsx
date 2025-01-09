import { Button } from '@/components/ui/button';  // Make sure the correct path is used
import { Pencil, Trash } from 'lucide-react'; // Import the necessary icons

const pricing = [
  { id: 1, service: 'Mixing', price: '$200' },
  { id: 2, service: 'Mastering', price: '$150' },
];

const PricingTable = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Pricing Details</h2>
      <div className="space-y-4">
        {pricing.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div>
              <p className="font-semibold">{item.service}</p>
              <p className="text-sm text-gray-500">{item.price}</p>
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
        Add New Pricing
      </Button>
    </div>
  );
};

export default PricingTable;
