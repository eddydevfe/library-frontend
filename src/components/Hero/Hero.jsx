import { Link } from 'react-router-dom'
import ReadingSvg from '../../assets/images/undraw_reading_time_re_phf7.svg'
import './Hero.scss'

// TODO: Add an png of a semi transparent shape behind the illustration/svg.
const Hero = () => {
  return (
    <main id='hero' className='container'>
      <div className='hero'>
        <div>
          <h1>
            {' '}
            Wecome to <span>Alexandria</span>
          </h1>
          <p>
            Keep track of all your books in one place. Alexandria makes it
            simple to log your reading history and stay organized.
          </p>
          <div className='buttons'>
            <Link to='/login' className='login'>
              Log in
            </Link>
            <Link to='/register' className='sign-up'>
              Sign up
            </Link>
          </div>
        </div>
        <ReadingSvg
          className='reading-svg'
          alt='Illustration of someone reading a book'
        />
      </div>
    </main>
  )
}

export default Hero
