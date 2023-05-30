// import knex from 'knex';
const knex = require('knex');
const config = require('./knexfile');

const DB = knex(config.development);

async function getCars(){
  const cars = await DB('cars');
  console.log(cars);
}

getCars();