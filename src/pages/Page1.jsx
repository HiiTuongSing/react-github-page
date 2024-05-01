import React from "react";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div>
      <h1>This is page 1!</h1>
      <Link to="/react-github-page/">Home</Link>
    </div>
  );
}
