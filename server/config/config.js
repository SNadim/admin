const config = {
  db: {
<<<<<<< HEAD
    host: "localhost",
    port: "3307",
    user: "root",
    password: "",
    database: "db_blog",
=======
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_DBNAME ,
>>>>>>> 78d2b2aed8c9d6a20d0d8aa4b9b52a3480222fa3
  },

  listPerPage: 10,
};

module.exports = config;
