const Board = require("../models/Board");

// Create Board
exports.createBoard = async (req, res) => {
      try {
            const board = await Board.create({
                  title: req.body.title,
                  owner: req.user.id
            });

            return res.status(201).json({
                  success: true,
                  message: "Board created successfully",
                  data: board
            });

      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Failed to create board",
                  error: error.message
            });
      }
};


// Get All Boards
exports.getBoards = async (req, res) => {
      try {
            const boards = await Board.find({
                  owner: req.user.id
            });

            return res.status(200).json({
                  success: true,
                  message: "Boards fetched successfully",
                  count: boards.length,
                  data: boards
            });

      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Failed to fetch boards",
                  error: error.message
            });
      }
};


// Delete Board
exports.deleteBoard = async (req, res) => {
      try {
            const board = await Board.findById(req.params.id);

            if (!board) {
                  return res.status(404).json({
                        success: false,
                        message: "Board not found"
                  });
            }

            await Board.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                  success: true,
                  message: "Board deleted successfully"
            });

      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Failed to delete board",
                  error: error.message
            });
      }
};