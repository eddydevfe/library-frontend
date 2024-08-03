import { useSelector } from 'react-redux'
// import PropTypes from 'prop-types'

const BooksView = () => {
  const books = useSelector((state) => state.books)

  if (!books) {
    return <p>No books available</p>
  }

  if (!Array.isArray(books)) {
    return <p>Invalid books data</p>
  }

  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author(s): {book.author.join(', ')}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>Pages Read: {book.pagesRead}</p>
          <p>Publication Date: {new Date(book.publicationDate).toLocaleDateString()}</p>
          <p>Genre: {book.genre}</p>
          <p>Score: {book.score}</p>
          <p>Review: {book.review}</p>
        </div>
      ))}
    </>
  )
}

// BooksView.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.arrayOf(PropTypes.string).isRequired,
//       pageCount: PropTypes.number.isRequired,
//       pagesRead: PropTypes.number.isRequired,
//       publicationDate: PropTypes.string.isRequired,
//       genre: PropTypes.string,
//       score: PropTypes.number,
//       review: PropTypes.string,
//     })
//   ).isRequired
// }

export default BooksView
