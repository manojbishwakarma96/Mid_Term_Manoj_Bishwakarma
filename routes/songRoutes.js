const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  getSongById,
  getSongsByArtists,
} = require("../controller/songsController");

// Route to get all songs
router.get("/getAllSongs", getAllSongs);

// Route to get song by songId
router.get("/getSongById/:songId", getSongById);

//Route to get song by artist
router.get("/getSongsByArtist/:artistName", getSongsByArtists);

module.exports = router;
