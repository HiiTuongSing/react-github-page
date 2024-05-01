import React from "react";
import { Link } from "react-router-dom";
import Cat from "/src/images/cat2.jpg";

export default function Page1() {
  return (
    <div>
      <h1>This is page 1!</h1>
      <img width="200" height="200" src={Cat} alt="cat" className="rounded" />
      <Link className="btn btn-outline-primary" to="/react-github-page/">
        Home
      </Link>
    </div>
  );
}
