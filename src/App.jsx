import { Age } from "./components/Age";
import { BirthDate } from "./components/BirthDate";

function App() {
  return (
    <>
      <div className="w-full h-screen mx-auto flex flex-col justify-center items-center gap-6 bg-[#F1EAFF]">
        <h1 className="font-bold">AGE CALCULATOR</h1>
        <BirthDate />
        <Age />
      </div>
    </>
  );
}

export default App;
