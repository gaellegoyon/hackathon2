import React from "react";
import DefaultAvatar from "@components/DefaultAvatar";
import { useNavigate } from "react-router-dom";

function BigMail() {
  const avatarOption =
    "w-[120px] h-[120px] rounded-full bg-[#890000] flex justify-center items-center border-[2px] border-black";

  const avatarTextOption = "text-white font-main-font text-5xl font-medium";

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div>
      <div className="flex justify-end">
        <button type="button" className="back mt-8 mr-4 z-50" onClick={goBack}>
          <svg
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            fill="white"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <DefaultAvatar
          avatarOption={avatarOption}
          avatarTextOption={avatarTextOption}
        />
        <div className="mt-16 flex justify-center items-center bg-white w-[80%] rounded-xl h-[5vh]">
          <p className=" pl-6 pr-2 pt-6 pb-6 text-[16px]">Objet : </p>

          <p className="  pr-6 pt-6 pb-6 text-[16px]">
            qsfsqfqsfqsfqsfqsfqsfqsfqsf
          </p>
        </div>
        <div className="p-8 mt-8 flex justify-center items-center bg-white w-[90%] rounded-2xl h-[30vh]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit
            nostrum, quae quia distinctio sequi esse, sapiente optio aperiam
            ducimus eos ipsam. Sed ex omnis reprehenderit, quo ab obcaecati
            ipsum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default BigMail;
