import { FaPlay } from 'react-icons/fa' // Font Awesome
import { MdPause } from 'react-icons/md' // Material Design

export default function IconButton({ isPlaying, onClick }) {
  return (
    <button className="icon-btn" onClick={onClick}>
      {isPlaying ? <MdPause size={24} /> : <FaPlay size={24} />}
    </button>
  )
}