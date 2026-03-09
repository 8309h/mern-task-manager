const Card = require("../models/Card");

exports.createCard = async (req, res) => {

      const { title, listId } = req.body;

      const card = await Card.create({
            title,
            listId
      });

      res.json(card);

};

exports.getCards = async (req, res) => {

      const cards = await Card.find({
            listId: req.params.listId
      });

      res.json(cards);

};


exports.updateCardList = async (req, res) => {

      try {

            const { listId } = req.body;

            const card = await Card.findByIdAndUpdate(
                  req.params.cardId,
                  { listId },
                  { new: true }
            );

            res.json({
                  success: true,
                  data: card
            });

      } catch (error) {

            res.status(500).json({
                  success: false,
                  message: error.message
            });

      }

};