const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static frontend files from "public" folder
app.use(express.static('public'));

// Example CRUD routes
app.post('/items', (req, res) => {
  res.json({ message: 'Item created', data: req.body });
});

app.get('/items', (req, res) => {
  res.json([{ id: 1, name: 'Sample Item' }]);
});

app.put('/items/:id', (req, res) => {
  res.json({ message: `Item ${req.params.id} updated`, data: req.body });
});

app.delete('/items/:id', (req, res) => {
  res.json({ message: `Item ${req.params.id} deleted` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
