const Sequelize = require('sequelize');

const todoList = new Sequelize('mysql://root:123456@localhost/todolist', {
  define: {
    timestamps: false
  }
})

// const db = new Sequelize('todolist', 'root', '123456', {
//   host: 'localhost',
//   dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
//   define: {
//     timestamps: false
//   }
// })

module.exports = todoList;