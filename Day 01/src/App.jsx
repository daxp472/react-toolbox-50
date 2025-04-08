import { Toaster } from 'react-hot-toast';
import ToastDemo from './components/ToastDemo';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ToastDemo />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;