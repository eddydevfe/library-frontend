import { Link } from 'react-router-dom'
import ReadingSvg from '../../assets/images/undraw_reading_time_re_phf7.svg'
import './Hero.scss'

// TODO: Add an png of a semi transparent shape behind the illustration/svg.
const Hero = () => {
  return (
    <main className='container'>
      <div className='hero'>
        <div>
          <h1>
            {' '}
            Wecome to <span>Alexandria</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum nobis
            perferendis, aut praesentium et quidem natus, saepe quasi quo nemo beatae quae
            reiciendis quis!
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
        <ReadingSvg className='reading-svg' alt='Illustration of someone reading a book' />
      </div>
    </main>
  )
}

export default Hero
