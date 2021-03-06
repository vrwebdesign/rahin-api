'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class VideosSchema extends Schema {
  up() {
    this.create('videos', table => {
      table.increments();
      table.integer('level');
      table.string('label');
      table.json('fields');
      table.timestamps();
    });
  }

  down() {
    this.drop('videos');
  }
}

module.exports = VideosSchema;
