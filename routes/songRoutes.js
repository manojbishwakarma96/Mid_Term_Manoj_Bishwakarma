const express = require("express");
const router = express.Router();
const { getAllSongs } = require("../controller/songsController");

// Route to get all songs
router.get("/getAllSongs", getAllSongs);

module.exports = router;
