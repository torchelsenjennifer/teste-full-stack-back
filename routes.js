import { Router, json } from 'express'
import cors from 'cors'

import { produtoDelete, produtoIndex, produtoStore, produtoUpdate } from './controllers/ProdutoController.js'
import { categoriaDelete, categoriaIndex, categoriaStore, categoriaUpdate } from './controllers/CategoriaController.js'

const router = Router()
router.use(json())
router.use(cors())

// define as rotas do cadastro dos produtos
router.get('/produto', produtoIndex)
      .post('/produto', produtoStore)
      .put('/produto/:id', produtoUpdate)
      .delete('/produto/:id', produtoDelete )
      

// define as rotas do cadastro das categorias
router.get('/categoria', categoriaIndex)
      .post('/categoria', categoriaStore)
      .put('/categoria/:id', categoriaUpdate)
      .delete('/categoria/:id', categoriaDelete)

export default router