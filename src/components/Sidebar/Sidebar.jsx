import './Sidebar.scss'
import PropTypes from 'prop-types'
import { setBookViewMode } from '../../features/ui/uiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebar } from '../../features/ui/uiSlice'
import LogoutButton from '../Shared/LogoutButton'
import Modal from '../Modal'

const Sidebar = ({ className }) => {
  const activeView = useSelector((state) => state.ui.bookViewMode)
  const dispatch = useDispatch()

  const handleViewChange = (viewMode) => {
    dispatch(setBookViewMode(viewMode))
    dispatch(setSidebar(false))
  }

  return (
    <aside className={className}>
      <ul>
        <li
          className={activeView === 'ALL' ? 'active' : ''}
          onClick={() => handleViewChange('ALL')}
        >
          All
        </li>
        <li
          className={activeView === 'COMPLETED' ? 'active' : ''}
          onClick={() => handleViewChange('COMPLETED')}
        >
          Completed
        </li>
        <li
          className={activeView === 'READING' ? 'active' : ''}
          onClick={() => handleViewChange('READING')}
        >
          Reading
        </li>
      </ul>
      <div className='sidebar-btns'>
        <Modal />
        <LogoutButton />
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
}

export default Sidebar
