import { useState } from 'react'
import IconDropdown from './components/icons/IconDropdown'
import './App.css'

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    setSearchTerm('')
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
        <h1 className="app-title">React Icons Explorer</h1>
        <p className="app-description">
          Discover and use 400+ beautiful icons from popular icon packs
        </p>

        <div className="button-group">
          <button
            className={`dropdown-btn ${activeDropdown === 'fontAwesome' ? 'active' : ''}`}
            onClick={() => toggleDropdown('fontAwesome')}
          >
            Font Awesome Icons
          </button>
          <button
            className={`dropdown-btn ${activeDropdown === 'material' ? 'active' : ''}`}
            onClick={() => toggleDropdown('material')}
          >
            Material Design Icons
          </button>
          <button
            className={`dropdown-btn ${activeDropdown === 'mixed' ? 'active' : ''}`}
            onClick={() => toggleDropdown('mixed')}
          >
            All Icons
          </button>
        </div>

        {activeDropdown && (
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search icons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        {activeDropdown && (
          <IconDropdown
            pack={activeDropdown}
            searchTerm={searchTerm}
            onIconClick={handleIconClick}
          />
        )}

        {selectedIcon && (
          <div className="icon-popup">
            <div className="popup-content">
              <button className="close-btn" onClick={closePopup}>×</button>
              <selectedIcon.icon size={50} color="#2c3e50" />
              <h3>{selectedIcon.name}</h3>
              <p>Pack: {selectedIcon.pack}</p>
              <code>{`import { ${selectedIcon.name} } from 'react-icons/${
                selectedIcon.pack === 'Font Awesome' ? 'fa' : 'md'
              }'`}</code>
            </div>
          </div>
        )}
      </div>

      <footer className="app-footer">
        Made with ❤️ by Dax Patel | 
        <a href="https://github.com/daxp472" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  )
}

export default App