import React, { useState, useEffect } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as UserApi from "../../api/UserRequest";
import { logout } from "../../actions/AuthAction";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user._id]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen className="UilPen" onClick={() => setModalOpened(true)} />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="Info">
        <span>Status </span>
        <span>
          <b>{profileUser.relationshipStatus}</b>
        </span>
      </div>
      <div className="Info">
        <span>Location </span>
        <span>
          <b>{profileUser.livesIn}</b>
        </span>
      </div>
      <div className="Info">
        <span>Works at </span>
        <span>
          <b>{profileUser.worksAt}</b>
        </span>
      </div>
      <div className="Info">
        <span>Hobbies </span>
        <span>
          <b>{profileUser.hobbies}</b>
        </span>
      </div>
      <button className="Button Logout-Button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
