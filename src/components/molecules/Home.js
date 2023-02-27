import React from "react";
import Landing from "./Landing";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Landing />
      </div>
    </>
  );
}
