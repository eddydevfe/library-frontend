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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto suscipit
                incidunt consequuntur assumenda quidem porro facere veniam.
              </p>
            </div>
          </div>

          <div className='advt-item'>
            <ReadingBook />
            <div>
              <h2>Simple</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae,
                esse pariatur totam iusto, debitis sit eos excepturi ratione placeat
                dolorem perspiciatis maiores nemo culpa.
              </p>
            </div>
          </div>

          <div className='advt-item'>
            <Climb />
            <div>
              <h2>Efficient</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam,
                repellendus sed facere in ex vitae ratione consectetur iusto debitis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages
