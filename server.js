const app = require('./app');

// zmienna środowiskowa do definiowania portu nasłuchiwania
app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
  console.log(`Listen on ${server.address().port}`);
});
