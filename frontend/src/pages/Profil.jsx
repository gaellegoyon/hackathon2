import React from "react";
import DefaultAvatar from "@components/DefaultAvatar";

function Profil() {
  const avatarOption =
    "w-[140px] h-[140px] rounded-full bg-[#890000] flex justify-center items-center border-[2px] border-black";

  const avatarTextOption = "text-white font-main-font text-5xl font-medium";
  return (
    <div>
      <div className="flex justify-center mt-[5rem]">
        <DefaultAvatar
          avatarOption={avatarOption}
          avatarTextOption={avatarTextOption}
        />
      </div>
    </div>
  );
}

export default Profil;
