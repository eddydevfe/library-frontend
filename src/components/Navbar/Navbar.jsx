import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useSendLogoutMutation } from '../../features/auth/authApiSlice'
import { setSidebar } from '../../features/ui/uiSlice'
import Menu from '../../assets/images/burger-simple-svgrepo-com.svg'
import './Navbar.scss'

const Navbar = ({ className }) => {
  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()
  const navigate = useNavigate()
  const isSidebarOpen = useSelector(state => state.ui.isSidebarOpen)
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
    dispatch(setSidebar(!isSidebarOpen))
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
}

export default Navbar
