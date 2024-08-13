import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useDeleteBookMutation } from '../../features/books/booksApiSlice'
import { setBooks } from '../../features/books/booksSlice'
import { getCover } from '../../services/bookDataService'
import './BooksView.scss'

const BooksView = ({ className }) => {
  const books = useSelector((state) => state.books)
  const activeView = useSelector((state) => state.ui.bookViewMode)
  const dispatch = useDispatch()
  const [deleteBook, { isLoading, isError, error }] = useDeleteBookMutation()
  const [coverUrls, setCoverUrls] = useState({})

  useEffect(() => {
    const fetchCovers = async () => {
      const urls = {}
      for (const book of books) {
        try {
          const url = await getCover(book.title)
          urls[book.id] = url
        } catch (error) {
          console.error('Error fetching cover for book:', book.title, error)
        }
      }
      setCoverUrls(urls)
    }

    if (books.length > 0) {
      fetchCovers()
    }
  }, [books])

  if (!Array.isArray(books) || books.length === 0) {
    return <p>{!books ? 'No books available' : 'Invalid books data'}</p>
  }

  const filterBooks = (books, mode) => {
    let tabTitle = 'All books'
    const filteredBooks = books.filter((book) => {
      switch (mode) {
        case 'COMPLETED':
          tabTitle = 'Completed books'
          return book.pagesRead === book.pageCount
        case 'READING':
          tabTitle = 'Currently reading'
          return book.pagesRead < book.pageCount
        case 'ALL':
        default:
          return true
      }
    })

    return { tabTitle, filteredBooks }
  }

  const { tabTitle: activeTab, filteredBooks } = filterBooks(books, activeView)

  const handleDelete = async (bookId) => {
    try {
      await deleteBook(bookId).unwrap()
      const updatedBooks = books.filter((book) => book.id !== bookId)
      dispatch(setBooks(updatedBooks))
    } catch (err) {
      console.error('Failed to delete the book:', err)
    }
  }

  return (
    <div className={className}>
      <div className='active-tab'>{activeTab}</div>

      {filteredBooks.map((book) => (
        <div className='book' key={book.id}>
          <img
            className='book-cover'
            src={coverUrls[book.id] || 'path/to/default-image.jpg'}
            alt={`${book.title} cover`}
          />

          <table className='book-details'>
            <tbody>
              <tr>
                <th>Title:</th>
                <td>{book.title}</td>
              </tr>
              <tr>
                <th>Author(s):</th>
                <td>{book.author.join(', ')}</td>
              </tr>
              <tr>
                <th>Page Count:</th>
                <td>{book.pageCount}</td>
              </tr>
              <tr>
                <th>Pages Read:</th>
                <td>{book.pagesRead}</td>
              </tr>
              <tr>
                <th>Publication Date:</th>
                <td>{new Date(book.publicationDate).toLocaleDateString()}</td>
              </tr>
              <tr>
                <th>Genre:</th>
                <td>{book.genre}</td>
              </tr>
              <tr>
                <th>Score:</th>
                <td>{book.score}</td>
              </tr>
            </tbody>
          </table>

          <button
            className='delete-book-btn'
            onClick={() => handleDelete(book.id)}
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

BooksView.propTypes = {
  className: PropTypes.string,
}

export default BooksView
