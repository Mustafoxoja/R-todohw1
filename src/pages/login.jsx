import React from "react";
import { useNavigate } from "react-router";

const LoginComp = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/home");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 400,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          style={{ padding: "5px 10px" }}
          type="text"
          placeholder="email"
        />
        <input
          style={{ padding: "5px 10px", margin: "20px 0" }}
          type="password"
          placeholder="password"
        />

        <button onClick={handlelogin}>Sign in</button>
      </div>
    </div>
  );
};

export default LoginComp;
