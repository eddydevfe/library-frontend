import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAddBookMutation } from '../../features/books/booksApiSlice'
import { setBooks } from '../../features/books/booksSlice'
import './AddBookModal.scss'

const AddBookModal = () => {
  const dialogRef = useRef(null)
  const [addBook] = useAddBookMutation()
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
      document.body.classList.add('active-modal')
    }
  }

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
      document.body.classList.remove('active-modal')
    }
  }

  const handleBackgroundClick = (e) => {
    if (dialogRef.current && e.target === dialogRef.current) {
      closeModal()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const bookData = {
      title: formData.get('title'),
      author: formData.get('author'),
      pageCount: parseInt(formData.get('pageCount'), 10),
      pagesRead: parseInt(formData.get('pagesRead'), 10),
      publicationDate: formData.get('publicationDate'),
      genre: formData.get('genre'),
      score: parseInt(formData.get('score'), 10),
    }

    try {
      const addedBook = await addBook(bookData).unwrap()
      dispatch(setBooks([...books, addedBook]))
      closeModal()
    } catch (error) {
      console.error('Failed to add book:', error)
      alert('Could not add new book.')
    }
  }

  return (
    <>
      <button onClick={openModal} className="open-modal-btn">
        New book
      </button>

      <dialog className="modal" ref={dialogRef} onClick={handleBackgroundClick}>
        <div className="modal-content">
          <h2>New Book</h2>
          <form onSubmit={handleSubmit}>
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
              <input
                type="date"
                id="publicationDate"
                name="publicationDate"
                required
              />
            </div>

            <div>
              <label htmlFor="genre">Genre:</label>
              <input type="text" id="genre" name="genre" required />
            </div>

            <div>
              <label htmlFor="score">Score:</label>
              <input
                type="number"
                id="score"
                name="score"
                min="0"
                max="10"
                step="1"
                required
              />
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
    </>
  )
}

export default AddBookModal
