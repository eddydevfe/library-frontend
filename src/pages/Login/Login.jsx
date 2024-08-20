import '../../styles/styles.scss'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import UserForm from '../../components/UserForm/UserForm'
import usePersist from '../../hooks/usePersist'
import LoadingIndicator from '../../components/LoadingIndicator'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const [persist, setPersist] = usePersist() // Without persist an error is thrown.

  /*
  Login persistence is on by default but this could be changed to a Trust This Device 
  toggle in the login and register forms.
  */
  useEffect(() => {
    setPersist(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // TODO: Ensure error handling is working as intended both here and in the Register.jsx
  // TODO: Extract error handler into it's own helper function.
  const handleSubmit = async ({ username, password }) => {
    try {
      const userData = await login({ username, password }).unwrap()
      dispatch(setCredentials({ ...userData, username }))
      navigate('/home')
    } catch (error) {
      if (!error?.originalStatus) {
        alert('No Server Response.')
      } else if (error.originalStatus === 400) {
        alert(error?.data?.error || 'Missing Username or Password.')
      } else if (error.originalStatus === 401) {
        alert('Unauthorized.')
      } else {
        alert('Login Failed.')
      }
    }
  }

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <section className='container'>
      <div className='auth-container'>
        <div className='auth-form'>
          <Link to='/'>
            <span>←</span>
          </Link>
          <h1>Welcome back</h1>
          <UserForm
            onSubmit={handleSubmit}
            title='Log in'
            buttonText='Log in'
          />
          <p>
            Need an account? <Link to='/register'>Register </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Login
