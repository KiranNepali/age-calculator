import { useState } from "react";
import { Age } from "./components/Age";
import { BirthDate } from "./components/BirthDate";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj);
    const ageDays = differenceInDays(today, birthDateObj);

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });

    console.log(setAge);
  };

  return (
    <>
      <div className="w-full h-screen mx-auto flex flex-col justify-center items-center gap-6 bg-[#F1EAFF]">
        <h1 className="font-bold">AGE CALCULATOR</h1>
        <BirthDate calculateAge={calculateAge} />
        {age && <Age age={age} />}
      </div>
    </>
  );
}

export default App;
