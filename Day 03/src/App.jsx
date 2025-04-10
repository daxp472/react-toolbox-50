import { useState } from 'react'
import IconDropdown from './components/icons/IconDropdown'
import './App.css'

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [selectedIcon, setSelectedIcon] = useState(null)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleIconClick = (iconInfo) => {
    setSelectedIcon(iconInfo)
  }

  const closePopup = () => {
    setSelectedIcon(null)
  }

  return (
    <div className="app-wrapper">
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

        {activeDropdown === 'fontAwesome' && (
          <IconDropdown pack="fontAwesome" onIconClick={handleIconClick} />
        )}
        {activeDropdown === 'material' && (
          <IconDropdown pack="material" onIconClick={handleIconClick} />
        )}
        {activeDropdown === 'mixed' && (
          <IconDropdown pack="mixed" onIconClick={handleIconClick} />
        )}

        {selectedIcon && (
          <div className="icon-popup">
            <div className="popup-content">
              <button className="close-btn" onClick={closePopup}>×</button>
              <selectedIcon.icon size={40} color="#2c3e50" />
              <h3>{selectedIcon.name}</h3>
              <p>Pack: {selectedIcon.pack}</p>
            </div>
          </div>
        )}
      </div>

      <footer className="app-footer">
        Made by Dax Patel | <a href="https://github.com/DaxPatel" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  )
}

export default App