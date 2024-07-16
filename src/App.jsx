import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import RequireAuth from './features/auth/RequireAuth'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route index element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register/>}/>

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path='home' element={<Home />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
