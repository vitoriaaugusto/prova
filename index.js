const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/fruta/:maca', (req, res) => {
    const maca = req.params.nome;
    const detalhesMaca = obterDetalhesDaMaca(maca);
  
    if (detalhesMaca) {
      res.json(detalhesMaca);
    } else {
      res.status(404).json({ mensagem: 'Fruta não encontrada' });
    }
  });
  
  function obterDetalhesDaMaca(maca) {
    const detalhesMaca = {
      nome: Maca,
      cor: 'vermelha',
      preco: 6.99
    };
  
    return detalhesMaca;
  }
  

  app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:3000`);
  });