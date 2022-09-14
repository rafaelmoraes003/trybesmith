<h1 align="left">Projeto Trybesmith</h1>

###

<p align="left">O objetivo deste projeto foi desenvolver uma API de uma loja de itens medievais usando TypeScript.<br><br>A API foi desenvolvida no modelo MSC de arquitetura e nela é possível realizar um CRUD nos endpoints através de um banco de dados MySQL.<br><br>A  principal finalidade do projeto era desenvolver habilidades em TypeScript, como tipagem de variáveis, parâmetros, funções e classes (POO).</p>

###

<h2 align="left">Tecnlogias utilizadas</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="52" alt="mysql logo"  />
</div>

###

<h2 align="left">Como utilizar a aplicação</h2>

###

Faça o clone da aplicação usando o comando `git clone`. Após isso, entre na pasta do projeto utilizando o comando `cd trybesmith` e rode o comando `npm install`. Após a instalação, utilize o comando `npm start` ou `npm run dev` e entre na porta 3000 de seu navegador.

###

<h2 align="left">Endpoints</h2>

###

A API possui 4 endpoints principais: `/users`, `/products`, `/orders` e `/login`.

Sobre o `/login`, ele possui 1 endpoint:

- `POST` ( / ) - Fazer login com um usuário já existente;

Sobre o `/users`, ele possui 1 endpoint:

- `POST` ( / ) - Criação de novo usuário;

Sobre o `/products`, ele possui 2 endpoints:

- `GET` ( / ) - Listar todos os posts do produtos;
- `POST` ( / ) - Criação de um novo produto;

Sobre o `/orders`, ele possui 2 endpoints:

- `GET` ( / ) - Listar todos os pedidos;
- `POST` ( / ) - Criação de um novo pedido;

`OBS:` O endpoint `POST` `/orders` necessita que o usuário faça login na rota `POST` `/login` para receber um token que deve ser colocado no header da requisição.
