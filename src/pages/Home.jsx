import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is the homepage component!</h1>
      <Link className="btn btn-outline-primary" to="/react-github-page/page1">
        Page 1
      </Link>
    </div>
  );
}
