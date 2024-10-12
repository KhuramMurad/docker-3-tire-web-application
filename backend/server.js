const express = require('express');
const app = express();
const port = 3000;

// Serve static files (if any, like HTML, JS) from the public directory
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the backend of the 3-tier application!');
});

// Data route
app.get('/data', (req, res) => {
  const data = {
    message: 'Hello from the backend!'
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

