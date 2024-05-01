import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Page1 from "./pages/Page1.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/react-github-page/" element={<Home />} />
        <Route path="/react-github-page/page1" element={<Page1 />} />
      </Routes>
    </>
  );
}
