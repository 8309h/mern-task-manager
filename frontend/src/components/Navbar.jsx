import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../redux/slices/authSlice";

import "./Navbar.css";

function Navbar() {

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleLogout = () => {

            dispatch(logout());
            navigate("/");

      };

      return (

            <nav className="navbar">

                  <div
                        className="logo"
                        onClick={() => navigate("/dashboard")}
                  >
                        TaskBoard
                  </div>

                  <div className="nav-right">

                        <button
                              className="logout-btn"
                              onClick={handleLogout}
                        >
                              Logout
                        </button>

                  </div>

            </nav>

      );

}

export default Navbar;