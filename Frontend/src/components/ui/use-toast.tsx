import { toast, ToastOptions, ToastPosition } from 'react-toastify';

// Define the types of positions
const toastPositions: Record<string, ToastPosition> = {
  topLeft: "top-left",
  topCenter: "top-center",
  topRight: "top-right",
  bottomLeft: "bottom-left",
  bottomCenter: "bottom-center",
  bottomRight: "bottom-right",
};

const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning', position: ToastPosition = toastPositions.topCenter) => {
    const options: ToastOptions = {
      position,
    };
    
    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'info':
        toast.info(message, options);
        break;
      case 'warning':
        toast.warning(message, options);
        break;
      default:
        toast(message, options);
        break;
    }
  };

  return { showToast };
};

export default useToast;
