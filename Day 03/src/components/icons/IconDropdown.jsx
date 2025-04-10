import {
    FaRocket, FaStar, FaHeart, FaUser, FaHome, FaCamera, FaBell, FaBook,
    FaCar, FaClock, FaCoffee, FaEnvelope, FaFlag, FaGift, FaKey, FaLock,
    FaMap, FaMusic, FaPhone, FaPlane, FaSearch, FaShieldAlt, FaShoppingCart,
    FaTag, FaTrash, FaUmbrella, FaVideo, FaWallet, FaWrench, FaAppleAlt,
    FaBicycle, FaBolt, FaBomb, FaBus, FaCogs, FaCrown, FaDice, FaDollarSign,
    FaEye, FaFeather, FaFire, FaGem, FaGlobe, FaHammer, FaHeadphones, FaLeaf,
  } from 'react-icons/fa'
  
  import {
    MdSettings, MdPerson, MdHome, MdPlayArrow, MdPause, MdStop, MdVolumeUp,
    MdVolumeOff, MdBrightness4, MdBrightness7, MdAdd, MdRemove, MdEdit,
    MdDelete, MdShare, MdDownload, MdUpload, MdSearch, MdFilterList, MdSort,
    MdLock, MdUnlock, MdMail, MdPhone, MdCameraAlt, MdPhoto, MdVideocam,
    MdMic, MdLocationOn, MdMap, MdStar, MdFavorite, MdThumbUp, MdThumbDown,
    MdArrowBack, MdArrowForward, MdRefresh, MdSync, MdCloud, MdSunny,
    MdCloudQueue, MdWarning, MdInfo, MdHelp, MdCheck, MdClose,
  } from 'react-icons/md'
  
  const fontAwesomeIcons = [
    { icon: FaRocket, name: 'FaRocket', pack: 'Font Awesome' },
    { icon: FaStar, name: 'FaStar', pack: 'Font Awesome' },
    { icon: FaHeart, name: 'FaHeart', pack: 'Font Awesome' },
    { icon: FaUser, name: 'FaUser', pack: 'Font Awesome' },
    { icon: FaHome, name: 'FaHome', pack: 'Font Awesome' },
    { icon: FaCamera, name: 'FaCamera', pack: 'Font Awesome' },
    { icon: FaBell, name: 'FaBell', pack: 'Font Awesome' },
    { icon: FaBook, name: 'FaBook', pack: 'Font Awesome' },
    { icon: FaCar, name: 'FaCar', pack: 'Font Awesome' },
    { icon: FaClock, name: 'FaClock', pack: 'Font Awesome' },
    // Add more as needed...
  ].slice(0, 40) // Limit to 40 for demo
  
  const materialIcons = [
    { icon: MdSettings, name: 'MdSettings', pack: 'Material Design' },
    { icon: MdPerson, name: 'MdPerson', pack: 'Material Design' },
    { icon: MdHome, name: 'MdHome', pack: 'Material Design' },
    { icon: MdPlayArrow, name: 'MdPlayArrow', pack: 'Material Design' },
    { icon: MdPause, name: 'MdPause', pack: 'Material Design' },
    { icon: MdStop, name: 'MdStop', pack: 'Material Design' },
    { icon: MdVolumeUp, name: 'MdVolumeUp', pack: 'Material Design' },
    { icon: MdVolumeOff, name: 'MdVolumeOff', pack: 'Material Design' },
    { icon: MdBrightness4, name: 'MdBrightness4', pack: 'Material Design' },
    { icon: MdBrightness7, name: 'MdBrightness7', pack: 'Material Design' },
    // Add more as needed...
  ].slice(0, 40) // Limit to 40 for demo
  
  const mixedIcons = [...fontAwesomeIcons, ...materialIcons].slice(0, 50)
  
  export default function IconDropdown({ pack, onIconClick }) {
    const icons = pack === 'fontAwesome' ? fontAwesomeIcons : pack === 'material' ? materialIcons : mixedIcons
  
    return (
      <div className="icon-dropdown">
        {icons.map((iconInfo, index) => (
          <div
            key={index}
            className="icon-item"
            onClick={() => onIconClick(iconInfo)}
          >
            <iconInfo.icon size={24} color="#2c3e50" />
          </div>
        ))}
      </div>
    )
  }