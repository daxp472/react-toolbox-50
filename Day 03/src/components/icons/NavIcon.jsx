import { FaHome, FaUser } from 'react-icons/fa'

export default function NavIcon() {
  return (
    <nav className="nav-menu">
      <a href="/" className="nav-item">
        <FaHome size={20} color="#2ecc71" /> Home
      </a>
      <a href="/profile" className="nav-item">
        <FaUser size={20} color="#9b59b6" /> Profile
      </a>
    </nav>
  )
}