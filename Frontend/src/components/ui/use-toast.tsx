// src/components/ui/use-toast.ts
import { toast } from 'react-toastify';

const useToast = () => {
  const showToast = ({ title, description, variant = 'success' }: { title: string; description: string; variant?: 'success' | 'error' | 'info' | 'warning' }) => {
    switch (variant) {
      case 'success':
        toast.success(`${title}: ${description}`, { position: toast.POSITION.TOP_CENTER });
        break;
      case 'error':
        toast.error(`${title}: ${description}`, { position: toast.POSITION.TOP_CENTER });
        break;
      case 'info':
        toast.info(`${title}: ${description}`, { position: toast.POSITION.TOP_CENTER });
        break;
      case 'warning':
        toast.warning(`${title}: ${description}`, { position: toast.POSITION.TOP_CENTER });
        break;
      default:
        toast(`${title}: ${description}`, { position: toast.POSITION.TOP_CENTER });
        break;
    }
  };

  return { showToast };
};

export default useToast;
