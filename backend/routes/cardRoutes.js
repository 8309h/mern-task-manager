const express = require("express");

const router = express.Router();

const {
      createCard,
      getCards, updateCardList
} = require("../controllers/cardController");

router.post("/", createCard);

router.get("/:listId", getCards);
router.put("/:cardId", updateCardList);

module.exports = router;