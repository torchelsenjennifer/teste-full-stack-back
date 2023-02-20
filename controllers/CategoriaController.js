import dbKnex from '../dados/db_config.js'

export const categoriaIndex = async (req, res) => {
    try {
      const categoria = await dbKnex.select("*").from("categoria")
      res.status(200).json(categoria)
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }
  