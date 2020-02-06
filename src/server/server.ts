import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join('./', 'dist')));

app.get('/api', (req, res) => {
  res.send({ api: 'test' });
});

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join('./', 'dist')
  });
});

app.listen(3000, () => {
  console.log('server running');
});
