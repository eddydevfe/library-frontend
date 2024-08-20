import PropTypes from 'prop-types'

const LoadingIndicator = ({ text }) => {
  const loadingIndicatorStyles = {
    position: 'absolute', 
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    color: '#fff', 
    fontSize: '24px',
  }

  return <div style={loadingIndicatorStyles}>{text || 'Loading...'}</div>
}

LoadingIndicator.propTypes = {
  text: PropTypes.string,
}

export default LoadingIndicator
