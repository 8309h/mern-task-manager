import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import API from "../../services/api";
import { loginSuccess } from "../../redux/slices/authSlice";

import "./Auth.css";

function Register() {

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const [form, setForm] = useState({
            name: "",
            email: "",
            password: ""
      });

      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);

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

                  const res = await API.post("/auth/register", form);

                  dispatch(loginSuccess(res.data));

                  navigate("/dashboard");

            } catch (err) {

                  setError(
                        err.response?.data?.message || "Registration failed"
                  );

            } finally {

                  setLoading(false);

            }

      };

      return (

            <div className="auth-container">

                  <div className="auth-card">

                        <h2>Create Account</h2>

                        {error && <p className="error">{error}</p>}

                        <form onSubmit={handleSubmit}>

                              <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                              />

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
                                    minLength="6"
                                    value={form.password}
                                    onChange={handleChange}
                              />

                              <button type="submit">

                                    {loading ? "Creating Account..." : "Register"}

                              </button>

                        </form>

                        <p className="auth-footer">

                              Already have an account?
                              <Link to="/"> Login</Link>

                        </p>

                  </div>

            </div>

      );

}

export default Register;