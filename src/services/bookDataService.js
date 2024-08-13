// Open Library API
const baseUrl = 'https://openlibrary.org/search.json?title='

export const getCover = async (bookTitle, size = 'M') => {
  try {
    const response = await fetch(baseUrl + encodeURIComponent(bookTitle))

    if (!response.ok) {
      throw new Error('Failed to fetch data from the Open Library API.')
    }

    const data = await response.json()

    if (data.docs.length === 0) {
      throw new Error('No books found.')
    }

    const book = data.docs[0]
    const coverId = book.cover_i

    if (!coverId) {
      throw new Error('No cover ID found.')
    }

    const coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`

    return coverUrl
  } catch (error) {
    console.error('Error with the Open Library API:', error)
  }
}
