import { Router } from 'express'
import { bookController } from '../controllers/bookController.js'

export const bookRoutes = (BOOKS) => {
  const bookRouter = Router()
  const { getBooks, getBookById, createBook, updateBook, deleteBook } = bookController(BOOKS)

  bookRouter.route('/books')
    .get(getBooks)
    .post(createBook)

  bookRouter.route('/books/:id')
    .get(getBookById)
    .put(updateBook)
    .delete(deleteBook)

  return bookRouter
}
