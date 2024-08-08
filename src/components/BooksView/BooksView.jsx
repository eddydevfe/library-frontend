import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import './BooksView.scss'

const BooksView = ({ className }) => {
  const books = useSelector((state) => state.books)
  const activeView = useSelector((state) => state.ui.booksViewMode)


  // TODO: Add some style to these errors so they look nicer.
  if (!books) {
    return <p>No books available</p>
  }

  if (!Array.isArray(books)) {
    return <p>Invalid books data</p>
  }

  const filterBooks = (books, mode) => {
    switch (mode) {
      case 'COMPLETED':
        return books.filter((book) => book.pagesRead === book.pageCount)
      case 'READING':
        return books.filter((book) => book.pagesRead < book.pageCount)
      case 'REVIEWED':
        return books.filter((book) => book.review && book.review.length > 1)
      case 'ALL':
      default:
        return books
    }
  }

  const filteredBooks = filterBooks(books, activeView)

  return (
    <div className={className}>
      {filteredBooks.map((book) => (
        <div className='book' key={book.id}>
          <div className='book-cover'></div>
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
              <tr>
                <th>Review:</th>
                <td>{book.review}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

BooksView.propTypes = {
  className: PropTypes.string,
}

export default BooksView
