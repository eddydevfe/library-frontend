import './Sidebar.scss'
import PropTypes from 'prop-types'

const Sidebar = ({ className }) => {
  return (
    <aside className={className}>
      <ul>
        <li>All</li>
        <li>Completed</li>
        <li>Reading</li>
        <li>Reviewed</li>
      </ul>
    </aside>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
}

export default Sidebar
