const app = require('./app');

app.get('/', function(req, res, next) {
  res.json({
    status: 'Success!'
  });
});

app.listen(8080, function() {
  console.log('Listening!');
});
