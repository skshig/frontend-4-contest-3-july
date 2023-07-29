import React, { useState } from "react";
import "./style.css";


const Login = () => {
  let [userName, setuserName] = useState("");
  let [password, setPassword] = useState("");

  function handleClick(e) {
    if(userName === "" && password===""){
        alert("input fields cannot be empty");
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: userName,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://dummyjson.com/auth/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div className="login">
      <p>Welcome Back!</p>
      <h1>Sign in to your acoount</h1>

      <div className="input-fields">
        <label htmlFor="userName">Your userName</label>
        <input
          type="userName"
          id="userName"
          onChange={(e) => {
            setuserName(e.target.value);
          }}
          value={userName}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </div>
      {/* -----login button-----  */}
      <div className="btn">
        <button onClick={handleClick}>Continue</button>
      </div>
      <a href="#">Forget Your Password?</a>
      {userName && <p>{userName}</p>}
    </div>
  );
};

export default Login;
