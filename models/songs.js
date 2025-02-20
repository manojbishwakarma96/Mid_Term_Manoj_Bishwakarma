const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songId: { type: Number, unique: true },
  artistData: {
    artistId: { type: Number },
    name: { type: String },
    country: { type: String },
  },
  releaseDate: { type: String },
  songTitle: { type: String },
  genre: { type: String },
});
const Song = mongoose.model("Song", songSchema);

module.exports = Song;
