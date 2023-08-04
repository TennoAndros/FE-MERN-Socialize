import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="Info">
        <span>Status </span>
        <span>
          <b>Single</b>
        </span>
      </div>
      <div className="Info">
        <span>Location </span>
        <span>
          <b>Greece</b>
        </span>
      </div>
      <div className="Info">
        <span>Works at </span>
        <span>
          <b>Making himself a Developer</b>
        </span>
      </div>
      <div className="Info">
        <span>Hobbies </span>
        <span>
          <b>Reading fantasy novels, Gaming, TV-Shows, Anime, D&D player</b>
        </span>
      </div>
      <button className="Button Logout-Button">Logout</button>
    </div>
  );
};

export default InfoCard;
