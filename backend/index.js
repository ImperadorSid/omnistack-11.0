const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Moisés Carvalho'
  });
});

app.listen(3000);
