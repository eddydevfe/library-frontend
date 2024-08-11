import { useState } from 'react'
import './Modal.scss'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal} className='open-modal-btn'>
        New book
      </button>

      {isOpen && (
        <dialog className="modal" open>
          <div className="modal-content">
            <h2>New Book</h2>
            
            <form>
              <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
              </div>

              <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" required />
              </div>

              <div>
                <label htmlFor="pageCount">Page Count:</label>
                <input type="number" id="pageCount" name="pageCount" required />
              </div>

              <div>
                <label htmlFor="pagesRead">Pages Read:</label>
                <input type="number" id="pagesRead" name="pagesRead" required />
              </div>

              <div>
                <label htmlFor="publicationDate">Publication Date:</label>
                <input type="date" id="publicationDate" name="publicationDate" required />
              </div>

              <div>
                <label htmlFor="genre">Genre:</label>
                <input type="text" id="genre" name="genre" required />
              </div>

              <div>
                <label htmlFor="score">Score:</label>
                <input type="number" id="score" name="score" min="0" max="10" step="1" required />
              </div>
              
              <div>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                <input type="submit" value="Submit" />
              </div>
            </form>

          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
