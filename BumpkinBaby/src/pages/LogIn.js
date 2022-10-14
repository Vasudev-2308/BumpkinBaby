import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="log-in-div6">
      <div className="rectangle-div44" />
      <div className="click-here-div">Click here</div>
      <div className="dont-have-an-account">Don’t have an account?</div>
      <img className="rectangle-icon2" alt="" src="../rectangle@2x.png" />
      <div className="log-in-div7">Log in</div>
      <input
        className="component-input3"
        type="text"
        placeholder="Username"
        minLength={5}
        required
      />
      <input
        className="component-input4"
        type="text"
        placeholder="Password"
        minLength={10}
        required
      />
      <button className="button6" onClick={onButtonClick}>
        <div className="rectangle-div45" />
        <div className="log-in-div8">Log in</div>
      </button>
      <div className="logo-div10">
        <div className="baby-got-rash10">Bumpkin baby</div>
        <img className="group-icon10" alt="" src="../group10.svg" />
      </div>
    </div>
  );
};

export default LogIn;
