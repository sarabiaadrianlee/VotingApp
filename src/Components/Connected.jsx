import React from "react";

const Connected = (props) => {
  // Function to format remaining time in hours, minutes, and seconds
  const formatRemainingTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const remainingSeconds = seconds % (3600 * 24);
    const hours = Math.floor(remainingSeconds / 3600);
    const remainingMinutes = remainingSeconds % 3600;
    const minutes = Math.floor(remainingMinutes / 60);
    const secs = Math.floor(remainingMinutes % 60);

    const formattedTime = (
      <span>
        {days} days
        <br /> {/* Add a line break */}
        <p>
          {" "}
          <b>Remaining Time : </b> {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {secs.toString().padStart(2, "0")}
        </p>
      </span>
    );

    return formattedTime;
  };

  return (
    <div className="dashboard-background">
      <div className="connected-grid-container">
        <div className="connected-header-container">
          <h1 className="connected-header">You are Connected to Metamask</h1>
        </div>
        <div className="connected-account-container">
          <p className="connected-account">
            <b>Metamask Account: </b>
            {props.account}
          </p>
        </div>
        <div className="remaining-time-container">
          <p className="remaining-time">
            <span className="remaining-days">Remaining Days:</span>{" "}
            {formatRemainingTime(props.remainingTime)}
          </p>
        </div>

        {/* Candidate table and Voting container */}
        <div className="candidates-container">
          {/* Candidate table */}
          <div className="candidates-content">
            <table id="myTable" className="candidates-table">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Candidate name</th>
                  <th>Candidate votes</th>
                </tr>
              </thead>
              <tbody>
                {props.candidates.map((candidate, index) => (
                  <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Voting container */}
        <div className="vote-container">
          {props.showButton ? (
            <b>
              <p className="connected-account">You have already voted!</p>
            </b>
          ) : (
            <div>
              <div className="input-container">
                <input
                  type="number"
                  className="input-field"
                  placeholder="Enter Candidate Index"
                  value={props.number}
                  onChange={props.handleNumberChange}
                />
              </div>

              <br />
              <button className="login-button" onClick={props.voteFunction}>
                Vote
              </button>
            </div>
          )}
        </div>

        {/* Additional containers/grids */}
      </div>
    </div>
  );
};

export default Connected;
