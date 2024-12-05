import React from "react";
import "./Login.scss";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner8 } from "react-icons/im";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    //validate

    setIsLoading(true);
    //submit api
    let data = await postLogin(email, password);
    console.log("data: ", data, +data.EC !== 0, data.EC);

    if (data && +data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }

    if (data && +data.EC !== 0) {
      setIsLoading(false);
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet? </span>
        <button onClick={() => navigate("/register")}>Sign up</button>
      </div>

      <div className="title col-4 mx-auto">Hello</div>

      <div className="welcome col-4 mx-auto">Hello, who's this?</div>

      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <span className="forgot-password">Forgot password?</span>

        <div>
          <button
            className="btn-submit"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <ImSpinner8 className="loader-icon" />
                <span>Loading...</span>
              </>
            ) : (
              <span>Login</span>
            )}
          </button>
        </div>

        <div
          className="text-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="back"> &#60;&#60; Go to Home Page </span>
        </div>
      </div>
    </div>
  );
}
