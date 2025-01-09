import VisitorsTable from './VisitorsTable';
import WorksTable from './WorksTable';
import PricingTable from './PricingTable';
import AddProductionForm from './AddProductionForm';

interface DashboardContentProps {
  selectedTab: string;
}

const DashboardContent = ({ selectedTab }: DashboardContentProps) => {
  return (
    <div>
      {/* View Visitors */}
      {selectedTab === 'visitors' && <VisitorsTable />}

      {/* Manage Works */}
      {selectedTab === 'works' && <WorksTable />}

      {/* Pricing Details */}
      {selectedTab === 'pricing' && <PricingTable />}

      {/* Add Production */}
      {selectedTab === 'addProduction' && <AddProductionForm />}
    </div>
  );
};

export default DashboardContent;
