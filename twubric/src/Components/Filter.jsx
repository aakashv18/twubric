import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex flex-col mt-5 items-center justify-center">
      <p className="font-bold">Joined Twitter Between</p>
      <div className="flex flex-col lg:flex-row xl:flex-row">
        <p className="ml-2">Start Date:</p>
        <DatePicker
          selected={startDate}
          className="ml-2 border"
          onChange={(date) => {
            setStartDate(date);
            onFilter(
              Math.floor(startDate.getTime() / 1000.0),
              Math.floor(endDate.getTime() / 1000.0)
            );
          }}
        />
        <p className="ml-2">End Date: </p>
        <DatePicker
          selected={endDate}
          className="ml-2 border"
          onChange={(date) => {
            setEndDate(date);
            onFilter(
              Math.floor(startDate.getTime() / 1000.0),
              Math.floor(endDate.getTime() / 1000.0)
            );
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
