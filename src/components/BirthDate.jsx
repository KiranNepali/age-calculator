import React, { useState } from "react";

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
        className="flex justify-center items-center gap-5"
      >
        <input onChange={handleChangeDate} type="date" value={birthDate} />
        <button disabled={!birthDate} type="submit" className="bg-white">
          Convert
        </button>
      </form>
    </div>
  );
};
