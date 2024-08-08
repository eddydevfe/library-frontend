import './Sidebar.scss'
import PropTypes from 'prop-types'
import { setBookViewMode } from '../../features/ui/uiSlice'

const Sidebar = ({ className }) => {
  return (
    <aside className={className}>
      <ul>
        <li onClick={() => setBookViewMode('ALL')}>All</li>
        <li onClick={() => setBookViewMode('COMPLETED')}>Completed</li>
        <li onClick={() => setBookViewMode('READING')}>Reading</li>
        <li onClick={() => setBookViewMode('REVIEWED')}>Reviewed</li>
      </ul>
    </aside>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
}

export default Sidebar
