import { Router, json } from 'express'
import cors from 'cors'

import { produtoIndex } from './controllers/ProdutoController.js'

const router = Router()
router.use(json())
router.use(cors())

// define as rotas do cadastro dos produtos
router.get('/produto', produtoIndex)
      // .post('/produto', produtoStore)

export default router