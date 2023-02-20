import dbKnex from '../dados/db_config.js'

export const produtoIndex = async (req, res) => {
    try {
      const compra = await dbKnex.select("p.*", "c.nome as nomeCategoria")
        .from("produto as p")
        .innerJoin("categoria as c", { "p.categoria_id": "c.id" })
      res.status(200).json(compra)
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }
  
//========================================================================================================


