import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useSendLogoutMutation } from '../../features/auth/authApiSlice'
import { setSidebar } from '../../features/ui/uiSlice'
import Menu from '../../assets/images/burger-simple-svgrepo-com.svg'
import './Navbar.scss'

const Navbar = ({ className, setIsManuallyToggled, isViewportTooSmall, isManuallyToggled }) => {
  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()
  const navigate = useNavigate()
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await sendLogout().unwrap()
      navigate('/login')
    } catch (err) {
      console.error('Failed to log out:', err)
    }
  }
  
  const handleSidebar = () => {
    if (!isViewportTooSmall) {
      dispatch(setSidebar(!isSidebarOpen))
      setIsManuallyToggled(true) 
    } else if (isViewportTooSmall && !isSidebarOpen) {
      dispatch(setSidebar(true))
      setIsManuallyToggled(true)
    } else if (isViewportTooSmall && isSidebarOpen) {
      dispatch(setSidebar(false))
      setIsManuallyToggled(true)
    }
  
    if (window.innerWidth >= 900 && isManuallyToggled) {
      setIsManuallyToggled(false) 
    }
  }

  return (
    <nav className={className}>
      <Menu onClick={handleSidebar} />
      <h1>Alexandria</h1>
      <button onClick={handleLogout} disabled={isLoading}>
        {isLoading ? 'Logging out...' : 'Log out'}
      </button>
      {isError && <p>Error: {error.message}</p>}
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  setIsManuallyToggled: PropTypes.func.isRequired,
  isViewportTooSmall: PropTypes.bool.isRequired,
}

export default Navbar
