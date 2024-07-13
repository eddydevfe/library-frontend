import { useField } from '../hooks/index'

import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'


const Login = () => {
  const username = useField('text', 'username')
  const password = useField('password', 'password')
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
        dispatch(login({username: username.content.value, password: password.content.value}))
        username.reset()
        password.reset()
    } catch (error) {
        console.error('error logging in:', error.message)
    }
  }

  return (
    <main>
      <h1>Personal Library</h1>
      <h2>Welcome back</h2>

      <section>
        <span>Login</span>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input {...username.content} />
          </div>

          <div>
            <label htmlFor='password'>Password:</label>
            <input {...password.content} />
          </div>
          <button type='submit'>Log in</button>
        </form> 
      </section>
    </main>
  )
}

export default Login
