import express  from 'express'

const app = express()
const port = 3001

import routes from './routes.js'
app.use(routes)

app.get('/', (req, res) => {
  res.send('Loja de produtos referente a categoria')
})

app.listen(port, () => {
  console.log(`Servidor rodando na Porta: ${port}`)
})