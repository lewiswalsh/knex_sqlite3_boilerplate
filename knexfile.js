module.exports = {
  development : {
    client : 'sqlite3',
    connection : {
      filename : './cars.db3'
    },
    useNullAsDefault : true,
    migrations : {
      directory : './migrations'
    },
    seeds : {
      directory : './seeds'
    }
  }
}