import dbKnex from '../dados/db_config.js'

export const categoriaIndex = async (req, res) => {
    try {
      const categoria = await dbKnex.select("*").from("categoria")
      res.status(200).json(categoria)
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }
  
//========================================================================================================
  
export const categoriaStore = async (req, res) => {

    const {nome } = req.body
  
    if (!nome ) {
      res.status(400).json({ id: 0, msg: "Erro... informe nome da categoria!" })
      return
    }

    try {
      const novo = await dbKnex('categoria').insert({ nome })                    
      res.status(201).json({ id: novo[0], msg: "Ok! Categoria inserida com sucesso!" })
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }