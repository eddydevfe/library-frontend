import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetBooksQuery } from '../../features/books/booksApiSlice'
import { setBooks } from '../../features/books/booksSlice'
import { useDispatch } from 'react-redux'
import BooksView from '../../components/BooksView'

const Home = () => {
  const dispatch = useDispatch()
  const booksInStore = useSelector((state) => state.books)

  // This took longer than I will ever admit.
  const { data: fetchedBooks, isLoading } = useGetBooksQuery(undefined, {
    skip: booksInStore.length > 0,
  })

  useEffect(() => {
    if (fetchedBooks) {
      dispatch(setBooks(fetchedBooks))
    }
  }, [fetchedBooks, dispatch])

  if (isLoading) return <p>Loading your books...</p>

  return (
    <main>
      <div>Home</div>
      <BooksView />
    </main>
  )
}

export default Home
