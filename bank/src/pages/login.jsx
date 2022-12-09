// get a list of all users
import { users } from "../data/users";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  // this helps us send the user to a different page
  // if they are logged in
  const navigate = useNavigate();

  useEffect(() => {
    // if the user is already logged in, we navigate to the dashboard
    if (user) {
      navigate("/dashboard");
    }

    // reads the user from localStorage
    const localStorageUser = localStorage.getItem("user");

    // if the user exists, we set the user state and navigate to the dashboard
    if (localStorageUser) {
      setUser(JSON.parse(localStorageUser));
      navigate("/dashboard");
    }
  }, []);

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handles the form submission and authenticates the user
  const handleSubmit = (e) => {
    // avoid the default behaviour of the form
    // we're in react now
    e.preventDefault();

    // if the user has entered an empty email or password
    // we set the error state and return
    if (!formData.email || !formData.password) {
        setError("Please enter your email and password.");
        return;
    }

    // user can either login with their email or username
    // so we check if the email or username exists in the database
    const user = users.find(
      (user) =>
        user.email === formData.email || user.username === formData.email
    );

    // if the user exists, we check if the password is correct
    if (user) {
      if (user.password === formData.password) {
        // if the password is correct, we set the user state
        // and navigate to the dashboard
        setUser(user);
        // we also set the user in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        // if the password is incorrect, we set the error state
        setError("Username or password is incorrect.");
      }
    } else {
      // if the user doesn't exist, we set the error state
      setError("Username or password is incorrect.");
    }
  };

  return (
    <>
      {/* container */}
      <div className="container py-5">
        {/* create a container for the form with a width of 400px */}
        <div className="container w-25 p-3 rounded border border-secondary bg-light">
          {/* form */}
          <form onSubmit={handleSubmit}>
            {/* title */}
            <h3 className="text-center mt-3 mb-5">Login</h3>

            {/* error message */}
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                <small className="text-center">{error}</small>
              </div>
            )}

            {/* email input */}
            <div className="form-group">
              <label htmlFor="email">Email Address / Username</label>
              <input
                type="text"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="john@gmail.com"
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* password input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            {/* submit button, fullWidth */}
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>

            
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
