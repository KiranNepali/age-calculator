import React from "react";

export const Age = ({ age }) => {
  return (
    <div>
      Your are {age.years} years, {age.months} months and {age.days} days old.
    </div>
  );
};
