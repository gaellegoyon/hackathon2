/* eslint-disable react/prop-types */
import React from "react";
import { useCurrentUserContext } from "../contexts/userContext";

function DefaultAvatar({ avatarOption, avatarTextOption }) {
  const { user } = useCurrentUserContext();
  return (
    <div>
      <div className={avatarOption}>
        <p className={avatarTextOption}>
          {user.firstname[0]}
          {user.lastname[0]}
        </p>
      </div>
    </div>
  );
}

export default DefaultAvatar;
