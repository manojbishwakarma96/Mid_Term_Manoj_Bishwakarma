const express = require("express");
const router = express.Router();
const { getAllSongs } = require("../controllers/songController");

// Route to get all songs
router.get("/getAllSongs", getAllSongs);

module.exports = router;
