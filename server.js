const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();

app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
