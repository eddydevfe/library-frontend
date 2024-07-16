import { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const UserForm = ({ onSubmit, title, buttonText }) => {
  const userRef = useRef()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')

  useEffect(() => {
    userRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ username: user, password: pwd })
    setUser('')
    setPwd('')
  }

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          ref={userRef}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoComplete='off'
          required
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <button>{buttonText}</button>
      </form>
    </>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default UserForm
