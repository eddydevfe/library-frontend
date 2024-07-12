import PropTypes from 'prop-types'
import { useField } from '../hooks/index'

const LoginForm = ({ handleLogin }) => {
  const username = useField('text', 'username')
  const password = useField('password', 'password')

  const onSubmit = (event) => {
    event.preventDefault()
    handleLogin({username: username.content.value, password: password.content.value})
    username.reset()
    password.reset()
  }

  return (
    <section>
      <span>Login</span>
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>Username:</label>
        <input {...username.content} />

        <label htmlFor='password'>Password:</label>
        <input {...password.content} />
        <button type='submit'>Log in</button>
      </form>
    </section>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default LoginForm
