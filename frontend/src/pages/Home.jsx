import React, { useState } from "react";
import { format } from "date-fns";
import fr from "react-date-range/dist/locale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import CardVehicle from "../components/CardVehicle";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "react-day-picker/dist/style.css";

function Home() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className=" overflow-auto h-[94vh]">
      <Header />
      <div className=" mt-24 flex justify-center">
        <div className=" flex flex-col headerSearchItem">
          <span className="text-white">
            {" "}
            Selectionnez vos dates de reservation
          </span>
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-white headerIcon"
          />
          <button
            type="button"
            onClick={() => setOpenDate(!openDate)}
            className="text-white headerSearchText"
          >
            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}
          </button>
          {openDate && (
            <DateRange
              locale={fr}
              editableDateInputs
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className=" mt-36 flex justify-center date"
              minDate={new Date()}
              rangeColors={["#890000"]}
            />
          )}
        </div>
      </div>
      <div className="mt-96">
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
