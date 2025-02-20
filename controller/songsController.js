const { get } = require("mongoose");
const Song = require("../models/songs");

//get all songs
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "error getting the songs" + error });
  }
};

module.exports = {
  getAllSongs,
};
