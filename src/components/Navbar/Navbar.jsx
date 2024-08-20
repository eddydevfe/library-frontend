import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from '../../features/ui/uiSlice'
import Menu from '../../assets/images/burger-simple-svgrepo-com.svg'
import LogoutButton from '../Shared/LogoutButton'
import AddBookModal from '../AddBookModal/AddBookModal'
import './Navbar.scss'

const Navbar = ({
  className,
  setIsManuallyToggled,
  isViewportTooSmall,
  isManuallyToggled,
}) => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen)
  const dispatch = useDispatch()

  // This is here because the hamburger menu button is here.
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
      <div className='nav-btns'>
        <AddBookModal />
        <LogoutButton />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  setIsManuallyToggled: PropTypes.func.isRequired,
  isViewportTooSmall: PropTypes.bool.isRequired,
  isManuallyToggled: PropTypes.bool.isRequired,
}

export default Navbar
