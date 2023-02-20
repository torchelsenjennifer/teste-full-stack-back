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

export const produtoStore = async (req, res) => {

  const { nome, descricao, preco, categoria_id } = req.body

  if (!nome || !descricao || !preco || !categoria_id) {
    res.status(400).json({ id: 0, msg: "Erro... informe nome, descrição, preço e número da categoria" })
    return
  }

  try {
    const novo = await dbKnex('produto').insert({ nome, descricao, preco, categoria_id })                    
    res.status(201).json({ id: novo[0], msg: "Ok! Produto inserido com sucesso" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//========================================================================================================

