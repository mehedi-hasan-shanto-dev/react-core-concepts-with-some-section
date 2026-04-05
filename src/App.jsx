import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/Navbar/Navbar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ReasultChart from "./Components/ReasultChart/ReasultChart";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
const marksPromise = axios.get("marksData.json");
function App() {
  // const pricingPromiseData = pricingPromise();
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

      <ReasultChart></ReasultChart>
    </>
  );
}

export default App;

// 34-5 Display Pricing options in Pricing Card  6 minutes 45second from start
