import { motion } from 'framer-motion'; // For adding animations
import { Button } from '@/components/ui/button'; // Ensure correct path
import { User, Clock } from 'lucide-react'; // For icons

const visitors = [
  { id: 1, name: 'John Doe', page: 'Home', time: '10:30 AM' },
  { id: 2, name: 'Jane Smith', page: 'Pricing', time: '11:00 AM' },
];

const VisitorsTable = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Site Visitors</h2>
      
      <div className="space-y-6">
        {visitors.map((visitor) => (
          <motion.div
            key={visitor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 p-4 rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <User className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-xl font-semibold text-gray-800">{visitor.name}</p>
                <p className="text-sm text-gray-500">{visitor.page}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <p className="text-sm text-gray-500">{visitor.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Optionally, you can add a button or other action */}
      <div className="flex justify-center mt-8">
        <Button
          size="lg"
          className="w-full max-w-xs py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-all duration-300"
        >
          Refresh Visitors
        </Button>
      </div>
    </div>
  );
};

export default VisitorsTable;
