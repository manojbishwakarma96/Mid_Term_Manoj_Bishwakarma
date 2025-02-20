const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();

app.use(express.json());

// Connect to MongoDB

mongoose.connect(
  "mongodb+srv://manojbishwakarma88:manoj123@moviescluster.qzfcj.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
