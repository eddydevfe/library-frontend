import { useSendLogoutMutation } from '../../features/auth/authApiSlice'
import { useNavigate } from 'react-router-dom'
import './LogoutButton.scss'

const LogoutButton = () => {
  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await sendLogout().unwrap()
      navigate('/login')
    } catch (err) {
      console.error('Failed to log out:', err)
    }
  }

  return (
    <button onClick={handleLogout} disabled={isLoading}>
      {isLoading ? 'Logging out...' : 'Log out'}
    </button>
  )
}

export default LogoutButton
