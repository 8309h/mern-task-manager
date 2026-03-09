const List = require("../models/List");

exports.createList = async (req, res) => {

      const { title, boardId } = req.body;

      const list = await List.create({
            title,
            boardId
      });

      res.json(list);

};

exports.getLists = async (req, res) => {

      const lists = await List.find({
            boardId: req.params.boardId
      });

      res.json(lists);

};