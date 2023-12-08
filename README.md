# CRUD_API
aprendizado CRUD API

Em resumo, este código cria uma aplicação Express simples que fornece operações CRUD (Create, Read, Update, Delete) para um conjunto de pessoas, utilizando um array como fonte de dados. As operações são expostas através de diferentes rotas HTTP.

1-Importando módulos:

'express' é um framework web para o Node.js.
'body-parser' é um middleware para processar o corpo das requisições HTTP.
'path' é um módulo para lidar com arquivos e diretórios.

2-Criando uma instância do Express e definindo a porta:

O código cria uma instância do Express chamada app.
A porta é definida como a variável de ambiente PORT ou 8000 se a variável de ambiente não estiver definida.

3-Configurando middlewares:

body-parser.json() configura o middleware para processar dados JSON nas requisições.
Configura o middleware express.static para servir arquivos estáticos, como HTML, CSS, a partir do diretório "public".

4-Definindo um array de pessoas:

Um array chamado pessoas é definido com objetos que representam indivíduos.

5-Definindo uma rota GET para /pessoas:

Quando uma requisição GET é feita, a aplicação responde com o array pessoas em formato JSON.

6-Definindo uma rota POST para /pessoas:

Quando uma requisição POST é feita para /pessoas, a aplicação adiciona uma nova pessoa ao array e responde com uma mensagem JSON.

7-Definindo uma rota PUT:

Quando uma requisição PUT é feita para /pessoas/:id, a aplicação atualiza a pessoa com o ID fornecido e responde com uma mensagem JSON.

8-Definindo uma rota DELETE:

Quando uma requisição DELETE é feita para /pessoas/:id, a aplicação exclui a pessoa com o ID fornecido e responde com uma mensagem JSON.

9-Iniciando o servidor:

A aplicação inicia um servidor na porta especificada (port) e imprime uma mensagem no console quando o servidor está rodando.







