const visitors = [
  { id: 1, name: 'John Doe', page: 'Home', time: '10:30 AM' },
  { id: 2, name: 'Jane Smith', page: 'Pricing', time: '11:00 AM' },
];

const VisitorsTable = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Site Visitors</h2>
      <div className="space-y-4">
        {visitors.map((visitor) => (
          <div key={visitor.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div>
              <p className="font-semibold">{visitor.name}</p>
              <p className="text-sm text-gray-500">{visitor.page}</p>
            </div>
            <p className="text-sm text-gray-500">{visitor.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorsTable;
