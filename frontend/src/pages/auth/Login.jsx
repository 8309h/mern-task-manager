import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import API from "../../services/api";
import { loginSuccess } from "../../redux/slices/authSlice";

import "./Auth.css";

function Login() {

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const [form, setForm] = useState({
            email: "",
            password: ""
      });

      const [loading, setLoading] = useState(false);
      const [error, setError] = useState("");

      const handleChange = (e) => {
            setForm({
                  ...form,
                  [e.target.name]: e.target.value
            });
      };

      const handleSubmit = async (e) => {

            e.preventDefault();

            try {

                  setLoading(true);
                  setError("");

                  console.log("Sending login request:", form);

                  const res = await API.post("/auth/login", form);

                  console.log("Login response:", res.data);

                  /* Save JWT token */

                  localStorage.setItem("token", res.data.token);

                  /* Save user in redux */

                  dispatch(loginSuccess(res.data));

                  /* Navigate to dashboard */

                  navigate("/dashboard");

            } catch (err) {

                  console.error("Login error:", err);

                  setError(
                        err.response?.data?.message || "Login failed"
                  );

            } finally {

                  setLoading(false);

            }

      };

      return (

            <div className="auth-container">

                  <div className="auth-card">

                        <h2>Login</h2>

                        {error && <p className="error">{error}</p>}

                        <form onSubmit={handleSubmit}>

                              <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                              />

                              <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={form.password}
                                    onChange={handleChange}
                              />

                              <button type="submit">
                                    {loading ? "Logging in..." : "Login"}
                              </button>

                        </form>

                        <p className="auth-footer">
                              Don't have an account?
                              <Link to="/register"> Register</Link>
                        </p>

                  </div>

            </div>

      );

}

export default Login;