import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { authService } from "../../Services/auth.services";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  // Handle Change of Inputs
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  // Handle the Submission of the Form
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, email, password };

    authService
      .signup(requestBody)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <div>
          <div>
            <label>UserName:</label>
            <input type="text" name="name" value={name} onChange={handleName} />
          </div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default SignUpPage;
