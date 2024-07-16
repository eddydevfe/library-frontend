import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section>
      <div>LandingPage</div>
      <Link to='/login'>Log In</Link>
      <Link to='/register'>Sign Up</Link>
    </section>
  )
}

export default LandingPage