import {
    FaRocket, FaStar, FaHeart, FaUser, FaHome, FaCamera, FaBell, FaBook,
    FaCar, FaClock, FaCoffee, FaEnvelope, FaFlag, FaGift, FaKey, FaLock,
    FaMap, FaMusic, FaPhone, FaPlane, FaSearch, FaShieldAlt, FaShoppingCart,
    FaTag, FaTrash, FaUmbrella, FaVideo, FaWallet, FaWrench, FaAppleAlt,
    FaBicycle, FaBolt, FaBomb, FaBus, FaCogs, FaCrown, FaDice, FaDollarSign,
    FaEye, FaFeather, FaFire, FaGem, FaGlobe, FaHammer, FaHeadphones, FaLeaf,
    FaLightbulb, FaMoon, FaSun, FaTree, FaWind, FaCloud, FaSmile, FaDatabase
} from 'react-icons/fa'

import {
    MdSettings, MdPerson, MdHome, MdPlayArrow, MdPause, MdStop, MdVolumeUp,
    MdVolumeOff, MdBrightness4, MdBrightness7, MdAdd, MdRemove, MdEdit,
    MdDelete, MdShare, MdDownload, MdUpload, MdSearch, MdFilterList, MdSort,
    MdLock, MdMail, MdPhone, MdCameraAlt, MdPhoto, MdVideocam,
    MdMic, MdLocationOn, MdMap, MdStar, MdFavorite, MdThumbUp, MdThumbDown,
    MdArrowBack, MdArrowForward, MdRefresh, MdSync, MdCloud, MdSunny,
    MdCloudQueue, MdWarning, MdInfo, MdHelp, MdCheck, MdClose, MdDashboard,
    MdNotifications, MdList, MdMenu, MdMoreVert, MdInbox, MdForum, MdGroup, MdWork
} from 'react-icons/md'

const fontAwesomeIcons = [
    { icon: FaRocket, name: 'Rocket', pack: 'Font Awesome' },
    { icon: FaStar, name: 'Star', pack: 'Font Awesome' },
    { icon: FaHeart, name: 'Heart', pack: 'Font Awesome' },
    { icon: FaUser, name: 'User', pack: 'Font Awesome' },
    { icon: FaHome, name: 'Home', pack: 'Font Awesome' },
    { icon: FaCamera, name: 'Camera', pack: 'Font Awesome' },
    { icon: FaBell, name: 'Bell', pack: 'Font Awesome' },
    { icon: FaBook, name: 'Book', pack: 'Font Awesome' },
    { icon: FaCar, name: 'Car', pack: 'Font Awesome' },
    { icon: FaClock, name: 'Clock', pack: 'Font Awesome' },
    { icon: FaCoffee, name: 'Coffee', pack: 'Font Awesome' },
    { icon: FaEnvelope, name: 'Envelope', pack: 'Font Awesome' },
    { icon: FaFlag, name: 'Flag', pack: 'Font Awesome' },
    { icon: FaGift, name: 'Gift', pack: 'Font Awesome' },
    { icon: FaKey, name: 'Key', pack: 'Font Awesome' },
    { icon: FaLock, name: 'Lock', pack: 'Font Awesome' },
    { icon: FaMap, name: 'Map', pack: 'Font Awesome' },
    { icon: FaMusic, name: 'Music', pack: 'Font Awesome' },
    { icon: FaDatabase, name: 'Database', pack: 'Font Awesome' },
    { icon: FaLightbulb, name: 'Lightbulb', pack: 'Font Awesome' },
    { icon: FaMoon, name: 'Moon', pack: 'Font Awesome' },
    { icon: FaSun, name: 'Sun', pack: 'Font Awesome' }
].slice(0, 40)

const materialIcons = [
    { icon: MdSettings, name: 'Settings', pack: 'Material Design' },
    { icon: MdPerson, name: 'Person', pack: 'Material Design' },
    { icon: MdHome, name: 'Home', pack: 'Material Design' },
    { icon: MdPlayArrow, name: 'Play Arrow', pack: 'Material Design' },
    { icon: MdPause, name: 'Pause', pack: 'Material Design' },
    { icon: MdStop, name: 'Stop', pack: 'Material Design' },
    { icon: MdVolumeUp, name: 'Volume Up', pack: 'Material Design' },
    { icon: MdVolumeOff, name: 'Volume Off', pack: 'Material Design' },
    { icon: MdBrightness4, name: 'Brightness 4', pack: 'Material Design' },
    { icon: MdBrightness7, name: 'Brightness 7', pack: 'Material Design' },
    { icon: MdDashboard, name: 'Dashboard', pack: 'Material Design' },
    { icon: MdNotifications, name: 'Notifications', pack: 'Material Design' },
    { icon: MdList, name: 'List', pack: 'Material Design' },
    { icon: MdMenu, name: 'Menu', pack: 'Material Design' },
    { icon: MdMoreVert, name: 'More Vertical', pack: 'Material Design' },
    { icon: MdInbox, name: 'Inbox', pack: 'Material Design' },
    { icon: MdForum, name: 'Forum', pack: 'Material Design' },
    { icon: MdGroup, name: 'Group', pack: 'Material Design' },
    { icon: MdWork, name: 'Work', pack: 'Material Design' }
].slice(0, 40)

const mixedIcons = [...fontAwesomeIcons, ...materialIcons].slice(0, 50)

export default function IconDropdown({ pack, searchTerm, onIconClick }) {
    const icons = pack === 'fontAwesome' ? fontAwesomeIcons : 
                 pack === 'material' ? materialIcons : mixedIcons

    const filteredIcons = icons.filter(icon => 
        icon.name.toLowerCase().includes(searchTerm?.toLowerCase() || '')
    )

    return (
        <div className="icon-dropdown">
            {filteredIcons.length === 0 ? (
                <p style={{ padding: '20px', color: '#666' }}>
                    No icons found matching "{searchTerm}"
                </p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                    gap: '15px',
                    padding: '20px',
                }}>
                    {filteredIcons.map((iconInfo, index) => (
                        <div
                            key={index}
                            className="icon-item"
                            onClick={() => onIconClick(iconInfo)}
                            title={iconInfo.name}
                        >
                            <iconInfo.icon size={28} />
                            <span style={{
                                fontSize: '12px',
                                color: '#666',
                                marginTop: '5px',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                maxWidth: '100%'
                            }}>
                                {iconInfo.name}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}