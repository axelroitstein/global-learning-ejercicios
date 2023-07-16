import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'public')
app.use(express.static('public'))

app.get('/home', (_, res) => {
  return res.render('index.ejs', { name: 'Axel' })
})

app.get('*', function (_, res) {
  return res.render('not-found.ejs')
})

app.listen(3000, () => {
  console.log('app listening on port 3000')
})

// res.json({ message: 'Hello World'})
