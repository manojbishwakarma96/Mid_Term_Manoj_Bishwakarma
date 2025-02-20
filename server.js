const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const cors = require("cors");

const Song = require("./models/songs");
const songRoutes = require("./routes/songRoutes");

const PORT = 3000;
const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Use song routes
app.use("/api", songRoutes);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://manojbishwakarma88:manoj123@songscluster.foh72.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");

    // Read songs.json file
    const songsData = JSON.parse(fs.readFileSync("songs.json", "utf-8"));

    // Check if songs already exist in the database
    Song.countDocuments()
      .then((count) => {
        if (count > 0) {
          console.log(
            "Songs already exist in the database. Skipping insertion."
          );
        } else {
          // Insert songs into the database if not already present
          Song.insertMany(songsData)
            .then(() => {
              console.log("Songs imported successfully");
            })
            .catch((err) => {
              console.error("Error importing songs:", err);
            });
        }
      })
      .catch((err) => {
        console.error("Error checking songs:", err);
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
