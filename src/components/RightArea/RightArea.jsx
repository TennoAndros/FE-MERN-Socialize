import React, { useState } from "react";
import "./RightArea.css";
import Home from "../../img/home.png";
import Notifications from "../../img/noti.png";
import Comments from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightArea = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightArea">
      <div className="NavIcons">
        <img src={Home} alt="Home" />
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
