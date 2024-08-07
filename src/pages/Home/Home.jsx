import './Home.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetBooksQuery } from '../../features/books/booksApiSlice'
import { setBooks } from '../../features/books/booksSlice'
import { useDispatch } from 'react-redux'

import Navbar from '../../components/Navbar/Navbar'
import BooksView from '../../components/BooksView'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen)
  const booksInStore = useSelector((state) => state.books)

  // This took longer than I will ever admit.
  // Fetch books data, skip fetching if books are already in the store.
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
    <div className='layout'>
      <Navbar className='navbar' />
      {/* <BooksView /> */}
      {isSidebarOpen && <Sidebar className='sidebar' />}
    </div>
  )
}

export default Home
