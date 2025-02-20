const express = require("express");
const router = express.Router();
const { getAllSongs, getSongById } = require("../controller/songsController");

// Route to get all songs
router.get("/getAllSongs", getAllSongs);

// Route to get song by songId
router.get("/getSongById/:songId", getSongById);

module.exports = router;
