/* eslint-disable react/prop-types */
import React from "react";
import { useCurrentUserContext } from "../contexts/userContext";

function DefaultAvatar({ avatarOption, avatarTextOption }) {
  const { user, validUploadToast, imgSrc } = useCurrentUserContext();
  return (
    <div>
      <div className={avatarOption}>
        {validUploadToast ? (
          <p className={avatarTextOption}>
            {user.firstname[0]}
            {user.lastname[0]}
          </p>
        ) : (
          <img src={imgSrc} alt="avatar" className="object-fill rounded-full" />
        )}
      </div>
    </div>
  );
}

export default DefaultAvatar;
