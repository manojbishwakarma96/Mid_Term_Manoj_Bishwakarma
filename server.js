const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const Song = require("./models/songs");
const PORT = 3000;
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://manojbishwakarma88:manoj123@songscluster.foh72.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");

    // Read songs.json file
    const songsData = JSON.parse(fs.readFileSync("songs.json", "utf-8"));

    // Insert songs into the database
    Song.insertMany(songsData)
      .then(() => {
        console.log("Songs imported successfully");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("Error importing songs:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
