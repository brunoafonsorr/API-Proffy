import express from 'express';

const app = express();
app.use(express.json())

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Querry Params: Paginação, filtros, organização

app.get('/', (req, res) => {
  return res.json({ mensage: 'Get Function' });
})

app.post('/', (req, res) => {
  return res.json({ mensage: 'Post Function' });
})

app.listen(3333);