import { apiSlice } from '../../app/api/apiSlice'

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addBook: builder.mutation({
      query: (bookData) => ({
        url: '/books',
        method: 'POST',
        body: bookData,
      }),
    }),
    getBooks: builder.query({
      query: () => ({
        url: '/books',
        method: 'GET',
      }),
    }),
    getBookById: builder.query({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: 'GET',
      }),
    }),
    updateBook: builder.mutation({
      query: ({ bookId, bookData }) => ({
        url: `/books/${bookId}`,
        method: 'PUT',
        body: bookData,
      }),
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApiSlice
