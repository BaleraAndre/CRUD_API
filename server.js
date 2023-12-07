const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let pessoas = [
  { id: 1, nome: 'Alice', email: 'alice@example.com' },
  { id: 2, nome: 'Bob', email: 'bob@example.com' },
  { id: 3, nome: 'Charlie', email: 'charlie@example.com' },
  { id: 4, nome: 'David', email: 'david@example.com' }
];

app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});

app.post('/pessoas', (req, res) => {
  const novaPessoa = req.body;
  novaPessoa.id = pessoas.length + 1;
  pessoas.push(novaPessoa);
  res.json({ mensagem: 'Pessoa adicionada com sucesso!', pessoa: novaPessoa });
});

app.put('/pessoas/:id', (req, res) => {
  const pessoaId = parseInt(req.params.id);
  const body = req.body;

  const index = pessoas.findIndex((pessoa) => pessoa.id === pessoaId);

  if (index !== -1) {
    pessoas[index] = { ...pessoas[index], ...body };
    res.json({ mensagem: 'Pessoa atualizada com sucesso!', pessoa: pessoas[index] });
  } else {
    res.status(404).json({ mensagem: 'Pessoa não encontrada' });
  }
});

app.delete('/pessoas/:id', (req, res) => {
  const pessoaId = parseInt(req.params.id);

  const index = pessoas.findIndex((pessoa) => pessoa.id === pessoaId);

  if (index !== -1) {
    const pessoaExcluida = pessoas.splice(index, 1);
    res.json({ mensagem: 'Pessoa excluída com sucesso!', pessoa: pessoaExcluida });
  } else {
    res.status(404).json({ mensagem: 'Pessoa não encontrada' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});