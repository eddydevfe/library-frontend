import { Route, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import checkUserSession from './reducers/userReducer'
import Login from './pages/Login'

const App = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(checkUserSession())
  // }, [dispatch])

  return <Login />
}

export default App
