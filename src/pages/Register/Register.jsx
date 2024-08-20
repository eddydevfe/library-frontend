import '../../styles/styles.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import { useRegisterMutation } from '../../features/register/registerApiSlice'
import UserForm from '../../components/UserForm/UserForm'
import LoadingIndicator from '../../components/LoadingIndicator'

const Register = () => {
  const navigate = useNavigate()
  const [login, { isLoading: isLoginLoading }] = useLoginMutation()
  const [registerUser, { isLoading: isRegisterLoading }] = useRegisterMutation()
  const dispatch = useDispatch()

  const handleSubmit = async ({ username, password }) => {
    try {
      const registrationResult = await registerUser({
        username,
        password,
      }).unwrap()
      if (registrationResult) alert(registrationResult.success)
      const userData = await login({ username, password }).unwrap()
      dispatch(setCredentials({ ...userData, username }))
      navigate('/home')
    } catch (error) {
      if (error.status === 400 || error.status === 409) {
        alert(error.data.error)
      } else {
        alert('Registration Failed.')
      }
    }
  }

  const isLoading = isRegisterLoading || isLoginLoading

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <section className='.container'>
      <div className='auth-container'>
        <div className='auth-form'>
          <Link to='/' >
            <span>←</span>
          </Link>
          <h1>Welcome</h1>
          <UserForm
            onSubmit={handleSubmit}
            title='Register'
            buttonText='Sign up'
          />
          <p>
            Already have an account? <Link to='/login'>Log in</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Register
