const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'API',
    description: 'All RESTAPI LISTED HERE'
  },
  host: 'http://127.0.0.1:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];



swaggerAutogen()(outputFile, routes, doc);