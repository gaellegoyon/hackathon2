import React, { useState } from "react";
import DatePicker from "react-datepicker";
import CarFilter from "../components/CarFilter";
import BikeFilter from "../components/BikeFilter";
import ScooterFilter from "../components/ScooterFilter";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CardVehicle from "../components/CardVehicle";

// import Navbar from "../components/Navbar";
import "react-day-picker/dist/style.css";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  return (
    <div>
      <Header />
      <div>
        <div className=" pt-20 flex justify-center">
          <div className=" flex flex-col headerSearchItem">
            <span className="text-white font-main-font text-[17px] mb-2">
              Selectionnez vos dates de reservation
            </span>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <DatePicker
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable
                  className="rounded-xl mb-1 p-2 align-center text-center"
                />

                <DatePicker
                  selected={startTime}
                  onChange={(date) => setStartTime(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="rounded-xl mb-1 p-2 align-center text-center"
                />
                <DatePicker
                  selected={endTime}
                  onChange={(date) => setEndTime(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="rounded-xl mb-1 p-2 align-center text-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around w-full pt-[2rem] mb-6">
          <CarFilter />
          <ScooterFilter />
          <BikeFilter />
        </div>

        <div className="overflow-auto h-[55vh]">
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
        </div>

        <Navbar />
      </div>
    </div>
  );
}

export default Home;
