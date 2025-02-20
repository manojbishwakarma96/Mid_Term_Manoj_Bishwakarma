const express = require("express");
const router = express.Router();
const { getAllSongs, getSongById } = require("../controller/songsController");

// Route to get all songs
router.get("/getAllSongs", getAllSongs);

// Route to get song by songId
router.get("/getSongById/:songId", getSongById);

//Route to get song by artist
router.get("getSongByArtist/:artist.name", ge);

module.exports = router;
