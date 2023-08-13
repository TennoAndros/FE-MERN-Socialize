import React from "react";
import "./FollowersCard.css";
import User from "../../User/User";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../api/UserRequest";

const FollowersCard = () => {
  const [users, setUsers] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUsers();
      setUsers(data);
      console.log(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>
      {users.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
