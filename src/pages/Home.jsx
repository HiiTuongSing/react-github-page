import React from "react";
import { Link } from "react-router-dom";
import Cat from "/src/images/cat.jpg";

export default function Home() {
  return (
    <div>
      <h1>This is the homepage component!</h1>
      <img width="200" height="200" src={Cat} alt="cat" className="rounded" />
      <Link className="btn btn-outline-primary" to="/react-github-page/page1">
        Page 1
      </Link>
    </div>
  );
}
