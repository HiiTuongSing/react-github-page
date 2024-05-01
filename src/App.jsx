import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/react-github-page/" element={<Home />} />
      </Routes>
    </>
  );
}
