const express = require("express");

const router = express.Router();

const {
      createList,
      getLists
} = require("../controllers/listController");

router.post("/", createList);

router.get("/:boardId", getLists);

module.exports = router;