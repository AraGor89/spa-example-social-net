import React, { useEffect } from "react";
import UsersInnerData from "./UsersInnerData";
import style from "./users.module.css";
const Users = (props) => {
  useEffect(() => {
    if (!props.users.length) {
      props.getUsersthunkCreator();
    }
  }, [props.users]);
  return (
    <div>
      <h2>Users list</h2>
      {!props.loaded ? (
        <div>...Loading</div>
      ) : (
        props.users.map((user) => {
          let { id, name, username, email } = user;
          let { street, suite, city, zipcode } = user.address;
          let { lat } = user.address.geo;
          return (
            <div key={id} className={style.user}>
              <UsersInnerData
                name={name}
                username={username}
                email={email}
                street={street}
                suite={suite}
                city={city}
                zipcode={zipcode}
                lat={lat}
              />
            </div>
          );
        })
      )}
    </div>
  );
};
export default Users;
