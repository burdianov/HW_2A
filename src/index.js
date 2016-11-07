import express from 'express';
import cors from 'cors';

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/task2A', (req, res) => {
  const a = getNumber(req.query.a);
  const b = getNumber(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

function getNumber(number) {
  var result = 0;
  result = (number == null) ? 0 : number;
  if (!isNumeric(result)) {
    result = 0;
  }

  return +result;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
