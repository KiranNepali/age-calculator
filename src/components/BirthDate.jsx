import React, { useState } from "react";
import { RiArrowDownFill } from "react-icons/ri";

export const BirthDate = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState("");

  const handleChangeDate = (e) => {
    const date = e.target.value;
    setBirthDate(date);
    // console.log(date);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center "
      >
        <input
          className="outline-none font-medium border-[1px] px-8 py-3 sm:py-1"
          onChange={handleChangeDate}
          type="date"
          value={birthDate}
        />
        <div className="w-full flex justify-center  items-center">
          <hr
            style={{
              width: "20rem",
              height: "2px",
            }}
          ></hr>
          <button
            disabled={!birthDate}
            type="submit"
            className="bg-[#7743DB] text-white rounded-[50%] p-4 text-2xl hover:bg-[#8f57f7]"
          >
            <RiArrowDownFill />
          </button>
        </div>
      </form>
    </div>
  );
};
