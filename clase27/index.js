import express, { response } from 'express'
import BOOKS_FROM from './data.js'
import dotenv from 'dotenv'
import { bookRoutes } from './routes/bookRouter.js'
import errorHandler from './middlewares/errorHandler.js'
import httpStatus from './helpers/httpStatus.js'
import fs from 'node:fs'


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use('/api', bookRoutes(BOOKS_FROM))

//Middleware que calcula el tiempo que demora una petición

app.use((req, res, next) => {
      console.log(`${req.method} ${req.originalUrl} [STARTED]`)
      const start = process.hrtime()

    res.on('finish', () => {
        console.log(` The process from ${req.method} ${req.originalUrl} took ${(start[0] + start[1]) / Math.pow(10,9)} seconds `)
    })

    res.on('close',() => {
      console.log(`${req.originalUrl} CLOSED`)
    })

    next()
})

//Middleware que usa FileSystem

app.use((req, res, next) => {
  res.on ('finish', () => {
    const date = new Date() 
    const logFilePath = (process.cwd(), 'request.txt')
    const responseHTTPCode = httpStatus.NOT_FOUND
    fs.appendFileSync(logFilePath, `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${req.method} - ${responseHTTPCode}\r\n`)
    
  })
  res.status(responseHTTPCode)
  next()
})
  
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Exercises one & two listening on port ${PORT}!`)
})
