<h1 align="left">Trybesmith</h1>

###

<p align="left">The objective of this project was to develop an API for a medieval items store using TypeScript.<br><br>The API was developed in the MSC model of architecture and it is possible to perform a CRUD on the endpoints through a MySQL database.< br><br>The main purpose of the project was to develop skills in TypeScript, such as typing variables, parameters, functions and classes (OOP).</p>

###

<h2 align="left">Technologies used</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50" width="62" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" width="62" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="50" width="62" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="50" width="62" alt="mysql logo"  />
</div>

###

<h2 align="left">How to use the application</h2>

###

Clone the application using the `git clone` command. After that, enter the project folder using the `cd trybesmith` command and run the `npm install` command. After installation, use the command `npm start` or `npm run dev` and enter port 3000 of your browser.

###

<h2 align="left">Endpoints</h2>

###

<h2 align="left">Login</h2>

| Method | Functionality | URL |
|---|---|---|
| `POST` | Login | http://localhost:3001/login |

<h4>The object to login must have the following format:</h4>

```JavaScript
{
  username: "username",
  password: "12345678"
}
```

###

<h2 align="left">User</h2>

| Method | Functionality | URL |
|---|---|---|
| `POST` | Create new user | http://localhost:3001/users |

<h4>The object to create a new user must have the following format:</h4>

```JavaScript
{
  username: "username",
  classe: "swordsman",
  level: 10,
  password: "12345678"
}
```

###

<h2 align="left">Products</h2>

| Method | Functionality | URL |
|---|---|---|
| `GET` | List all products | http://localhost:3001/products |
| `POST` | Create new products | http://localhost:3001/products |

<h4>The object to create a new product must have the following format:</h4>

```JavaScript
{
  name: "Wood table",
  amount: 15
}
```

###

<h2 align="left">Orders</h2>

| Method | Functionality | URL |
|---|---|---|
| `GET` | List all orders | http://localhost:3001/orders |
| `POST` | Create new order | http://localhost:3001/orders |

<h4>The object to create a new order must have the following format:</h4>

```JavaScript
{
  productsIds: [1]
}
```

###

<h2 align="left">Comments</h2>

1. The `POST` endpoint `/orders` requires the user to login in the `POST` `/login` route to receive a token that must be placed in the request header.

2. The database is not created. To be able to use it, you need to create an `.env` file and put your MySQL credentials based on the `./src/models/connection.ts` file. To populate the database, you can use the `Trybesmith.sql` file query.
