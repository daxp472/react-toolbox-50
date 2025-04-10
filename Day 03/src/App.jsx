import { FaRocket, FaStar } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import NavIcon from './components/icons/NavIcon'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>React Icons Demo</h1>
      <div className="icon-examples">
        <NavIcon />
        <FaRocket size={40} color="#e74c3c" className="spin" />
        <FaStar size={30} color="#f1c40f" />
        <MdSettings size={50} color="#3498db" />
        
      </div>
    </div>
  )
}

export default App