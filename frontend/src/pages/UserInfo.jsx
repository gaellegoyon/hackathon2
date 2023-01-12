import React, { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultAvatar from "../components/DefaultAvatar";
import CurrentUserContext from "../contexts/userContext";

function UserInfo() {
  const errorUploadToast = () =>
    toast.error("Upload échoué !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const validUploadToast = () =>
    toast.success("Upload réussi !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const avatarOption =
    "w-[140px] h-[140px] rounded-full bg-[#890000] flex justify-center items-center border-[2px] border-black";

  const avatarTextOption = "text-white font-main-font text-5xl font-large";

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { user, setUser, token } = useContext(CurrentUserContext);
  const [msg, setMsg] = useState("");

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const avatarRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatarRef.current.files[0]) {
      // recupération des articles.
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("avatar", avatarRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeader,
        body: formData,
      };
      // on appelle le back
      fetch("http://localhost:5000/api/avatars", requestOptions)
        .then((response) => response.json())
        .then((results) => {
          // maj avatar
          setUser({ ...user, avatar: results.avatar });
          validUploadToast();
        })
        .catch((error) => {
          console.error(error);
          errorUploadToast();
        });
    } else {
      setMsg("Aucun fichier");
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button type="button" className="back mt-8 mr-4" onClick={goBack}>
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
      <div className="flex flex-col items-center justify-center mt-[3rem]">
        <DefaultAvatar
          avatarOption={avatarOption}
          avatarTextOption={avatarTextOption}
        />
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center mt-[3rem]"
        >
          <input
            type="file"
            ref={avatarRef}
            id="file"
            className="bblock w-full mt-4 mb-4 text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-[#890000]-50 file:text-[#890000]-700
            hover:file:bg-[#890000]-100"
          />
          <button type="submit" className="button3 mb-20 mt-5">
            Valider
          </button>
          <p className="text-white">{msg}</p>
        </form>
        <div className=" w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="pb-4 bg-[#6e6e6e] text-white flex justify-center items-center w-[80%] rounded-xl mb-4 h-[5vh]">
              <h3 className="mt-5 text-[1.1rem] ">{user.firstname}</h3>
            </div>
            <div className="pb-4 bg-[#6e6e6e] text-white flex justify-center items-center w-[80%] rounded-xl mb-4 h-[5vh]">
              <h3 className="  mt-5 text-[1.1rem] ">{user.lastname}</h3>
            </div>
            <div className=" pb-4 bg-[#6e6e6e] text-white flex justify-center items-center w-[80%] rounded-xl h-[5vh]">
              <h3 className=" mt-5 text-[1.1rem] ">{user.email}</h3>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="button3 mb-5 mt-10"
          onClick={() => navigate("/message")}
        >
          Modifier mes informations
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserInfo;
