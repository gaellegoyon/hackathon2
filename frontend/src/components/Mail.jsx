/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultAvatar from "./DefaultAvatar";

function Mail() {
  const navigate = useNavigate();

  const avatarOption =
    "w-[60px] h-[60px] rounded-full bg-[#890000] flex justify-center items-center border-[2px] border-black";

  const avatarTextOption = "text-white font-main-font text-2xl font-medium";
  return (
    <div
      onClick={() => navigate("/mail")}
      className="w-full h-[10vh] mb-2 bg-white shadow-2xl fl flex items-center pl-2"
    >
      <DefaultAvatar
        avatarOption={avatarOption}
        avatarTextOption={avatarTextOption}
      />
      <p className="pl-6 pr-2 pt-6 pb-6 text-[13px]">Objet : </p>

      <p className=" pr-6 pt-6 pb-6 text-[13px]">qsfsqfqsfqsfqsfqsfqsfqsfqsf</p>
    </div>
  );
}

export default Mail;
