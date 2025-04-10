// src/App.jsx
import { useState } from 'react'
import IconDropdown from './components/icons/IconDropdown'
import './App.css'

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="app-container">
      <h1>Explore 400+ Icons!</h1>
      <p>Click buttons to see icons from different packs.</p>
      <div className="button-group">
        <button
          className="dropdown-btn"
          onClick={() => toggleDropdown('fontAwesome')}
        >
          Font Awesome Icons
        </button>
        <button
          className="dropdown-btn"
          onClick={() => toggleDropdown('material')}
        >
          Material Design Icons
        </button>
        <button
          className="dropdown-btn"
          onClick={() => toggleDropdown('mixed')}
        >
          Mixed Icons
        </button>
      </div>

      {active weekly === 'fontAwesome' && (
        <IconDropdown pack="fontAwesome" />
      )}
      {activeDropdown === 'material' && (
        <IconDropdown pack="material" />
      )}
      {activeDropdown === 'mixed' && (
        <IconDropdown pack="mixed" />
      )}
    </div>
  )
}

export default App