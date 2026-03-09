import { useNavigate } from "react-router-dom";

function BoardCard({ board }) {

      const navigate = useNavigate();

      return (

            <div
                  className="board-card"
                  onClick={() => navigate(`/board/${board._id}`)}
            >

                  <h3>{board.title}</h3>

            </div>

      );
}

export default BoardCard;