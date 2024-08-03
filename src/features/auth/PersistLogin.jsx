import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { useRefreshMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import { selectCurrentToken } from './authSlice'

const PersistLogin = () => {
  const [persist] = usePersist()
  const token = useSelector(selectCurrentToken)
  const effectRan = useRef(false)

  const navigate = useNavigate()

  const [trueSuccess, setTrueSuccess] = useState(false)

  const [
    refresh,
    {
      isUninitialized, // Refresh function has not yet been called.
      isLoading,
      isSuccess,
      isError,
      error,
    },
  ] = useRefreshMutation()

  useEffect(() => {
    /*
    As the front end will be built and copied over to the backend, 
    the node environment will come from the back end.
    */
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      // React 18 Strict Mode

      const verifyRefreshToken = async () => {
        try {
          // Token is set in the onQueryStarted.
          await refresh() // From useRefreshMutation.
          setTrueSuccess(true)
        } catch (err) {
          console.error(err)
        }
      }

      if (!token && persist) verifyRefreshToken()
    }

    return () => (effectRan.current = true)

    // eslint-disable-next-line
  }, [])

  let content

  if (!persist) {
    content = <Outlet />
  } else if (isLoading) {
    content = <p>Loading...</p>
  } else if (isError) {
    navigate('/login')
  } else if ((isSuccess && trueSuccess) || (token && isUninitialized)) {
    content = <Outlet />
  }

  return content
}

export default PersistLogin
