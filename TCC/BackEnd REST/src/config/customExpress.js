const express = require('express');
const cors = require('cors');
const consign = require('consign');

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  consign()
    .include('src/routes.js')
    .into(app);

    return app;
}