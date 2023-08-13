import React, { useState } from "react";
import "./RightArea.css";
import Home from "../../img/home.png";
import Notifications from "../../img/noti.png";
import Comments from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";

const RightArea = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightArea">
      <div className="NavIcons">
        <Link to="../home">
          {" "}
          <img src={Home} alt="Home" />
        </Link>
        <img src={Notifications} alt="Notifications" />
        <img src={Comments} alt="Comments" />
        <UilSetting />
      </div>
      <TrendCard />
      <button
        className="Button Right-Button"
        onClick={() => setModalOpened(true)}
      >
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightArea;
