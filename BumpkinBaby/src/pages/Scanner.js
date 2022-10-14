import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Scanner.css";

const Scanner = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="scanner-div6">
      <div className="line-div6" />
      <button className="home-nav-button6" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div27" />
        <img className="vector-icon6" alt="" src="../vector.svg" />
        <div className="home-div6">Home</div>
      </button>
      <button className="scanner-nav-button6">
        <div className="rectangle-div27" />
        <img className="scan-b-icon" alt="" src="../scan-b@2x.png" />
        <b className="scanner-b">Scanner(?)</b>
      </button>
      <button
        className="chatroom-nav-button6"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div27" />
        <img className="chat-w-icon1" alt="" src="../chat-w@2x.png" />
        <div className="chat-room-div1">Chat room</div>
      </button>
      <button className="profile-nav-button6" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div27" />
        <img className="profile-w-icon5" alt="" src="../profile-w@2x.png" />
        <div className="profile-div6">Profile</div>
      </button>
      <button className="image-16-button" />
      <button className="image-17-button" />
      <div className="choose-any-method-of-scanning">
        Choose any method of scanning
      </div>
      <div className="logo-div6">
        <div className="baby-got-rash6">Bumpkin baby</div>
        <img className="group-icon6" alt="" src="../group6.svg" />
      </div>
    </div>
  );
};

export default Scanner;
