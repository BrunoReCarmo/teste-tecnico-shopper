import "./index.css";
import React from "react";
import Maps from "./components/Maps";
import { Header } from "./components/Header";
import { Driver } from "./components/Driver";

const App = () => {
  return (
    <div className="max-w-screen">
      <Header />
      <div className="h-screen md:px-32 flex justify-center">
        <Maps />
      </div>
    </div>
  );
};

export default App;
