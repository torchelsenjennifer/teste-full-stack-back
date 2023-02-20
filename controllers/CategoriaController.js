import dbKnex from "../dados/db_config.js";

//READ
export const categoriaIndex = async (req, res) => {
  try {
    const categoria = await dbKnex.select("*").from("categoria");
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message });
  }
};

//========================================================================================================
//CREATE
export const categoriaStore = async (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    res.status(400).json({ id: 0, msg: "Erro... informe nome da categoria!" });
    return;
  }

  try {
    const novo = await dbKnex("categoria").insert({ nome });
    res
      .status(201)
      .json({ id: novo[0], msg: "Ok! Categoria inserida com sucesso!" });
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message });
  }
};

//========================================================================================================
//UPDATE
export const categoriaUpdate = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  if (!nome) {
    res.status(400).json({
      id: 0,
      msg: "Erro... informe nome da categoria!",
    });
    return;
  }

  try {
    await dbKnex("categoria").where({ id }).update({ nome });

    res.status(200).json({ id, msg: "Ok! Alterado com sucesso" });
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message });
  }
};
