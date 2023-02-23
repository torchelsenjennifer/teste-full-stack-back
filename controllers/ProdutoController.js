import dbKnex from "../dados/db_config.js";

//READ
export const produtoIndex = async (req, res) => {
  try {
    const compra = await dbKnex
      .select("p.*", "c.nome as categoria")
      .from("produto as p")
      .innerJoin("categoria as c", { "p.categoria_id": "c.id" });
    res.status(200).json(compra);
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message });
  }
};

//========================================================================================================
//CREATE
export const produtoStore = async (req, res) => {
  const { nome, descricao, preco, categoria_id, foto } = req.body;

  if (!nome || !descricao || !preco || !categoria_id || !foto) {
    res
      .status(400)
      .json({
        id: 0,
        msg: "Erro... informe nome, descrição, foto, preço e id da categoria",
      });
    return;
  }

  try {
    const novo = await dbKnex("produto").insert({
      nome,
      descricao,
      preco,
      categoria_id,
      foto
    });
    res
      .status(201)
      .json({ id: novo[0], msg: "Ok! Produto inserido com sucesso" });
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message });
  }
};

//========================================================================================================
//UPDATE
export const produtoUpdate = async (req, res) => {
  const { id } = req.params;

  const { nome, descricao, preco, categoria_id, foto } = req.body;

  if (!nome || !descricao || !preco || !categoria_id || !foto) {
    res.status(400).json({
      id: 0,
      msg: "Erro... informe nome, descricao, preço, foto e id da categoria!",
    });
    return;
  }

  try {
    await dbKnex("produto").where({ id }).update({ nome, descricao, preco, foto, categoria_id });

    res.status(200).json({ id, msg: "Ok! Alterado com sucesso" });
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message });
  }
};

//========================================================================================================
//DELETE
export const produtoDelete = async (req, res) => {

  const { id } = req.params;

  try {
    await dbKnex("produto").where({ id }).del()
    res.status(200).json({ id, msg: "Ok! Produto excluído com sucesso!" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

