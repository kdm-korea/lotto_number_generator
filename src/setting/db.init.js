/* eslint-disable global-require */
import databaseConfig from '../config/database.config';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(databaseConfig);

const baseDir = path.join(__dirname, '../', './models/');
const models = Object.assign(
  {},
  ...fs
    .readdirSync(baseDir)
    .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
    .map((file) => {
      // eslint-disable-next-line import/no-dynamic-require
      const model = require(path.join(baseDir, file)).default;

      return {
        [model.name]: model.init(sequelize),
      };
    })
);

Object.keys(models).forEach((model) => {
  if (models[model].associate) {
    models[model].associate(models);
  }
});

export { sequelize, models };
