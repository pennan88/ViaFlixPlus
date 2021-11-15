import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Routes } from "./routes/Routes";

export const App = () => {
  return (
    <div className="wrapper">
        <Routes>
          <Navigation/>
        </Routes>

    </div>
  );
};
