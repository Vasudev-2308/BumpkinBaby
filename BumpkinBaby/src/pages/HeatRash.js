import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeatRash.css";

const HeatRash = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onScannerNavButtonClick = useCallback(() => {
    navigate("/scanner");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="heat-rash-div">
      <div className="line-div1" />
      <button className="home-nav-button1" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div4" />
        <img className="vector-icon1" alt="" src="../vector.svg" />
        <div className="home-div1">Home</div>
      </button>
      <button className="scanner-nav-button1" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div4" />
        <img className="scan-w-icon1" alt="" src="../scan-w@2x.png" />
        <div className="scanner-div1">Scanner(?)</div>
      </button>
      <button
        className="chatroom-nav-button1"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div4" />
        <img className="chat-b-icon" alt="" src="../chat-b@2x.png" />
        <b className="chat-room-b">Chat room</b>
      </button>
      <button className="profile-nav-button1" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div4" />
        <img className="profile-w-icon" alt="" src="../profile-w@2x.png" />
        <div className="profile-div1">Profile</div>
      </button>
      <div className="cause-heat-rash-happens-when-s">
        <p className="cause-p">
          <b>Cause</b>
        </p>
        <p className="cause-p">
          <span>
            Heat rash happens when sweat ducts in the skin are blocked and sweat
            gets trapped, creating fluid-filled bumps on the skin.
          </span>
        </p>
        <p className="cause-p">
          <b>&nbsp;</b>
        </p>
        <p className="cause-p">
          <b>Treatment</b>
        </p>
        <p className="cause-p">
          <span>
            You can cool the skin by removing extra layers of clothing or by
            moving to a cooled indoor space.
          </span>
        </p>
        <p className="cause-p">
          <span>
            Gently dab a cool, wet cloth on the rash to relieve tenderness and
            bring down the skin temperature.
          </span>
        </p>
        <p className="cause-p">
          <span>
            You can smooth some over-the-counter (OTC) 1 percent hydrocortisone
            cream onto the bumpy area.
          </span>
        </p>
        <p className="cause-p">
          <span>
            Since steroids can have side effects, discuss their use with your
            child’s doctor beforehand.
          </span>
        </p>
        <p className="cause-p">
          <span>
            Avoid hydrocortisone ointments that contain petroleum or mineral
            oil.
          </span>
        </p>
        <p className="cause-p">
          <span>
            If your child has a more severe type of heat rash, calamine lotion
            can help stop any itching.
          </span>
        </p>
      </div>
      <button className="button">
        <div className="rectangle-div8" />
        <div className="log-in-div">Play game</div>
      </button>
      <div className="heat-rash-div1">Heat Rash</div>
      <div className="logo-div1">
        <div className="baby-got-rash1">Bumpkin baby</div>
        <img className="group-icon1" alt="" src="../group1.svg" />
      </div>
    </div>
  );
};

export default HeatRash;
