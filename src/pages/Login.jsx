import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'
import { useLoginMutation } from '../features/auth/authApiSlice'
import UserForm from '../components/UserForm'

const Login = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  const handleSubmit = async ({username, password}) => {
    try {
      const userData = await login({ username, password }).unwrap()
      dispatch(setCredentials({ ...userData, username }))
      navigate('/home')
    } catch (error) {
      if (!error?.originalStatus) {
        alert('No Server Response.')
      } else if (error.originalStatus === 400) {
        alert('Missing Username or Password.')
      } else if (error.originalStatus === 401) {
        alert('Unauthorized.')
      } else {
        alert('Login Failed.')
      }
    }
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section>
      <h1>Welcome back</h1>
      <UserForm onSubmit={handleSubmit} title='Login' buttonText='Sign in' />
      <p>Need an account? <Link to='/register'>Sign Up</Link></p>
    </section>
  )
}
export default Login
