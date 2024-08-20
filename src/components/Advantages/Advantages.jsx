import './Advantages.scss'
import Bookshelves from '../../assets/images/undraw_bookshelves_re_lxoy.svg'
import ReadingBook from '../../assets/images/undraw_reading_book_re_kqpk.svg'
import Climb from '../../assets/images/undraw_road_to_knowledge_m8s0.svg'

const Advantages = () => {
  return (
    <section>
      <div className='container'>
        <div className='advantages'>
          <div className='advt-item'>
            <Bookshelves />
            <div>
              <h2>Convenient</h2>
              <p>
                Easily log and organize your entire book collection. With
                Alexandria, keeping track of what you've read and what you plan
                to read is effortless.
              </p>
            </div>
          </div>

          <div className='advt-item'>
            <ReadingBook />
            <div>
              <h2>Simple</h2>
              <p>
                Alexandria is designed to be user-friendly, with a clean and
                intuitive interface that makes logging books a breeze. No
                unnecessary features, just what you need.
              </p>
            </div>
          </div>

          <div className='advt-item'>
            <Climb />
            <div>
              <h2>Efficient</h2>
              <p>
                Spend less time managing your books and more time reading them.
                Alexandria helps you quickly find and update your book logs, so
                you can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages
