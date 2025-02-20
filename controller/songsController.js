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

// Get song by songId
// Get song by songId
const getSongById = async (req, res) => {
  const { songId } = req.params;

  try {
    const song = await Song.findOne({ songId });

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    return res.json(song);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error getting the song by songId: ${error}` });
  }
};

module.exports = {
  getAllSongs,
  getSongById,
};
