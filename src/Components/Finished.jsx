import React from "react";

const Finished = (props) => {
  return (
    <div className="background-container">
      <div className="login-container">
        <h1 className="welcome-message">Votings are now Finished</h1>
      </div>
      <div className="image-container">
        <img
          src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20242/vote_funhouse2.gif" // Replace with your image URL
          alt="Description of the image"
          className="background-image"
        />
      </div>
    </div>
  );
};

export default Finished;
