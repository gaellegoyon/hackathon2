import React, { useState } from "react";
import DatePicker from "react-datepicker";
import CardVehicle from "../components/CardVehicle";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "react-day-picker/dist/style.css";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  return (
    <div className=" overflow-auto h-[94vh]">
      <Header />
      <div className=" mt-24 flex justify-center">
        <div className=" flex flex-col headerSearchItem">
          <span className="text-white">
            {" "}
            Selectionnez vos dates de reservation
          </span>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable
          />
          <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
          <DatePicker
            selected={endTime}
            onChange={(date) => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
      </div>
      <div className="mt-42">
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
