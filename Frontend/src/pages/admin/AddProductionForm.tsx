import { Button } from '@/components/ui/button';  // Make sure the correct path is used

const AddProductionForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Production</h2>
      <form className="space-y-6">
        {/* Production Name */}
        <div className="space-y-2">
          <label htmlFor="productionName" className="block text-lg font-semibold text-gray-700">Production Name</label>
          <input
            id="productionName"
            type="text"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            placeholder="Enter production name"
            required
          />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label htmlFor="price" className="block text-lg font-semibold text-gray-700">Price</label>
          <input
            id="price"
            type="number"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description</label>
          <textarea
            id="description"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            placeholder="Enter production description"
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button size="lg" className="w-full max-w-xs py-3 bg-primary text-white hover:bg-primary-700 transition-all duration-300">
            Add Production
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductionForm;
