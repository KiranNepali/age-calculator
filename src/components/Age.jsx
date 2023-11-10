import React from "react";

export const Age = ({ age }) => {
  return (
    <div className="flex justify-center items-center flex-col tracking-wider mt-4 text-[#61677A] text-xl sm:text-medium font-medium text-center gap-1">
      <p>
        <span className="font-bold">{age.years} </span>years
      </p>
      <p>
        <span className="font-bold">{age.months} </span> months
      </p>
      <p>
        <span className="font-bold">{age.days} </span> days
      </p>
    </div>
  );
};
