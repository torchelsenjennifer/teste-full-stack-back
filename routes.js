import { Router, json } from 'express'
import cors from 'cors'

import { produtoIndex, produtoStore, produtoUpdate } from './controllers/ProdutoController.js'
import { categoriaIndex, categoriaStore, categoriaUpdate } from './controllers/CategoriaController.js'

const router = Router()
router.use(json())
router.use(cors())

// define as rotas do cadastro dos produtos
router.get('/produto', produtoIndex)
      .post('/produto', produtoStore)
      .put('/produto/:id', produtoUpdate )

// define as rotas do cadastro das categorias
router.get('/categoria', categoriaIndex)
      .post('/categoria', categoriaStore)
      .put('/categoria/:id', categoriaUpdate)

export default router