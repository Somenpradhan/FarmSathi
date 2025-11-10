import Background from "../Assets/Background.jpg";
import "../Styles/index.css";

import { FcGoogle } from "react-icons/fc";

function IndexPage() {
  return (
    <div className="indexContainer">
      <img src={Background} alt="Background" className="backgroundImage" />
      <div className="overlayInfo">
        <p>New path in agriculture,</p>
        <p>new hope for development</p>
        <p>A unified platform for all farmers</p>
        <div className="googleLogin">
          <button>
            <FcGoogle /> Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
