//1
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//2
const app = express();
const port = process.env.PORT || 8000;

//3
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//4
let pessoas = [
  { id: 1, nome: 'Alice', email: 'alice@example.com' },
  { id: 2, nome: 'Bob', email: 'bob@example.com' },
  { id: 3, nome: 'Charlie', email: 'charlie@example.com' },
  { id: 4, nome: 'David', email: 'david@example.com' }
];

//5
app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});

//6
app.post('/pessoas', (req, res) => {
  const novaPessoa = req.body;
  novaPessoa.id = pessoas.length + 1;
  pessoas.push(novaPessoa);
  res.json({ mensagem: 'Pessoa adicionada com sucesso!', pessoa: novaPessoa });
});

//7
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

//8
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

//9
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
