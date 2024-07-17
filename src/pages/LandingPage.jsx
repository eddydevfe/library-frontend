import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section>
      <div>LandingPage</div>
      <Link to='/login'>Log in</Link>
      <Link to='/register'>Sign up</Link>
    </section>
  )
}

export default LandingPage