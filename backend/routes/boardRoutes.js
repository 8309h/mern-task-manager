const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
      createBoard,
      getBoards,
      deleteBoard
} = require("../controllers/boardController");

router.post("/", authMiddleware, createBoard);
router.get("/", authMiddleware, getBoards);
router.delete("/:id", authMiddleware, deleteBoard);

module.exports = router;