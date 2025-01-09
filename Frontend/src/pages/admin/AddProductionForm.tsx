import { Button } from '@/components/ui/button';  // Make sure the correct path is used

const AddProductionForm = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Add New Production</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-lg font-semibold">Production Name</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Enter production name"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Price</label>
          <input
            type="number"
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Enter price"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Description</label>
          <textarea
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Enter production description"
          />
        </div>
        <Button className="mt-6" size="lg">
          Add Production
        </Button>
      </form>
    </div>
  );
};

export default AddProductionForm;
