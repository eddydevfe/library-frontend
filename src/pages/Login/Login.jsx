import '../../styles/styles.scss'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import UserForm from '../../components/UserForm/UserForm'

const Login = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()


  // TODO: Ensure error handling is working as intended both here and in the Register.jsx
  const handleSubmit = async ({username, password}) => {
    try {
      const userData = await login({ username, password }).unwrap()
      dispatch(setCredentials({ ...userData, username }))
      navigate('/home')
    } catch (error) {
      if (!error?.originalStatus) {
        alert('No Server Response.')
      } else if (error.originalStatus === 400) {
        alert( error?.data?.error || 'Missing Username or Password.')
      } else if (error.originalStatus === 401) {
        alert('Unauthorized.')
      } else {
        alert('Login Failed.')
      }
    }
  }

  // TODO: Add a better loading indicator.
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='container'>
      <div className='auth-container'>
        <div className='auth-form'>
          <h1>Welcome back</h1>
          <UserForm onSubmit={handleSubmit} title='Log in' buttonText='Log in' />
          <p>Need an account? <Link to='/register'>Register </Link></p>
        </div>
      </div>
    </section>
  )
}
export default Login
