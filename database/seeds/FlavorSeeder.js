'use strict'

/*
|--------------------------------------------------------------------------
| PizzaFlavorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Flavor = use('App/Models/Flavor')

class FlavorSeeder {
  async run () {
    await Flavor.createMany([
      {
        description: 'calabresa',
        additional_minutes: 0
      },
      {
        description: 'marguerita',
        additional_minutes: 0
      },
      {
        description: 'portuguesa',
        additional_minutes: 5
      }
    ])
  }
}

module.exports = FlavorSeeder
