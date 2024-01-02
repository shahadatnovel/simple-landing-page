const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware to handle form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Serving static files (like HTML, CSS, images)
app.use(express.static('public'));

// POST route to handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`Submitted! Name: ${name}, Email: ${email}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
