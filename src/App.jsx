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

    // console.log(setAge);
  };

  return (
    <>
      <div className="w-full h-screen mx-auto flex flex-col justify-center items-center  text-[#61677A]">
        <div className="bg-white sm:rounded-lg rounded-br-[8rem] sm:rounded-br-[20rem] py-[12rem] px-2 sm:p-[10rem] flex flex-col justify-center items-center gap-10 sm:gap-1 ">
          <h1 className="font-bold text-4xl sm:text-3xl mb-3 tracking-widest text-center px-2">
            AGE CALCULATOR
          </h1>
          <BirthDate calculateAge={calculateAge} />
          {age && <Age age={age} />}
        </div>
      </div>
    </>
  );
}

export default App;
