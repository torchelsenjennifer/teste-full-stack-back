import { Router, json } from 'express'
import cors from 'cors'

import { produtoIndex, produtoStore } from './controllers/ProdutoController.js'
import { categoriaIndex, categoriaStore } from './controllers/CategoriaController.js'

const router = Router()
router.use(json())
router.use(cors())

// define as rotas do cadastro dos produtos
router.get('/produto', produtoIndex)
      .post('/produto', produtoStore)

// define as rotas do cadastro das categorias
router.get('/categoria', categoriaIndex)
      .post('/categoria', categoriaStore)

export default router