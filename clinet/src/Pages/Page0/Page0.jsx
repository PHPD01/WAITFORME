import React from "react";
import App from "../../syuan/App";
import Search from "../components/Search";
import Cbutton from "./CityButton/Cbutton";
import FTbutton from "./FoodTypeButton/FTbutton";

function Page0() {
  return (
    <div>
      <p>調整版面</p>
      <p>調整版面</p>
      <Search />
      <Cbutton />
      <FTbutton />
      <App />
    </div>
  );
}

export default Page0;
