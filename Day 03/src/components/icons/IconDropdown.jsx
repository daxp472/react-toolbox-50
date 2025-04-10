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
    MdArrowBack, MdArrowForward, MdRefresh, MdSync, MdCloud, MdSunny, MdRain,
    MdSnow, MdWarning, MdInfo, MdHelp, MdCheck, MdClose,
  } from 'react-icons/md'
  
  const fontAwesomeIcons = [
    FaRocket, FaStar, FaHeart, FaUser, FaHome, FaCamera, FaBell, FaBook,
    FaCar, FaClock, FaCoffee, FaEnvelope, FaFlag, FaGift, FaKey, FaLock,
    FaMap, FaMusic, FaPhone, FaPlane, FaSearch, FaShieldAlt, FaShoppingCart,
    FaTag, FaTrash, FaUmbrella, FaVideo, FaWallet, FaWrench, FaAppleAlt,
    FaBicycle, FaBolt, FaBomb, FaBus, FaCogs, FaCrown, FaDice, FaDollarSign,
    FaEye, FaFeather, FaFire, FaGem, FaGlobe, FaHammer, FaHeadphones, FaLeaf,
  ]
  
  const materialIcons = [
    MdSettings, MdPerson, MdHome, MdPlayArrow, MdPause, MdStop, MdVolumeUp,
    MdVolumeOff, MdBrightness4, MdBrightness7, MdAdd, MdRemove, MdEdit,
    MdDelete, MdShare, MdDownload, MdUpload, MdSearch, MdFilterList, MdSort,
    MdLock, MdUnlock, MdMail, MdPhone, MdCameraAlt, MdPhoto, MdVideocam,
    MdMic, MdLocationOn, MdMap, MdStar, MdFavorite, MdThumbUp, MdThumbDown,
    MdArrowBack, MdArrowForward, MdRefresh, MdSync, MdCloud, MdSunny, MdRain,
    MdSnow, MdWarning, MdInfo, MdHelp, MdCheck, MdClose,
  ]
  
  const mixedIcons = [...fontAwesomeIcons, ...materialIcons].slice(0, 50) 
  
  export default function IconDropdown({ pack }) {
    const icons = pack === 'fontAwesome' ? fontAwesomeIcons : pack === 'material' ? materialIcons : mixedIcons
  
    return (
      <div className="icon-dropdown">
        {icons.map((Icon, index) => (
          <div key={index} className="icon-item">
            <Icon size={24} color="#2c3e50" />
          </div>
        ))}
      </div>
    )
  }