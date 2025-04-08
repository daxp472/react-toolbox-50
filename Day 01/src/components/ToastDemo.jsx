// src/components/ToastDemo.jsx
import toast from 'react-hot-toast';
import Button from './Button';
import '../styles/ToastDemo.css';

function ToastDemo() {
  const handleSuccess = () => toast.success('Task completed successfully!');
  const handleError = () => toast.error('Something went wrong.');
  const handleLoading = () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 2000));
    toast.promise(promise, {
      loading: 'Processing...',
      success: 'Done!',
      error: 'Failed to process.',
    });
  };

  return (
    <div className='main'>
      <h1>My Toast Demo</h1>
      <div className="toast-demo">
        <h2>Toast Notifications</h2>
        <div className="button-group">
          <Button onClick={handleSuccess} variant="primary">
            Show Success
          </Button>
          <Button onClick={handleError} variant="danger">
            Show Error
          </Button>
          <Button onClick={handleLoading} variant="info">
            Show Loading
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ToastDemo;