const express = require('express');
const app = express();
const port = 3001;

app.get('/api/myfunction', (req, res) => {
  // Your function logic here
  res.send('Hello from my function!');
});

app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back the index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
