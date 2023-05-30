/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    {
      id               : 1,
      vin              : "qwjiofofh83fh38f8f",
      make             : "1949 Oldsmobile",
      model            : "88",
      mileage          : 5678,
      transmissionType : "manual",
      titleStatus      : "clean"
    },
    {
      id               : 2,
      vin              : "fuwfhhwhf8w8fh9fh8",
      make             : "1970 Plymouth",
      model            : "Hemi Superbird",
      mileage          : 2234,
      transmissionType : "automatic",
      titleStatus      : "clean"
    },
    {
      id               : 3,
      vin              : "e3wr8fhisueuesfush",
      make             : "1971 Ford",
      model            : "Torino GT Convertible",
      mileage          : 9874,
      transmissionType : "automatic",
      titleStatus      : "clean"
    }
  ]);
};
