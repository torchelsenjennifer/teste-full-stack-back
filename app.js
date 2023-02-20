import express  from 'express'

const app = express()
const port = 3000

import routes from './routes.js'
app.use(routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor rodando na Porta: ${port}`)
})