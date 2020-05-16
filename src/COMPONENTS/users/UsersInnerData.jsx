import React, { useState } from "react";
import userPhoto from "../../assets/photoes/userPhoto.jpg";
import style from "./users.module.css";

const UsersInnerData = (props) => {
  const [follow, setFollow] = useState(true);
  const { name, username, email, lat, street, suite, city, zipcode } = props;
  return (
    <div className={style.usersWraper}>
      <img src={userPhoto} alt="userPhotoe" className={style.userPhoto} />
      {follow ? (
        <span>
          <button
            className={style.followButton}
            onClick={() => {
              setFollow(false);
            }}
          >
            Unfollow
          </button>
        </span>
      ) : (
        <span>
          <button
            className={style.unFollowButton}
            onClick={() => {
              setFollow(true);
            }}
          >
            Follow
          </button>
        </span>
      )}
      <br />
      <span>
        <b>name:</b> {name}
      </span>
      <br />
      <span>
        <b>username:</b> {username}
      </span>
      <br />
      <span>
        <b>email:</b> {email}
      </span>
      <br />
      <div>
        <b>address:</b>
        <div className={style.addressInfo}>
          <b>street:</b> {street}
          <br />
          <b>suite:</b> {suite}
          <br />
          <b>city:</b> {city}
          <br />
          <b>zipcode:</b> {zipcode}
        </div>
      </div>
      <p>
        <b>geo:</b> {lat}
      </p>
    </div>
  );
};

export default UsersInnerData;
