import './Home.scss'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetBooksQuery } from '../../features/books/booksApiSlice'
import { setBooks } from '../../features/books/booksSlice'
import { setSidebar } from '../../features/ui/uiSlice'

import Navbar from '../../components/Navbar/Navbar'
import BooksView from '../../components/BooksView/BooksView'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen)
  const booksInStore = useSelector((state) => state.books)
  const [isManuallyToggled, setIsManuallyToggled] = useState(false)
  const [isViewportTooSmall, setIsViewportTooSmall] = useState(false)

  const { data: fetchedBooks, isLoading } = useGetBooksQuery(undefined, {
    skip: booksInStore.length > 0,
  })

  useEffect(() => {
    if (fetchedBooks) {
      dispatch(setBooks(fetchedBooks))
    }
  }, [fetchedBooks, dispatch])

  // Sidebar auto hide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        if (isSidebarOpen && !isManuallyToggled) {
          dispatch(setSidebar(false))
        }
        setIsViewportTooSmall(true)
      } else {
        if (!isSidebarOpen && !isManuallyToggled) {
          dispatch(setSidebar(true))
        }
        setIsViewportTooSmall(false)
      }
    }
  
    handleResize()
  
    window.addEventListener('resize', handleResize)
  
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch, isSidebarOpen, isManuallyToggled])
  

  if (isLoading) return <p>Loading your books...</p>

  return (
    <div className={`layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Navbar 
        className='navbar'
        setIsManuallyToggled={setIsManuallyToggled}
        isViewportTooSmall={isViewportTooSmall}
        isManuallyToggled={isManuallyToggled}
      />
      <BooksView className='books-view'/>
      {isSidebarOpen && <Sidebar className='sidebar' />}
    </div>
  )
}

export default Home
