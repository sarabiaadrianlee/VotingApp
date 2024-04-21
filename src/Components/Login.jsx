import React from "react";

const Login = (props) => {
  return (
    <div className="background-container">
      <div className="login-container">
        <h1 className="welcome-message">VOTE NOW</h1>
        <h2>vote for our lives, your view, your vote </h2>
        <button className="login-button" onClick={props.connectWallet}>
          Connect Wallet
        </button>
      </div>
      <div className="image-container">
        <img
          src="https://i0.wp.com/www.culturetype.com/wp-content/uploads/2014/06/Barbara-Jones-Hogu-UNITE.jpg?ssl=1" // Replace with your image URL
          alt="Description of the image"
          className="background-image"
        />
      </div>
    </div>
  );
};

export default Login;
