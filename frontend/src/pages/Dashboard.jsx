import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchBoards } from "../redux/slices/boardSlice";

function Dashboard() {

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const { boards, loading } = useSelector(
            (state) => state.boards
      );

      useEffect(() => {

            dispatch(fetchBoards());

      }, [dispatch]);

      return (

            <div>

                  <h2>Your Boards</h2>

                  {loading && <p>Loading...</p>}

                  {!loading && boards.length === 0 && (
                        <p>No boards found</p>
                  )}

                  <div style={{ display: "flex", gap: "20px" }}>

                        {boards.map((board) => (

                              <div
                                    key={board._id}
                                    style={{
                                          padding: "20px",
                                          border: "1px solid #ccc",
                                          cursor: "pointer"
                                    }}
                                    onClick={() => navigate(`/board/${board._id}`)}
                              >
                                    {board.title}
                              </div>

                        ))}

                  </div>

            </div>

      );

}

export default Dashboard;