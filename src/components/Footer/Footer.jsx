import './Footer.scss'

// TODO: Add GitHub, LinkedIn and email icons to the footer in the contact section.
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='footer-content'>
            <ul className='footer-item'>
              <li>Contact</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>

              <li>
                <a href='mailto:dev.eduardo.fe@gmail.com' className='email'>
                  dev.eduardo.fe@gmail.com
                </a>
              </li>
            </ul>

            <ul className='footer-item'>
              <li>About us</li>
              <li>
                <a href='#'>Frequently Asked Questions</a>
              </li>
              <li>
                <a href='#'>Lorem Ipsum</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>

            <ul className='footer-item'>
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type='email' placeholder='Enter Email Address'></input>
              </li>
              <li>
                <button className='submit-email'>Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
