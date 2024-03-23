// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the form
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <input type="text" name="productName" placeholder="Product Name">
      <input type="text" name="productSize" placeholder="Product Size">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle form submission
app.post('/add-product', (req, res) => {
  // Log the parsed form data
  console.log('Product Name:', req.body.productName);
  console.log('Product Size:', req.body.productSize);
  res.send('Product added successfully!');
});

// Redirect root path to the add-product route
app.get('/', (req, res) => {
  res.redirect('/add-product');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
